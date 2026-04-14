import type { Metadata } from 'next';
import Navbar from '@/components/common/Navbar';
import InternalHero from '@/components/sections/InternalHero';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'About Visionland | National Land Survey Coordination',
  description:
    'Experience precision with Visionland. Managing tens of thousands of surveys nationwide with pinpoint accuracy and advanced technical support.',
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <InternalHero
        title="Our Story & Commitment to Precision"
        subtitle="Decades of technical expertise combined with the latest survey technology. We deliver the data you need for informed property decisions."
        breadcrumb="About Us"
      />
      <About variant="page" whiteBg={true} />
      <Contact />
      <Footer />
    </main>
  );
}
