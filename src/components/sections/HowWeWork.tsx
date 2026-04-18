'use client';

export default function HowWeWork() {
  const steps = [
    {
      number: '01',
      title: 'Submit Order',
      description: 'Fill out our order form with property info and survey type needed.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'We Contact You',
      description: 'We confirm details and provide a transparent quote within 1 hour.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Field Survey',
      description: 'Licensed surveyors with GPS and drone equipment deployed to your property.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Receive Report',
      description: 'Professional CAD, PDF, and GIS deliverables — ready on schedule.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-[var(--brand)] py-12 overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 dot-bg-dark opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* heading */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-sky-300 mb-3">
            Simple Process
          </p>
          <h2 className="font-display font-800 leading-tight mt-4 text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            How Your Survey Gets Done
          </h2>
        </div>

        {/* timeline line */}
        <div className="hidden lg:block absolute top-[55%] left-0 w-full h-[1px] bg-white/10"></div>

        {/* steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group text-center relative transition-all duration-300 hover:-translate-y-2"
            >
              {/* icon */}
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl flex items-center justify-center 
                bg-white/10 backdrop-blur-md border border-white/20 
                text-sky-200 group-hover:bg-sky-400/20 group-hover:text-white transition">
                {step.icon}
              </div>

              {/* step number */}
              <div className="text-6xl font-bold text-white/10 absolute -top-6 left-1/2 -translate-x-1/2">
                {step.number}
              </div>

              {/* content */}
              <h3 className="text-white font-semibold text-lg mb-2 mt-6">
                {step.title}
              </h3>
              <p className="text-sm text-sky-200/70 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>

              {/* connector dot */}
              <div className="hidden lg:block absolute top-[40%] left-1/2 w-2 h-2 bg-sky-300 rounded-full -translate-x-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}