import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkillRibbon from './components/SkillRibbon'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'

function App() {

  return (
    <div className="container col-xl-8 black-bg-color anchor-parent justify-content-center">
      <div className="px-0">
        <Navbar />
      </div>
      <div className="light-grey-bg-color px-0 p-3 my-0">
        <Hero />
        <SkillRibbon />

        <div className="mx-5 mt-5">
          <About />
          <Experience />
          <Projects />
        </div>
      </div>

      <div className="dark-grey-bg-color px-0 pb-3 my-0">
        <div className="mx-5 py-5">
          <Education />
        </div>
      </div>

      <div id="business-card" className="yellow-bg-color px-0 p-5 my-5">
        <Footer />
      </div>
    </div>
  )
}

export default App
