"use client";
import { motion } from "framer-motion";
import PartnersAndRewards from "../../components/PartnersAndRewards";
import CaseStudies from "../../components/CaseStudies";
import Testimonials from "../../components/Testimonials";
import LeadForm from "@/app/components/LeadForm";
// import LeadForm from "../../components/LeadForm";

const b2bMarketing = () => {
  return (
    <div className="bg-linear-to-b from-gray-100 via-white to-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <section className="flex flex-col justify-center items-center text-center min-h-[90vh] px-6 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-gray-900">
              B2B <span className="text-black">Marketing</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 italic">
              Empowering Your Business with Scalable, Data-Driven B2B Marketing Strategies
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="border border-gray-900 text-gray-900 px-10 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-gray-900 hover:text-white hover:shadow-lg">
                Speak to Us
              </button>
              <button className="bg-linear-to-r from-gray-900 to-black px-10 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                Get Started
              </button>
            </div>
          </motion.div>
        </section>

        {/* PARTNERS */}
        <section className="py-12">
          <PartnersAndRewards />
        </section>

        {/* INTRO */}
        <section className="py-20 px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
                There’s an Art to B2B Marketing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                B2B marketing is complex, strategic, and relationship-driven. It
                requires a deep understanding of your business model, target
                audience, competitive landscape, and long sales cycles. Every
                lead must be carefully generated, nurtured, qualified, and
                converted with precision.
              </p>
              <p className="text-gray-700 leading-relaxed">
                That’s where <span className="font-semibold">Ring Tech Marketing</span>{" "}
                steps in. We help B2B organizations create high-impact marketing
                strategies that align sales and marketing teams, improve lead
                quality, and accelerate revenue growth through measurable,
                repeatable systems.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/industry/videoframe.png"
                alt="B2B Marketing Visual"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 w-72"
              />
            </div>
          </motion.div>
        </section>

        {/* CORE CONTENT */}
        <section className="py-20 px-6 bg-white rounded-3xl shadow-inner">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-start"
          >
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                B2B marketing focuses on demonstrating how your products or
                services solve real business challenges. At{" "}
                <span className="font-semibold">Ring Tech Marketing</span>, we
                combine data, creativity, and technology to build strong brand
                awareness, generate qualified leads, and create long-term value.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We immerse ourselves in your organization — understanding your
                goals, buyers, and decision-making processes — before designing
                comprehensive marketing and sales funnels that deliver the right
                message at the right stage of the buyer journey.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our approach ensures that marketing efforts are aligned with
                revenue objectives, helping your business close deals faster,
                reduce acquisition costs, and scale sustainably.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-3">
                Our key B2B marketing solutions include:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Branding & Website Design</li>
                <li>Social Media & Content Marketing</li>
                <li>Lead Generation Campaigns</li>
                <li>HubSpot CRM Setup & Training</li>
                <li>Database Management & Email Campaigns</li>
                <li>Marketing Automation Systems</li>
                <li>Digital Marketing Training</li>
              </ul>
            </div>
          </motion.div>
        </section>

        <CaseStudies />
        <Testimonials />

        {/* EXPERIENCE */}
        <section className="py-20 px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since 2005,{" "}
                <span className="font-semibold">Ring Tech Marketing</span> has
                partnered with leading B2B organizations worldwide, delivering
                expertise in lead generation, account-based marketing, demand
                generation, and integrated digital strategies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When you work with us, you gain a dedicated team of marketing
                professionals focused on planning, execution, optimization, and
                performance tracking — ensuring consistent growth and measurable
                ROI.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/industry/videoframe.png"
                alt="Digital Marketing Strategy"
                className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 w-72"
              />
            </div>
          </motion.div>
        </section>

        {/* AUTOMATION */}
        <section className="py-20 px-6 bg-linear-to-r from-white via-gray-100 to-white rounded-3xl shadow-md">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
                B2B Automation
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Automation plays a critical role in modern B2B marketing by
                simplifying complex workflows, improving efficiency, and
                enabling consistent, personalized communication at scale.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a trusted <span className="font-semibold">HubSpot Partner</span>,{" "}
                <span className="font-semibold">Ring Tech Marketing</span>{" "}
                implements CRM systems and automation platforms that streamline
                lead management, sales alignment, and performance tracking.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our holistic approach is rooted in HubSpot’s flywheel framework,
                supported by customer feedback mechanisms like Net Promoter
                Scoring (NPS), ensuring continuous optimization and sustainable
                business growth.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="/industry/b2b.webp"
                alt="B2B Automation"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </section>

        <section className="py-20">
          <LeadForm />
        </section>

      </div>
    </div>
  );
};

export default b2bMarketing;
