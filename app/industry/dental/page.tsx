
"use client";
import CaseStudies from "@/app/components/CaseStudies";
import Counter from "@/app/components/Counter"
import LeadForm from "@/app/components/LeadForm";
import PartnersAndRewards from "@/app/components/PartnersAndRewards"

const Dental = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-linear-to-r from-pink-50 to-white min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Grow Your <span className="text-pink-500">Dental Practice</span> With Digital Excellence
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Ring Scale Media helps dentists attract high-quality patients using
              powerful digital marketing strategies, branding, and automation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#"
                className="px-8 py-3 rounded-full bg-linear-to-r from-pink-500 to-pink-700 text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                Get Free Strategy
              </a>

              <a
                href="#"
                className="px-8 py-3 rounded-full border-2 border-pink-500 text-pink-500 font-semibold hover:bg-pink-50 transition"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-pink-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Dental Marketing That Builds Trust
          </h2>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-pink-100 max-w-4xl">
            <p className="text-gray-600 leading-relaxed mb-4">
              Dental marketing is not just about visibility—it’s about trust.
              We help clinics build authority, credibility, and long-term patient relationships
              using ethical marketing strategies tailored for dentists.
            </p>

            <p className="text-gray-600 leading-relaxed">
              From SEO to social media and patient funnels, our solutions are
              designed to grow your practice sustainably.
            </p>
          </div>
        </div>
      </section>

      <PartnersAndRewards />

      {/* SERVICES */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Our Dental Marketing Services
          </h2>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dental SEO",
                desc: "Rank your clinic on Google and attract local patients actively searching for dental services.",
              },
              {
                title: "Paid Ads (Google & Meta)",
                desc: "Target high-intent patients using conversion-optimized ad campaigns.",
              },
              {
                title: "Website Design",
                desc: "High-converting, mobile-friendly dental websites that build trust instantly.",
              },
              {
                title: "Reputation Management",
                desc: "Increase positive reviews and manage your clinic’s online reputation.",
              },
              {
                title: "Social Media Marketing",
                desc: "Educate, engage, and attract patients through consistent content.",
              },
              {
                title: "Patient Funnel Automation",
                desc: "Convert website visitors into booked appointments automatically.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-pink-500 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Counter />

      {/* WHY US */}
      <section className="bg-linear-to-r from-white to-pink-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Why Dentists Choose Ring Scale Media
          </h2>

          <ul className="space-y-4 text-gray-600 list-disc list-inside max-w-3xl">
            <li>Industry-specific dental expertise</li>
            <li>Ethical & compliant marketing strategies</li>
            <li>ROI-focused performance tracking</li>
            <li>Custom strategies for each clinic</li>
            <li>Dedicated account managers</li>
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Our Proven Growth Process
          </h2>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Audit & Strategy",
                desc: "We analyze your clinic’s online presence and competition.",
              },
              {
                step: "02",
                title: "Implementation",
                desc: "SEO, ads, website, and funnel setup tailored to your goals.",
              },
              {
                step: "03",
                title: "Optimization",
                desc: "Continuous improvement based on performance data.",
              },
              {
                step: "04",
                title: "Scaling",
                desc: "Expand patient acquisition while maintaining quality.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md text-center"
              >
                <span className="text-4xl font-bold text-pink-500">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudies />

      {/* CTA */}
      <section className="bg-linear-to-r from-pink-500 to-pink-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Grow Your Dental Practice?
          </h2>

          <p className="mt-4 text-lg opacity-90">
            Get a free strategy session with our dental marketing experts.
          </p>

          <a
            href="#"
            className="inline-block mt-10 px-10 py-4 bg-white text-pink-600 font-bold rounded-full hover:scale-105 transition"
          >
            Book Free Consultation
          </a>
        </div>

      
      </section>
      <section>
        <LeadForm />
      </section>
    </>
  )
}

export default Dental
