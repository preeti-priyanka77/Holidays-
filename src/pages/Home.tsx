import Hero from '../components/Hero';
import Features from '../components/Features';
import PackageGrid from '../components/PackageGrid';
import Testimonials from '../components/Testimonials';
import Brands from '../components/Brands';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <PackageGrid />
      <Brands />
      <Testimonials />
    
    </div>
  );
}

export default Home;
