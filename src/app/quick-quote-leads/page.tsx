import type { Metadata } from 'next';
import Navbar from '@/components/common/Navbar';
import InternalHero from '@/components/sections/InternalHero';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Quick Quoter App | Visionland',
  description: 'Download the Quick Quoter App by Visionland for real-time survey quotes and FEMA flood zone status right on your device.',
};

export default function QuickQuoteLeadsPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <InternalHero
        title="Quick Quoter App"
        subtitle="The world's only app-based survey company providing real-time quotes and instantaneous flood zone responses."
        breadcrumb="Quick Quote Leads"
      />

      <section className="bg-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-light opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="reveal">
              <span className="badge-light mb-6 block w-fit">Mobile App</span>
              <h2 className="font-display font-800 text-4xl sm:text-5xl leading-tight mb-8" style={{ color: 'var(--text-h)' }}>
                Description of <span className="gt-brand">Mobile App</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-body)' }}>
                QUICK QUOTER allows realtors, lenders, or anyone involved in a real estate transaction to be more productive with a simple yet powerful tool to get your land survey quote in real time when you are listing a property, selling a property, or negotiating a transaction.
              </p>
              <p className="text-base leading-relaxed mb-8 text-gray-600">
                We are the world's only app-based survey company that will not only return a survey quote within minutes but also give an instantaneous response if a particular parcel of land is within a flood zone. This vital piece of information can tremendously impact the potential sale as flood insurance is often an unexpected expense that isn't revealed until you or your clients are days away from the closing.
              </p>

              <div className="flex gap-4">
                <img src="/itunes-logo.webp" alt="iTunes Store" className="h-16 object-contain" />
              </div>
            </div>

            <div className="relative reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="aspect-square h-auto rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-50 flex items-center justify-center p-8">
                <img loading="lazy" src="/successful_realtors.webp" className="w-full h-auto object-contain rounded-2xl" alt="Successful Realtors Use Quick Quoter" />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20 flex-col-reverse lg:flex-row">
            <div className="relative reveal lg:order-1">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-50 flex items-center justify-center p-8">
                <img loading="lazy" src="/visionland-quick-quoter-app.webp" className="w-full h-auto object-contain rounded-2xl" alt="Visionland Quick Quoter App" />
              </div>
            </div>
            <div className="reveal lg:order-2" style={{ transitionDelay: '0.2s' }}>
              <h3 className="font-display font-800 text-3xl mb-6 text-brand">Features</h3>
              <ul className="space-y-4 mb-10">
                {[
                  'Instant survey quotes in any area pushed back to your device.',
                  'Receive a FEMA Map showing where the property falls within that map within 10 minutes of request.',
                  'QUICK QUOTER will produce and provide any requested information about platted easements on a particular parcel.'
                ].map((feature, i) => (
                  <li key={i} className="flex gap-4 text-gray-700 items-start">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-brand flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <h3 className="font-display font-800 text-3xl mb-6 text-brand">Benefits</h3>
              <ul className="space-y-4 mb-8">
                {[
                  'Real time answers on cost and delivery date of survey (if applicable).',
                  'Instantly know if the property is in a flood zone and may require flood insurance.',
                  'Quick Analysis on any neighboring properties that may have been re-designated out of the flood zone.'
                ].map((benefit, i) => (
                  <li key={i} className="flex gap-4 text-gray-700 items-start">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 reveal bg-[#f7fbff] p-10 rounded-3xl border border-blue-100">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Installing this app will afford the user the unique ability to have access, 24 hours a day, to Vision Land Service's team of highly trained professionals. With a combined 125 years of knowledge at your disposal, it makes good business sense to tap into this free resource. For everyone who is in the real estate business, from small firms to large companies, lenders, and investors, QUICK QUOTER is a better way to work. At Vision Land Service, we give you the kind of service your clients demand of you! That level of service is nothing but the best.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              This feature will be of great benefit to everyone involved because of the potential of lowering, or in many cases, being able to have the property reclassified out of the flood zone. After your submission, you will receive a small narrative of the information that our team has gathered. Survey cost and estimated completion date, flood zone classification and any adjacent parcels that have a LOMA.
            </p>
            <p className="text-gray-900 font-bold italic mb-6">
              Stay light years ahead of your competition, impress your clients by your ability to gather real-time information that can mean making the difference between closing a deal or breaking a deal.
            </p>
            <p className="text-gray-500 text-sm">
              Patent Pending 2016
            </p>
          </div>

        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
