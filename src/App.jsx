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
    <div className="container black-bg-color anchor-parent">
      <div className="container col-xxl-8 light-grey-bg-color px-0 py-3 my-0">
        <Navbar />
        <Hero />
        <SkillRibbon />

        <div className="mx-5 mt-5 pt-5">
          <About />
          <Experience />
          <Projects />
        </div>
      </div>

      <div className="container col-xxl-8 dark-grey-bg-color px-0 pb-3 my-0">
        <div className="mx-5 py-5">
          <Education />
        </div>
      </div>

      <div className="container col-xxl-8 yellow-bg-color px-0 py-3 my-0">
        <Footer />
      </div>
    </div>
  )
}

export default App
