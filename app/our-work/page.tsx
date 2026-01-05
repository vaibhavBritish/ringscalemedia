"use client"

import Image from 'next/image'
import React from 'react'
import WorkFolioSlider from '../components/WorkFolioSlider'
import LeadForm from '../components/LeadForm'

const OurWork = () => {

    const clients = [
        {
            title: 'ANGELS AND VIDAS',
            desc: `Since our establishment in the year 2004, we have serviced 4800+ customers from 38+ countries.
    Based in the capital of India, New Delhi; we are highly acknowledged among our clients for our agile development process, SLA driven approach and on-time project.
    We have one of the best client-retention rates (97%+) across the industry.
    As on date, we are 450+ people company with over 70% CAGR over the past 3 years.`,
        },
        {
            title: 'CHINAR SCHOOL',
            desc: `Since our establishment in the year 2004, we have serviced 4800+ customers from 38+ countries.
    Based in the capital of India, New Delhi; we are highly acknowledged among our clients for our agile development process, SLA driven approach and on-time project.
    We have one of the best client-retention rates (97%+) across the industry.
    As on date, we are 450+ people company with over 70% CAGR over the past 3 years.`,
        },
        {
            title: 'ARRY BABA',
            desc: `Since our establishment in the year 2004, we have serviced 4800+ customers from 38+ countries.
    Based in the capital of India, New Delhi; we are highly acknowledged among our clients for our agile development process, SLA driven approach and on-time project.
    We have one of the best client-retention rates (97%+) across the industry.
    As on date, we are 450+ people company with over 70% CAGR over the past 3 years.`,
        },
        {
            title: 'TECNOLOGICO DE MONTERREY',
            desc: `Since our establishment in the year 2004, we have serviced 4800+ customers from 38+ countries.
    Based in the capital of India, New Delhi; we are highly acknowledged among our clients for our agile development process, SLA driven approach and on-time project.
    We have one of the best client-retention rates (97%+) across the industry.
    As on date, we are 450+ people company with over 70% CAGR over the past 3 years.`,
        },
    ]

    const services = [
        { name: 'Meta AI', src: '/who-we-are/meta.webp' },
        { name: 'OpenAI', src: '/who-we-are/openai.webp' },
        { name: 'Google Ads', src: '/who-we-are/google.png' },
        { name: 'Meta', src: '/who-we-are/meta.jpg' },
        { name: 'Microsoft', src: '/who-we-are/microsoft.png' },
    ]
    return (
        <div>
            <section className="relative w-full h-screen overflow-hidden">

                <Image
                    src="/who-we-are/work.jpg"
                    alt="City Night View"
                    fill
                    priority
                    className="object-cover"
                />


                <div className="absolute inset-0 bg-black/10" />


                <div className="absolute top-0 left-0 w-full h-48 bg-linear-to-b from-purple-900 via-pink-800 to-transparent opacity-90" />


                <div className="relative z-10 flex flex-col items-center justify-start text-center px-4 pt-16">
                    <p className="text-white text-sm md:text-base italic tracking-wide max-w-4xl">
                        PORTFOLIO
                    </p>

                    {/* Divider */}
                    <div className="w-24 h-0.5 bg-white mt-6 mb-6" />

                    {/* Scroll Indicator */}
                    <div className="flex flex-col items-center gap-2 animate-bounce">
                        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                            <span className="w-1 h-2 bg-white rounded-full mt-2" />
                        </div>
                        <span className="text-white text-xs tracking-widest uppercase">
                            Scroll Down
                        </span>
                    </div>
                </div>

            </section>

            <WorkFolioSlider />

            <section className="w-full bg-white">
                {/* CLIENT CARDS */}
                <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {clients.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 p-6 bg-white"
                        >
                            <h3 className="text-orange-600 font-bold text-lg mb-3">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* OUR SERVICES */}
                <div className="bg-gray-100 py-14">
                    <h2 className="text-center text-2xl font-bold uppercase mb-10 relative">
                        Our Services
                        <span className="block w-16 h-1 bg-red-500 mx-auto mt-2"></span>
                    </h2>

                    <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-12 px-4">
                        {services.map((service, index) => (
                            <Image
                                key={index}
                                src={service.src}
                                alt={service.name}
                                width={120}
                                height={50}
                                className="object-contain "
                            />
                        ))}
                    </div>
                </div>

                {/* MOBILE APP EXPERTISE */}
                <div className="py-20 text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
                        Our Mobile App
                        <br />
                        Development Expertise
                    </h2>

                    <p className="max-w-3xl mx-auto mt-4 text-gray-600 text-sm md:text-base">
                        Being one of the best mobile app development companies in India,
                        we cater to a wide array of business verticals.
                        Some of our verticals include:
                    </p>
                </div>
            </section>

                 <section>
        <LeadForm />
      </section>
        </div>
    )
}

export default OurWork