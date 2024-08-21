import { Element } from 'react-scroll';
import NavBar from './components/NavBar/navbar'
import Footer from './components/Footer/footer';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Gallery from './pages/Gallery/gallery'
import Tools from './pages/Contact/tools'

import './App.css'


const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Element name='home'>
        <Home/>
      </Element>
      <Element name="about">
        <About/>
      </Element>
      <Element name="gallery">
        <Gallery/>
      </Element>
      <Element name="tools">
        <Tools/>
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </div>
  )

}

export default App
