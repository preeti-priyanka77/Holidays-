import Hero from '../components/Hero';
import Features from '../components/Features';
import PackageGrid from '../components/PackageGrid';
import Testimonials from '../components/Testimonials';
import Brands from '../components/Brands';
function Home() {
  return (
    <div>
      <Hero />

      <Features />
      <PackageGrid />
      <Brands />
      <Testimonials />
    
    </div>
  );
}

export default Home;
