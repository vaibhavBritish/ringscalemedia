"use client";

import React from "react";
import Image from "next/image";
import LeadForm from "@/app/components/LeadForm";

const HomeServices = () => {
  return (
    <div className="font-inter text-gray-900 bg-white">

      {/* HERO */}
      <section className="bg-linear-to-br from-pink-600 to-pink-400 text-white py-32 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Home Services Marketing That Brings Real Customers</h1>
          <p className="text-lg mb-6">
            From plumbers and electricians to HVAC and cleaning businesses,
            Ring Scale Media helps home service companies dominate their local markets.
          </p>
          <a href="/get-in-touch.php.html" className="inline-block px-8 py-3 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-100 transition">Get Free Consultation</a>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Home Service Businesses Need Digital Marketing</h2>
          <p className="mb-4">
            Today’s customers search online before calling a home service provider.
            If your business is not visible on Google, Maps, and social platforms,
            you’re losing leads to competitors every day.
          </p>
          <p>
            We build high-converting websites, run local SEO campaigns, and manage paid
            ads that drive phone calls and bookings for home service businesses.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Home Services Marketing Solutions</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Local SEO", desc: "Rank your business on Google Maps and local search results. We optimize listings, citations, and reviews to drive organic leads." },
              { title: "Website Design", desc: "Fast, mobile-friendly websites designed to convert visitors into calls, form submissions, and bookings." },
              { title: "Google Ads", desc: "High-intent paid ads targeting customers searching for emergency and same-day home services." },
              { title: "Social Media Marketing", desc: "Build trust and brand visibility through engaging social media content and local promotions." },
              { title: "Reputation Management", desc: "Increase positive reviews and manage your online reputation to build customer confidence." },
              { title: "CRM & Automation", desc: "Lead tracking, automated follow-ups, and scheduling systems to grow your business efficiently." },
            ].map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-xl shadow-lg text-left">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Home Service Industries We Work With</h2>
          <ul className="columns-2 gap-4 text-left list-none">
            {["Plumbing Services", "HVAC & Heating", "Electrical Contractors", "Cleaning Services", "Pest Control", "Roofing & Construction", "Landscaping & Lawn Care", "Appliance Repair"].map((item) => (
              <li key={item} className="py-1 font-medium">✔ {item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Ring Scale Media</h2>
          <p className="mb-6">
            We understand the home services market and focus on generating
            real business results, not vanity metrics.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {["Proven Local Marketing Strategies", "ROI-Focused Campaigns", "Transparent Reporting", "Dedicated Account Managers", "Scalable Growth Solutions"].map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-gray-800">
                <span className="text-pink-600 font-bold">✔</span> {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Grow Your Home Services Business Today</h2>
          <p className="mb-6">
            Let’s turn online searches into real customers.
            Get a customized marketing strategy for your business.
          </p>
          <a href="/get-in-touch.php.html" className="inline-block px-8 py-3 bg-pink-600 rounded-full font-semibold hover:bg-pink-500 transition">
            Request Free Strategy
          </a>
        </div>
      </section>

      <section>
        <LeadForm />
      </section>
    </div>
  );
};

export default HomeServices;
