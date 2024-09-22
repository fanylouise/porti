import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
export const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Hero/>
      <About/>
      <Projects/>
    </main>
  )
}
export default App

/*1:47*/