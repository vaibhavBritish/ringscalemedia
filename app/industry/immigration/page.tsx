"use client";
import LeadForm from "@/app/components/LeadForm";
import React from "react";

const ImmigrationPage = () => {
  return (
    <div className="font-serif text-gray-900 bg-white">

      {/* HERO SECTION */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Immigration <span className="text-gray-800">Marketing Agency</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Helping Immigration Consultants, Visa Agencies & Global Mobility Firms
            Generate High-Quality Leads & Applications
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              Book Free Strategy Call
            </button>
            <button className="border border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition">
              Get Consultation
            </button>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white shadow p-6 rounded-xl font-semibold">1000+ Visa Leads Generated</div>
          <div className="bg-white shadow p-6 rounded-xl font-semibold">50+ Immigration Brands Served</div>
          <div className="bg-white shadow p-6 rounded-xl font-semibold">90% Client Retention</div>
          <div className="bg-white shadow p-6 rounded-xl font-semibold">Global Reach</div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Immigration Is Built on <span className="text-gray-800">Trust & Visibility</span></h2>
        <p className="text-gray-600 mb-4">
          The immigration industry is highly competitive, compliance-driven, and trust-based.
          Prospective migrants research extensively before choosing a visa consultant or agency.
          They look for credibility, transparency, and proven success.
        </p>
        <p className="text-gray-600">
          At <span className="font-semibold text-gray-900">Ring Scale Media</span>, we specialize in immigration
          marketing strategies that build authority, attract genuine applicants, and convert
          enquiries into successful visa cases.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Our Immigration Marketing Services</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-gray-900 font-semibold mb-2">Immigration Website Design</h3>
            <p className="text-gray-600">
              High-trust, multilingual, conversion-optimized websites designed
              to educate users and generate visa enquiries.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-gray-900 font-semibold mb-2">Lead Generation Funnels</h3>
            <p className="text-gray-600">
              Smart funnels targeting student visas, PR, work permits, business visas,
              and family immigration.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-gray-900 font-semibold mb-2">Google Ads for Immigration</h3>
            <p className="text-gray-600">
              Highly targeted Google Ads campaigns focused on intent-based visa keywords
              while ensuring policy compliance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-gray-900 font-semibold mb-2">Social Media Advertising</h3>
            <p className="text-gray-600">
              Meta & LinkedIn campaigns that build awareness, trust, and inbound visa leads.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-gray-900 font-semibold mb-2">SEO for Immigration Keywords</h3>
            <p className="text-gray-600">
              Rank your agency for student visa, PR, work visa & country-specific searches.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-gray-900 font-semibold mb-2">CRM & Automation</h3>
            <p className="text-gray-600">
              Automate follow-ups, WhatsApp messages, email nurturing, and lead tracking.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 max-w-4xl mx-auto px-4 bg-gray-100 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-8">Why Immigration Agencies Choose Us</h2>
        <ul className="text-gray-700 space-y-3 list-none">
          <li>✔ Deep understanding of immigration compliance & ad policies</li>
          <li>✔ Focus on genuine, qualified visa leads</li>
          <li>✔ Country-specific targeting strategies</li>
          <li>✔ End-to-end marketing & automation support</li>
          <li>✔ Transparent reporting & ROI tracking</li>
        </ul>
      </section>

      {/* VISA TYPES */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Visa Categories We Market</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {[
            "Student Visa Marketing",
            "Permanent Residency (PR)",
            "Work Permit Campaigns",
            "Business & Investor Visas",
            "Family Sponsorship",
            "Tourist & Visitor Visas"
          ].map((visa) => (
            <div key={visa} className="bg-gray-50 p-6 rounded-xl text-center font-semibold shadow">{visa}</div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-16 bg-gray-50 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Immigration Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-gray-900 font-semibold mb-2">Global Visa Consultants</h3>
            <p className="text-gray-600">
              Increased qualified student visa leads by 220% using Google Ads,
              SEO landing pages, and CRM automation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-gray-900 font-semibold mb-2">PR Pathway Experts</h3>
            <p className="text-gray-600">
              Built a high-converting funnel for PR & work permits
              across Canada and Australia markets.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-gray-900 font-semibold mb-2">Overseas Immigration Group</h3>
            <p className="text-gray-600">
              Reduced cost per lead by 40% while scaling enquiries
              across multiple countries.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Immigration Marketing Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {[
            "1. Market & Visa Analysis",
            "2. Funnel & Website Strategy",
            "3. Ads, SEO & Content Launch",
            "4. Lead Tracking & Automation",
            "5. Scaling & Optimization"
          ].map((step) => (
            <div key={step} className="bg-white p-6 rounded-xl font-semibold shadow">{step}</div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gray-900 text-white text-center rounded-2xl mx-4 md:mx-16 lg:mx-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Immigration Business?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let us help you build a predictable, compliant, and scalable
          lead generation system for your immigration brand.
        </p>
        <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition">
          Talk to Immigration Marketing Experts
        </button>
      </section>

      <section>
        <LeadForm />
      </section>
    </div>
  );
};

export default ImmigrationPage;
