import HeroSection from '../components/HeroSection'
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import Blog from '../components/Blog'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Banner />
      <About />
      <Services />
      <Blog />
    </div>
  )
}
