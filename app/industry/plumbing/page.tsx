"use client";

import LeadForm from "@/app/components/LeadForm";
import React from "react";

const PlumbingPage = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* HERO */}
      <section className="min-h-screen flex items-center bg-linear-to-r from-gray-100 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Grow Your <span className="text-pink-600">Plumbing Business</span> With Digital Marketing That Converts
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600">
            Ring Scale Media helps plumbing companies generate consistent service calls,
            emergency leads, and long-term customers through data-driven digital strategies.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="#"
              className="px-8 py-3 rounded-full font-semibold bg-gray-900 text-white hover:bg-gray-800 transition"
            >
              Get Free Plumbing Audit
            </a>
            <a
              href="#"
              className="px-8 py-3 rounded-full font-semibold border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Digital Marketing Built for Plumbing Companies
          </h2>
          <div className="bg-white p-10 rounded-2xl shadow-lg space-y-4">
            <p>
              Plumbing businesses depend on fast visibility and trust. When a pipe bursts
              or a drain backs up, customers search online immediately.
            </p>
            <p>
              We specialize in helping plumbing companies dominate local search,
              generate emergency leads, and convert website visitors into booked jobs.
            </p>
            <p>
              Our plumbing marketing strategies are designed to increase call volume,
              reduce ad waste, and build a strong brand presence in your service area.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Plumbing Marketing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Local SEO for Plumbers",
                desc: "Rank your plumbing business on Google Maps and local search results.",
              },
              {
                title: "Google Ads for Emergency Leads",
                desc: "Capture high-intent plumbing searches that convert instantly.",
              },
              {
                title: "Plumbing Website Design",
                desc: "Fast-loading, conversion-focused websites built for service calls.",
              },
              {
                title: "Call Tracking & Analytics",
                desc: "Track every lead source and measure real ROI.",
              },
              {
                title: "Reputation & Reviews",
                desc: "Increase 5-star reviews and build trust with new customers.",
              },
              {
                title: "Service Area Expansion",
                desc: "Target new neighborhoods and cities with scalable campaigns.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-1.25 transition-transform"
              >
                <h3 className="text-2xl font-bold text-pink-600 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Why Plumbing Businesses Choose Ring Scale Media
          </h2>
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Industry-specific plumbing marketing expertise</li>
              <li>Emergency-lead focused strategies</li>
              <li>Transparent reporting & ROI tracking</li>
              <li>No long-term lock-in contracts</li>
              <li>Dedicated campaign managers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Proven Plumbing Growth Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Market Analysis", desc: "We analyze your competitors and service demand." },
              { step: "02", title: "Campaign Setup", desc: "SEO, ads, and landing pages optimized for calls." },
              { step: "03", title: "Lead Optimization", desc: "Improve conversion rates and reduce cost per lead." },
              { step: "04", title: "Scaling Growth", desc: "Expand service areas and increase revenue." },
            ].map((process, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <span className="text-4xl font-bold text-pink-600">{process.step}</span>
                <h3 className="text-2xl font-semibold text-gray-900 mt-3">{process.title}</h3>
                <p className="text-gray-600 mt-2">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "3X", desc: "Increase in Service Calls" },
            { stat: "120%", desc: "ROI Improvement" },
            { stat: "500+", desc: "Plumbing Leads Generated" },
            { stat: "24/7", desc: "Emergency Lead Coverage" },
          ].map((item, idx) => (
            <div key={idx}>
              <h3 className="text-4xl font-bold text-blue-400">{item.stat}</h3>
              <p className="text-gray-200 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            What Our Plumbing Clients Say
          </h2>
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-2xl mx-auto">
            <p className="text-gray-700 mb-4">
              “Ring Scale Media transformed our plumbing business.
              Our emergency calls doubled within two months.”
            </p>
            <strong className="text-gray-900">— Mike R., Plumbing Company Owner</strong>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get More Plumbing Jobs?</h2>
          <p className="text-gray-300 mb-8">
            Book a free strategy call with our plumbing marketing experts.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-gray-900 px-10 py-4 font-bold rounded-full hover:bg-gray-200 transition"
          >
            Schedule Free Consultation
          </a>
        </div>
      </section>

      <section>
        <LeadForm />
      </section>
    </div>
  );
};

export default PlumbingPage;
