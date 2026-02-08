import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Process from '@/components/sections/Process';
import Services from '@/components/sections/Services';
import TargetAudience from '@/components/sections/TargetAudience';
import Certifications from '@/components/sections/Certifications';
import Testimonials from '@/components/sections/Testimonials';
import WhyMe from '@/components/sections/WhyMe';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Process />
        <Services />
        <TargetAudience />
        <Certifications />
        {/* TODO: Отзывы временно скрыты */}
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
