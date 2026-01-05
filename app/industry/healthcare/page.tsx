"use client"
import CaseStudies from '@/app/components/CaseStudies'
import LeadForm from '@/app/components/LeadForm'
import PartnersAndRewards from '@/app/components/PartnersAndRewards'
import Testimonials from '@/app/components/Testimonials'
import React from 'react'

const Healthcare = () => {
    return (
        <div className="font-sans text-gray-800">

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center text-center bg-linear-to-r from-blue-50 via-white to-blue-50 px-6 md:px-0">
                <div className="space-y-6 max-w-3xl">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
                        HealthCare <span className="text-blue-900">Marketing Agency</span>
                    </h1>

                    <p className="text-xl italic text-gray-600">
                        Two-Time Winner of <span className="font-semibold text-blue-700">Best Use of Search in Health</span>
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 pt-6">
                        <button className="border-2 border-blue-900 px-10 py-3 rounded-full font-semibold hover:bg-blue-900 hover:text-white transition">
                            Speak to Us
                        </button>

                        <button className="bg-blue-900 text-white px-10 py-3 rounded-full font-semibold hover:scale-105 transition">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>

            {/* Partners & Awards */}
            <section className="relative py-24 bg-gray-50">
                <PartnersAndRewards />
            </section>

            {/* Industry Insight */}
            <section className="grid md:grid-cols-2 gap-16 items-center px-6 md:px-20 py-24">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold">
                        The healthcare industry is multi-faceted and vast
                    </h2>

                    <p className="text-gray-700 leading-relaxed text-lg">
                        In today's fast-paced digital world, standing out in healthcare requires a perfect blend of strategy, creativity, and technology.
                        Our team ensures your healthcare brand reaches the right audience, builds trust, and drives measurable growth.
                    </p>

                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                        <li>Patient-focused Marketing Strategies</li>
                        <li>Data-driven Campaigns & Analytics</li>
                        <li>SEO, Paid Ads & Content Marketing</li>
                        <li>Reputation Management & PR</li>
                    </ul>

                    <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
                        Learn More
                    </button>
                </div>

                <video
                    src="/industry/book.mp4"
                    autoPlay
                    muted
                    loop
                    className="rounded-3xl shadow-2xl max-w-lg mx-auto hover:scale-105 transition-transform"
                ></video>
            </section>

            {/* Services */}
            <section className="grid md:grid-cols-2 gap-16 px-6 md:px-20 py-24 bg-gray-50">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                    <h2 className="text-3xl font-serif font-bold">
                        Ringtech Marketing: Your Healthcare Partner
                    </h2>

                    <p className="text-lg">
                        For over a decade, we have been helping healthcare brands reach patients, improve engagement, and generate leads. Our holistic approach ensures measurable results.
                    </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-xl">
                    <h3 className="text-2xl font-semibold mb-6 text-blue-900">
                        Our Healthcare Marketing Services
                    </h3>

                    <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                        <li>Branding & Website Design</li>
                        <li>Social Media Management & Content Creation</li>
                        <li>Lead Generation & Patient Acquisition</li>
                        <li>HubSpot CRM Setup & Training</li>
                        <li>SEO & Paid Advertising Campaigns</li>
                        <li>Reputation Management & PR</li>
                    </ul>
                </div>
            </section>

            {/* Achievements */}
            <section className="py-24 text-center bg-blue-50">
                <h2 className="text-4xl font-serif font-bold mb-16">
                    Our Achievements
                </h2>

                <div className="grid md:grid-cols-4 gap-8 px-6 md:px-20">
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
                        <h3 className="text-3xl font-bold text-blue-900">150+</h3>
                        <p className="text-gray-700 mt-2">Healthcare Brands Served</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
                        <h3 className="text-3xl font-bold text-blue-900">10+ Years</h3>
                        <p className="text-gray-700 mt-2">Industry Experience</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
                        <h3 className="text-3xl font-bold text-blue-900">500M+</h3>
                        <p className="text-gray-700 mt-2">Patient Reach Worldwide</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
                        <h3 className="text-3xl font-bold text-blue-900">2X</h3>
                        <p className="text-gray-700 mt-2">Search Marketing Awards</p>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-24 px-6 md:px-20 bg-white">

                <CaseStudies />
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-gray-50 px-6 md:px-20">

                <Testimonials />
            </section>

            {/* Strategy Video */}
            <section className="grid md:grid-cols-2 gap-16 items-center px-6 md:px-20 py-24">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold">
                        Marketing for the Healthcare Sector
                    </h2>

                    <p className="text-lg">
                        Our digital marketing strategy ensures that your business hosts a high-quality website that funnels leads into the buyer’s journey through clean functionality, quality information, user-friendly navigation, and appropriate data collection points.
                    </p>

                    <p>Our team of web designers and developers will create or revitalise your website to be ready to convert leads through a platform that attracts users and builds trust in your product or service. A strong website also requires content that is appealing, eye-catching, valuable, and informative.

                        It is important to create content that establishes your brand as an industry leader. Helpful blogs, long-form articles, and e-books are some of the many healthcare content marketing routes to take in order to educate and attract new patients or customers. Our content team ensures that the appropriate format and subjects are created for your target audience.

                        Ultimately, NEXA aims to utilise all marketing channels to best take your lead as close to a sale as possible. Our track record shows how we have provided this to countless clients successfully. We have the tools and expertise to drive your healthcare business to generate more leads and drive more conversions.</p>

                    <p>Ringtech Marketing uses the admissions funnel as the foundation of every strategy—creating awareness, generating qualified leads, and organizing meaningful admission meetings.

                        Through innovative tools like WhatsApp, email marketing, and CRM integrations with HubSpot, we manage and track every lead in real time—ensuring that no opportunity is missed.

                        Our mission is to build long-term engagement and trust by delivering personalized communication and seamless user experiences throughout the admissions journey.</p>
                </div>

                <video
                    src="/industry/book.mp4"
                    autoPlay
                    muted
                    loop
                    className="rounded-3xl shadow-2xl max-w-lg mx-auto hover:scale-105 transition-transform"
                ></video>
            </section>

            {/* CTA Section */}
            <section className="grid md:grid-cols-2 gap-16 items-center py-32 px-6 md:px-20 bg-blue-50 rounded-3xl">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold">
                        Start Your Healthcare Marketing Journey
                    </h2>

                    <p className="text-gray-700 text-lg">
                        Let’s collaborate to grow your healthcare brand. Our experts will guide you with strategies that are patient-centric and result-oriented.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
                            Get Started
                        </button>
                        <button className="border-2 border-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-900 hover:text-white transition">
                            Speak to Us
                        </button>
                    </div>
                </div>

                <img
                    src="/industry/healthcare-team.webp"
                    alt="Healthcare Marketing Team"
                    className="rounded-3xl shadow-2xl max-w-lg mx-auto"
                />
            </section>
            <section>
                <LeadForm />
            </section>
        </div>
    )
}

export default Healthcare
