"use client";
import { motion } from "framer-motion";
import PartnersAndRewards from "../../components/PartnersAndRewards";
import Counter from "../../components/Counter";
import CaseStudies from "../../components/CaseStudies";
import Testimonials from "../../components/Testimonials";
import LeadForm from "@/app/components/LeadForm";
// import LeadForm from "../../components/LeadForm";

const education = () => {
    return (
        <div className="bg-linear-to-b from-gray-100 via-white to-gray-50 text-gray-800">
            <div className="max-w-7xl mx-auto">

                {/* HERO */}
                <section className="flex flex-col justify-center items-center text-center min-h-screen px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-gray-900">
                            Education <span className="text-black">Marketing Agency</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-600 italic">
                            Empowering educational institutions with strategic, data-driven
                            marketing excellence
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

                <section className="py-16">
                    <PartnersAndRewards />
                </section>

                {/* INTRO */}
                <section className="px-6 py-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-12 items-center"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6">
                                Education Marketing Tailored for Real Impact
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In today’s competitive education ecosystem, institutions must
                                connect meaningfully with students, parents, and educators.
                                Effective education marketing builds trust, communicates value,
                                and positions your institution as a credible, aspirational
                                choice.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At <span className="font-semibold">Ringtech Marketing</span>, we
                                design integrated education marketing strategies that drive
                                awareness, increase qualified inquiries, and support long-term
                                enrollment growth across digital channels.
                            </p>
                            <button className="bg-linear-to-r from-gray-900 to-black px-8 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                Learn More
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <video
                                src="/industry/book.mp4"
                                className="rounded-2xl shadow-2xl w-full max-w-md"
                                autoPlay
                                muted
                                loop
                            />
                        </div>
                    </motion.div>

                    {/* CONTENT */}
                    <div className="grid md:grid-cols-2 gap-12 py-20">
                        <div className="space-y-6 text-gray-700">
                            <p>
                                <span className="font-semibold">Ringtech Marketing</span> brings
                                deep education-sector expertise combined with decades of digital
                                marketing experience, enabling institutions to stay competitive
                                in an increasingly digital-first world.
                            </p>
                            <p>
                                Our full-funnel marketing approach attracts high-intent
                                enrollment leads, nurtures them with relevant content, and
                                converts interest into measurable admissions growth.
                            </p>
                            <p>
                                As students and parents research institutions extensively
                                online, your digital presence directly impacts credibility,
                                trust, and decision-making at every stage.
                            </p>
                            <p>
                                Through data-driven storytelling, compelling content, and
                                intelligent automation, we help educational brands stand out,
                                connect authentically, and grow sustainably.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Our Education Marketing Services
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Branding & Website Design</li>
                                <li>Social Media & Content Strategy</li>
                                <li>Lead Generation Campaigns</li>
                                <li>HubSpot CRM Setup & Training</li>
                                <li>Database Management & Email Campaigns</li>
                                <li>Marketing Automation Systems</li>
                                <li>Digital Marketing Training & Support</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="py-10">
                    <Counter />
                </section>

                {/* AWARDS */}
                <section className="px-6 py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl shadow-md p-10 border border-gray-200"
                    >
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-800 mb-4">
                                    Award-Winning Campaign Excellence
                                </h2>
                                <p className="text-gray-700">
                                    Our education marketing campaigns have been recognized for
                                    innovation and measurable success, including the{" "}
                                    <span className="font-semibold">
                                        “Best Integrated Campaign”
                                    </span>{" "}
                                    award at the MENA Search Awards — highlighting our ability to
                                    combine strategy, creativity, and performance.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src="/industry/videoframe2.png"
                                    alt="Award-winning campaign"
                                    className="rounded-2xl shadow-lg"
                                />
                            </div>
                        </div>
                    </motion.div>
                </section>

                <section className="py-16">
                    <CaseStudies />
                </section>

                <section className="py-16">
                    <Testimonials />
                </section>

                {/* FUNNEL */}
                <section className="px-6 py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-12 items-center"
                    >
                        <div className="space-y-5 text-gray-700">
                            <h2 className="text-3xl font-serif font-bold text-gray-900">
                                Marketing for the Education Sector
                            </h2>
                            <p className="text-lg font-medium text-gray-800">
                                A Full Admissions-Funnel Approach for Schools & Universities
                            </p>
                            <p>
                                Education marketing requires alignment between marketing,
                                admissions, and technology. Our strategies focus on awareness,
                                inquiry generation, application growth, and enrollment success.
                            </p>
                            <p>
                                Every interaction across digital touchpoints is tracked,
                                measured, and optimized to ensure prospective students move
                                confidently through the admissions journey.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <video
                                src="/industry/book.mp4"
                                className="rounded-2xl shadow-xl w-full max-w-md"
                                autoPlay
                                muted
                                loop
                            />
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 mt-16 text-gray-700">
                        <div className="space-y-6">
                            <p>
                                <span className="font-semibold">Ringtech Marketing</span> builds
                                every education strategy around the admissions funnel —
                                generating awareness, capturing high-quality leads, and enabling
                                meaningful admission interactions.
                            </p>
                            <p>
                                Through tools such as CRM automation, email marketing, and
                                WhatsApp communication, we manage and nurture every lead in
                                real-time, ensuring maximum conversion potential.
                            </p>
                            <p>
                                Our goal is long-term engagement and trust — delivering
                                personalized, seamless experiences that strengthen your
                                institution’s reputation and enrollment outcomes.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Our Toolbox & Growth Drivers
                            </h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Targeted Google & Social Media Campaigns</li>
                                <li>Conversion-focused education landing pages</li>
                                <li>Real-time CRM & admissions dashboards</li>
                                <li>Automated WhatsApp & email workflows</li>
                            </ul>
                            <p className="mt-6">
                                Our proven frameworks and award-winning results position{" "}
                                <span className="font-semibold">Ringtech Marketing</span> as a
                                trusted growth partner for education institutions worldwide.
                            </p>
                            <button className="mt-6 bg-linear-to-r from-gray-900 to-black px-8 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                Connect with Our Team
                            </button>
                        </div>
                    </div>
                </section>
     <section>
        <LeadForm />
      </section>

            </div>
        </div>
    );
};

export default education;
