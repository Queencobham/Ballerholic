import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Why from './components/Why'
import Pricing from './components/Pricing'
import Partners from './components/Partners'
import Fames from './components/Fames'
import Footer from './components/Footer'
import Testimonial from './components/Testimonial'
// import Slider from "./components/slider/Slider"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Why />
      <Pricing />
      <Partners />
      <Testimonial />
      <Fames />
      <Footer />
      {/* <Slider /> */}
    </div>
  )
}

export default Home
