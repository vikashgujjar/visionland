import type { Metadata } from 'next';
import Navbar from '@/components/common/Navbar';
import InternalHero from '@/components/sections/InternalHero';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import '@/styles/globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aerial Drone Survey | Visionland',
  description: 'High-precision aerial mapping and data collection using advanced UAV technology at Visionland.',
};

export default function DroneServicePage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      <InternalHero
        title="Aerial Drone Survey"
        subtitle="Many stories have been written about things up in the sky and beyond. However, a new story is being written right before our very eyes. It is the story of something up in the sky within just 400 feet. At AirDronics we are the authors of this story."
        breadcrumb="Services / Aerial Drone Survey"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 reveal">
              <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80" alt="Aerial Drone Survey" className="w-full h-[450px] object-cover" />
            </div>

            <div className="space-y-8 reveal" style={{ transitionDelay: '0.1s' }}>
              <h2 className="font-display font-800 text-3xl sm:text-4xl text-navy-dark leading-tight">
                Aerial <span className="gt-brand">Land Surveys</span>
              </h2>
              <div className="text-lg leading-relaxed text-gray-600 space-y-6">
                <p>
                  Aerial Surveys previously have been notoriously expensive operations, however with access to innovations such as our aerial drones, we are able to survey most areas without any inconvenience along with competitive pricing that is substantially lower than the traditional methods.
                </p>
                <p>
                  We deliver highly accurate topographic data combined with high-resolution aerial photography and orthoimagery using UAV. The use of this technology and approach is an innovative change in the acquisition of land survey data. By using rotary UAV platforms, we are able to provide topographic and land survey data that is critical in your project management, development and acquisitions.
                </p>
              </div>

              {/* Applications List */}
              <div className="mt-12 bg-blue-50/40 border border-blue-100 rounded-[2rem] p-8 sm:p-10">
                <h3 className="font-display font-800 text-2xl mb-6 text-brand">Applications</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Topographic surveys',
                    'Volumetric surveys',
                    'Construction progress photography',
                    'Route surveys',
                    'As-built surveys',
                    'Site design',
                    'Panoramic Photos'
                  ].map((app, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand text-white flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-md font-display font-600 text-navy-dark">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panoramic Photos */}
              <div className="mt-16">
                <h3 className="font-display font-800 text-3xl mb-8 text-navy-dark">Panoramic <span className="text-brand">Photos</span></h3>
                
                <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                  <p>
                    Aerial panoramic photography is perfect for site evaluation, overviews, construction progress, marketing and promotional videos.
                  </p>
                  <p>
                    Our stable multi-rotor UAV can be flown to any position and capture images from 180&deg; or 360&deg;. Our UAV can be sent back to precise locations capturing new images.
                  </p>
                  <div className="border-l-4 border-brand pl-6 my-8 py-2 bg-gray-50/50">
                    <p className="text-navy-dark font-600 italic">
                      AirDronics has the ability to create a real time overlay of the progression of the project from concept to completion.
                    </p>
                  </div>
                  <p>
                    Images are delivered as digital files or large format prints.
                  </p>
                  <p>
                    With an FAA 333 Exemption we are able to quickly and legally mobilize our team quickly providing a unique and state of the art product.
                  </p>
                  <p>
                    In conjunction with AeroUAVs, we have access to resources and expertise to handle any project backed by the approval and all applicable laws and regulations set forth by the Federal Aviation Administration.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 rounded-[2rem] bg-navy-dark text-white shadow-2xl sticky top-32">
              <span className="badge-light mb-6 block w-fit">Request a Quote</span>
              <h4 className="font-display font-800 text-2xl mb-6">Need an <span className="gt-sky-dark">Aerial Survey</span> for your project?</h4>
              <p className="text-sky-100/70 text-sm mb-8">Ready to provide the precision data your project needs. We respond to all requests within 1 hour.</p>

              <Link href="/order" className="btn-brand w-full py-4 rounded-xl flex items-center justify-center gap-2 group">
                Order Your Survey
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-sky-300 font-700">Call Support</p>
                  <p className="text-lg font-display font-700">(888) 399-8474</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Contact whiteBg={true} />
      <Footer />
    </main>
  );
}
