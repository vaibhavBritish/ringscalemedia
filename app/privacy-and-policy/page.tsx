import Image from "next/image";
import React from "react";

const PrivacyAndPolicy = () => {
  return (
    <div className="bg-white text-black font-sans leading-relaxed">

      <section
        className="relative text-center text-white py-32 px-6 border-b-4 border-red-600 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557683304-673a23048d34?q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-black mb-6">Privacy Policy</h1>
          <p className="text-lg opacity-95">
            Your privacy matters. Learn how RingScaleMedia.com collects,
            protects, and uses your information while delivering premium
            digital services.
          </p>
        </div>
      </section>


      <main className="max-w-6xl mx-auto px-6 py-12">
        <p className="mb-6">
          Welcome to RingScale Media. Protecting your personal information is one
          of our top priorities. This Privacy Policy explains how we collect,
          use, store, and protect your data.
        </p>

     
        <h2 className="border-l-4 border-red-600 pl-3 text-xl font-semibold mt-10 mb-4">
          1. Information We Collect
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, email, phone number,
            business details, and payment information.
          </li>
          <li>
            <strong>Usage Data:</strong> Pages visited, device type, browser,
            and interaction data.
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, logs, and diagnostics.
          </li>
          <li>
            <strong>Cookies & Tracking:</strong> Used for analytics and
            personalization.
          </li>
        </ul>

        <h2 className="border-l-4 border-red-600 pl-3 text-xl font-semibold mt-10 mb-4">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Improve website performance and user experience</li>
          <li>Respond to inquiries and deliver services</li>
          <li>Customer support and communication</li>
          <li>Marketing and promotions (opt-in only)</li>
          <li>Security, fraud prevention, and compliance</li>
        </ul>

        <h2 className="border-l-4 border-red-600 pl-3 text-xl font-semibold mt-10 mb-4">
          3. Data Protection & Security
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>SSL/TLS encrypted data transfer</li>
          <li>Firewall-protected infrastructure</li>
          <li>Restricted internal data access</li>
          <li>Regular security audits</li>
        </ul>

        <h2 className="border-l-4 border-red-600 pl-3 text-xl font-semibold mt-10 mb-4">
          4. Sharing Your Information
        </h2>
        <p>
          We never sell your data. Information is shared only with trusted
          service providers or when legally required.
        </p>

        <h2 className="border-l-4 border-red-600 pl-3 text-xl font-semibold mt-10 mb-4">
          5. Cookies & Tracking Technologies
        </h2>
        <p>
          Cookies help enhance user experience. You may disable cookies in your
          browser, but some features may not work properly.
        </p>

        <h2 className="border-l-4 border-red-600 pl-3 text-xl font-semibold mt-10 mb-4">
          6. Your Rights
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Access or correct your personal data</li>
          <li>Request deletion of your data</li>
          <li>Withdraw marketing consent</li>
          <li>Request data portability</li>
        </ul>

        <h2 className="border-l-4 border-red-600 pl-3 text-xl font-semibold mt-10 mb-4">
          7. GDPR & CCPA Compliance
        </h2>
        <p>
          We comply with GDPR and CCPA regulations for applicable users.
        </p>

        <h2 className="border-l-4 border-red-600 pl-3 text-xl font-semibold mt-10 mb-4">
          8. Contact Us
        </h2>
        <p className="mt-2">
          <strong>Email:</strong> support@ringscalemedia.com <br />
          <strong>Website:</strong> https://ringscalemedia.com
        </p>
      </main>


    </div>
  );
};

export default PrivacyAndPolicy;
