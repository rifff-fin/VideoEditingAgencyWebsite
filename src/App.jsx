import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Project from './Components/Project/Project'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Reviews from './Components/Reviews/Reviews'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Carousel from './Components/Carousel/Carousel'







const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Carousel/>
      <About/>
      <Title subTitle='Your Global Partner for Creative Excellence' title=" You can access Artographica's services from anywhere in the world. Our expertise includes Video Editing, Audio Editing, 2D/3D Animation, Graphic Design, Digital Marketing, UI/UX Design, and Web Development, all tailored to meet your creative and business needs."/>
      <Project/>
      <Title subTitle='A Sneak Peek at Our Latest Projects' title="No matter where you are, our expert team is ready to deliver top-notch services. From video editing and audio refinement to 2D/3D animation, graphic design, digital marketing, UI/UX design, and web development – we bring your ideas to life with precision and creativity "/>
      
      <Campus/>
      
      <Title subTitle='Reviews' title="Some words from our previous worked clints"/>
      <Reviews/>
      
      <Title subTitle='Contact us ' title="JUst give us a knock we'll be next to theryoue for "/>
      <Contact/>
      <Footer/>
      
      <div className="something" style={{ color: 'red' }}>  </div>
    </div>
  )
}

export default App
