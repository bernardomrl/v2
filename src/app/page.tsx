import { Header, Footer } from '@/components';
import { About, Contact, Hero, Projects } from '@/components/sections';

export default function Index() {
  return (
    <>
      <Header />
      <div className="space-y-20">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
