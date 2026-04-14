'use client';

import Link from 'next/link';

export default function About({
  whiteBg = false,
  variant = 'grid'
}: {
  whiteBg?: boolean;
  variant?: 'grid' | 'page';
}) {
  if (variant === 'page') {
    return (
      <section
        id="about"
        className="relative py-24 lg:py-32 overflow-hidden bg-white"
      >
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/30 -skew-x-12 transform origin-top"></div>
        <div className="absolute inset-0 grid-bg-light opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* Left Content Area - 7 columns */}
            <div className="lg:col-span-7 space-y-8 reveal">
              <div>
                <span className="badge-light mb-6 inline-block">Our Story</span>
                <h2 className="font-display font-800 text-4xl sm:text-6xl text-navy-dark leading-[1.1] mb-6">
                  Experience & <span className="gt-brand">Pinpoint Accuracy</span>
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                <p className="font-600 text-navy-dark text-xl">
                  We have the experience and know-how to get your projects completed on time and with pinpoint accuracy.
                </p>
                <p>
                  We have managed tens of thousands of projects of all sizes including <span className="text-brand font-600">ALTA/ACSM Surveys, Residential Mortgage Surveys, Elevation Certificates, As-Built Surveys, and Boundary Surveys.</span> These are the most common types of surveys ordered by our clients.
                </p>
                <p>
                  While we specialize in large multi-site, multi-state transactions, we also have the flexibility to provide outstanding service and technical support for your single site transactions.
                </p>

                <div className="bg-navy-dark rounded-[2rem] p-8 text-white relative overflow-hidden group shadow-2xl my-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 rounded-full -mr-16 -mt-16 blur-3xl transition-all group-hover:bg-brand/40"></div>
                  <h3 className="font-display font-700 text-2xl mb-4 text-sky-400">Standardized Excellence</h3>
                  <p className="text-sky-100/80 text-md leading-relaxed">
                    Vision Land Service employs a standardized survey format. Easements, encroachment lines, and boundary lines are highlighted in color. Our surveys are situated on a landscape type format that offers a clear view of the structure and its dimensions.
                  </p>
                </div>

                <p>
                  Our surveys are designed with the most recent (2011) ALTA/ACSM minimum standards in mind. We enjoy the art and science of land surveying and having the depth of knowledge within our organization virtually eliminates the learning curve for any unique or site specific problem resolution.
                </p>

                <p>
                  By affording <span className="text-navy-dark font-700 underline decoration-brand/30">Vision Land Service</span> the opportunity to coordinate your survey needs, you will enjoy the highest quality of expertise from one of the nation’s leading providers in land title survey coordination.
                </p>

                <p>
                  To speed up your due diligence process, we manage the entire process from ordering through review to delivery, and by utilizing ‘one point of contact’ clients are saved valuable time and money.
                </p>

                <p className="border-l-4 border-brand pl-6 italic text-gray-500 text-base">
                  With a national network of surveyors at our disposal, Vision Land Service can get you a quality survey where you need it, when you need it, and at a competitive price. We will be able to tailor our services to your project needs, whether it is a single site or a multiple site, multi-state transaction.
                </p>
              </div>
            </div>

            {/* Right Side - Visual / Stats area - 5 columns */}
            <div className="lg:col-span-5 sticky top-32">
              <div className="relative">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] relative">
                  <img
                    src="/about_surveyor.png"
                    alt="Visionland Precision"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent"></div>

                  {/* Floating Stat Card */}
                  <div className="absolute bottom-8 left-8 right-8 glass p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-brand flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand/20 text-white">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-3xl font-display font-800 text-white">100%</div>
                        <div className="text-sky-300 font-600 text-sm uppercase tracking-widest">Accuracy Record</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Floating Badge */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center p-4 border border-gray-100 animate-pulse">
                  <div className="text-center">
                    <div className="text-brand font-800 text-2xl">40+</div>
                    <div className="text-[0.6rem] font-700 text-gray-400 uppercase leading-tight">Years of<br />Expertise</div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 rounded-[2rem] bg-gray-50 border border-gray-100">
                <h4 className="font-display font-700 text-navy-dark mb-4">Ready to Start?</h4>
                <p className="text-sm text-gray-500 mb-6">Experience the Visionland difference on your next project.</p>
                <Link href="/order" className="btn-brand block w-full text-center py-4 rounded-xl">
                  Order Online Now
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }

  // Home Page variant (Grid)
  return (
    <section
      id="about"
      className={`py-20 lg:py-28 relative overflow-hidden ${whiteBg ? 'bg-white' : 'bg-gray-50'}`}
    >
      <div className="absolute inset-0 dot-bg-light opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[3.5rem] overflow-hidden shadow-2xl border border-gray-100">
          <div className="grid lg:grid-cols-2">

            {/* Left Box */}
            <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
              <img
                src="/about_surveyor.png"
                alt="Visionland Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0a1628]/40 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
                <span className="badge-dark w-fit mb-4">Since 1985</span>
                <h3 className="font-display font-800 text-4xl mb-4">Precision as an <span className="text-sky-400">Art Form</span></h3>
                <p className="text-sky-100/80 max-w-md">Combining the depth of historical knowledge with the power of modern spatial technology.</p>
              </div>
            </div>

            {/* Right Content */}
            <div className="p-12 lg:p-16 flex flex-col justify-center space-y-8">
              <div>
                <span className="badge-light mb-4 inline-block">Visionland Leadership</span>
                <h2 className="font-display font-800 text-4xl text-navy-dark mb-6">National Network, <span className="gt-brand">Local Expertise</span></h2>
                <div className="space-y-4 text-gray-600 text-md leading-relaxed">
                  <p>
                    With a national network of surveyors at our disposal, Vision Land Service can get you a quality survey where you need it, when you need it, and at a competitive price.
                  </p>
                  <p className="font-600 text-navy-dark">
                    We specialize in large multi-site transactions while maintaining the flexibility for single-site excellence.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { label: 'Standardized Format', desc: 'Color-highlighted easements' },
                  { label: 'One Contact', desc: 'Simplified process management' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 text-brand">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-700 text-navy-dark text-sm">{item.label}</div>
                      <div className="text-xs text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-6">
                <Link href="/about" className="btn-brand px-8 py-3.5 rounded-xl text-sm">
                  Learn More About Us
                </Link>
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Expert" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-brand flex items-center justify-center text-[10px] text-white font-700">+12</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
