import AboutCard from './about-card/aboutCard'
import About from './about/about'
import './App.css'
import Contact from './contact/contact'
import Footer from './footer/footer'
import Project from './homeproject/project'
import Image from './imagesec/image'
import Map from './map/map'
import Navbar from './navbar/navbar'

function App() {

  return (
    <>
    <Navbar />
    <Image />
    <Project />
    <About />
    <AboutCard />
    <Contact/>
    <Map/>
    <Footer/>
    </>
  )
}

export default App
