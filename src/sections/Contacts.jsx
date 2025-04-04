import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.jsx';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
//service_sttj0lp
//template_u6gh6ux
//public key b5NL5T-9fEvsP9OgJ
    emailjs
      .send(
        import.meta.env.REACT_APP_EMAILJS_USERID,
        import.meta.env.REACT_APP_EMAILJS_TEMPLATEID,
        {
          from_name: form.name,
          to_name: 'Fany Louise',
          from_email: form.email,
          to_email: 'gandra.fany@gmail.com',
          message: form.message,
        },
        import.meta.env.REACT_APP_EMAILJS_RECEIVERID,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Agradeço a sua mensagem 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "Eu não recebi sua mensagem 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container">
         
          <p className="text-lg text-white-600 mt-4">
          <h3 className="head-text">Vamos Conversar</h3>
          Seja para desenvolver um novo site, aprimorar sua plataforma atual ou realizar um projeto especial, posso te ajudar.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Nome Completo</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex.: Clara Peixoto"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">E-mail</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex.: clarapeixoto@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Sua mensagem</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Escreva sua mensagem aqui..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar mensagem'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

//https://www.telerik.com/blogs/sending-emails-react-app-using-emailjs