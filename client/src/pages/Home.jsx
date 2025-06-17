import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import HowItWorks from "../components/sections/HowItWorks"
import Services from "../components/sections/Services"
import FeaturedLawyers from "../components/sections/FeaturedLawyers"
import Testimonials from "../components/sections/Testimonials"
import Contact from "../components/sections/Contact"

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <FeaturedLawyers />
      <HowItWorks />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home