"use client";
import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-white text-black font-sans leading-relaxed px-4 py-8">
      <div className="max-w-6xl mx-auto">

    
        <section className="bg-white border-l-4 border-red-600 p-12 text-center rounded-xl shadow-md mb-8">
          <h1 className="text-4xl font-extrabold mb-4">Terms of Service</h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Your use of RingScaleMedia.com is governed by these professionally
            structured and legally compliant terms. Please review them carefully.
          </p>
        </section>

        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl border-2 border-red-600 flex items-center justify-center shadow-sm">
              <img
                src="/RingLogo.png"
                alt="RingScale Media"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">
                RingScale Media — Terms of Service
              </h1>
              <p className="text-sm text-gray-600">
                Clear expectations. Transparent policies. Strong protection.
              </p>
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="border-2 border-red-600 text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition"
          >
            Print
          </button>
        </header>

 
        <main className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">

          <article className="bg-gray-50 p-6 rounded-xl border shadow-sm space-y-8">

            <section id="general">
              <h2 className="text-red-600 text-xl font-bold mb-2">
                1. General Overview
              </h2>
              <p>
                These Terms of Service (“Terms”) govern your access to and use of
                <strong> RingScaleMedia.com</strong>. By using our platform, you
                agree to comply with these Terms and our Privacy Policy.
              </p>
              <p>
                If you disagree with any part of these Terms, you must stop using
                the platform immediately.
              </p>
            </section>

            <section id="ip">
              <h2 className="text-red-600 text-xl font-bold mb-2">
                2. Intellectual Property Rights
              </h2>
              <p>
                All content including logos, branding, text, media, software,
                and digital assets is the exclusive property of RingScale Media.
              </p>
              <p>
                Unauthorized reproduction or distribution may result in legal
                action.
              </p>
            </section>

            <section id="user-submissions">
              <h2 className="text-red-600 text-xl font-bold mb-2">
                3. User Submissions & Ownership
              </h2>
              <p>
                You retain ownership of content you submit but grant us a
                royalty-free license to use it for platform operations.
              </p>
              <p>
                We reserve the right to remove content that violates policies.
              </p>
            </section>

            <section id="conduct">
              <h2 className="text-red-600 text-xl font-bold mb-2">
                4. User Conduct
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>Posting illegal or harmful content</li>
                <li>Unauthorized system access or hacking</li>
                <li>Data scraping or harvesting</li>
                <li>Malware distribution</li>
                <li>Impersonation or fraud</li>
              </ul>
            </section>

            <section id="commerce">
              <h2 className="text-red-600 text-xl font-bold mb-2">
                5. Third-Party Services & E-Commerce
              </h2>
              <p>
                Transactions with third-party services are solely between you
                and the provider. We are not liable for external disputes.
              </p>
            </section>

            <section id="warranty">
              <h2 className="text-red-600 text-xl font-bold mb-2">
                6. Warranty Disclaimer
              </h2>
              <p>
                Services are provided “as is” without warranties of any kind.
                We do not guarantee uninterrupted or error-free service.
              </p>
            </section>

            <section id="liability">
              <h2 className="text-red-600 text-xl font-bold mb-2">
                7. Limitation of Liability
              </h2>
              <p>
                RingScale Media is not liable for indirect or consequential
                damages arising from platform usage.
              </p>
            </section>

            <section id="termination">
              <h2 className="text-red-600 text-xl font-bold mb-2">
                8. Termination of Access
              </h2>
              <p>
                Access may be suspended or terminated for violations, abuse,
                or security threats.
              </p>
            </section>

            <section id="dmca">
              <h2 className="text-red-600 text-xl font-bold mb-2">
                9. DMCA & Copyright Compliance
              </h2>
              <p>
                Report copyright infringement at{" "}
                <strong>support@ringscalemedia.com</strong> with valid proof.
              </p>
            </section>

            <section id="law">
              <h2 className="text-red-600 text-xl font-bold mb-2">
                10. Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of Ontario, Canada, unless
                otherwise required by law.
              </p>
            </section>

            <footer className="text-sm text-gray-500 border-t pt-3">
              Effective Date: December 10, 2025
            </footer>
          </article>

          
          <aside className="bg-gray-50 p-5 rounded-xl border shadow-sm h-fit sticky top-6">
            <nav className="space-y-2">
              {[
                ["General", "#general"],
                ["Intellectual Property", "#ip"],
                ["User Submissions", "#user-submissions"],
                ["User Conduct", "#conduct"],
                ["E-Commerce", "#commerce"],
                ["Warranty", "#warranty"],
                ["Liability", "#liability"],
                ["DMCA", "#dmca"],
                ["Governing Law", "#law"],
              ].map(([label, link]) => (
                <a
                  key={label}
                  href={link}
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-red-100 hover:text-red-600 transition"
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="mt-6">
              <h3 className="font-bold text-lg">Need customization?</h3>
              <p className="text-sm text-gray-600 mt-1">
                We can tailor this page for GDPR, CCPA, or industry-specific
                compliance.
              </p>
            </div>
          </aside>

        </main>
      </div>
    </div>
  );
};

export default TermsOfService;
