"use client";

import LeadForm from '@/app/components/LeadForm'
import WhatWeDoLayout from '@/app/components/WhatWeDoLayout'
import Image from 'next/image'
import { title } from 'process'
import React from 'react'

const AndroidAppDevelopment = () => {
    const client = [
        { id: 1, no: 421, desc: "Happy Clients" },
        { id: 2, no: 47, desc: "Mobile Apps" },
        { id: 3, no: 26, desc: "Years Exp" }

    ]

    const ApplicationDev = [
        { id: 1, title: "Business Apps.", desc: "Digital | Mobile | CLM Experiental" },
        { id: 2, title: "E-Comm Apps.", desc: "Scientific Storytelling / MLR Standards | Identity" },
        { id: 4, title: "Education Apps.", desc: "Scientific Storytelling / MLR Standards | Identity" },
        { id: 3, title: "Social Net Apps.", desc: "Health & Fitness | Lifestyle | Productivity" },
        { id: 5, title: "Entertain Apps.", desc: "Tailored Solutions | Business Needs | User Experience" },
        { id: 6, title: "E-Books Apps", desc: "Digital | Mobile | CLM Experiental" },
    ]
    return (
        <div>
            <WhatWeDoLayout children="WEBSITE AND APPLICATION Development">
            </WhatWeDoLayout>

            <section className='max-w-6xl mx-auto'>
                <div className='px-4 py-16'>
                    <p>We are the developers for your website and applications that will build an image of your products and services that are readily available and created for your customers. We have served millions of customers which includes agencies from startups to digital agencies along with large enterprises. Our company is already working on projects that feature high-end website designing.
                    </p>
                </div>
            </section>

            <section className="bg-black py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">

                        <div className="w-full lg:w-1/2 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                LET&apos;S TALK ABOUT OUR CREATIVE PROJECTS WITH INNOVATIVE PRACTISES
                            </h2>

                            <p className="text-red-500 mb-6">
                                At Ring Scale Media digital, our mission is to provide the results with individualized, expert, SEO solutions that are driven with calculated ROI. Our team of expert developers comes with rich and diverse experience in internet marketing, sales, and management along with the profound knowledge of search engine marketing. We have executed a number of successful social media campaigns and keeping an eye on the details that work for you as ROI. We are delighted with the way that will serve you to the best of our quality of services on the website.
                            </p>

                            {/* <ul className="list-disc pl-6 space-y-2 text-gray-200">
                <li>We provide impeccable iPhone application development services on our platform.</li>
                <li>With our iPad application development services, you can take your business to new heights.</li>
                <li>Ring Scale Mediamedia is also capable of designing applications for your Apple TV and other such devices.</li>
                <li>Apart from this, we are also expert in designing captivating applications for Apple Watch.</li>
              </ul> */}
                        </div>

                        <div className="w-full lg:w-1/4 text-center">
                            <h3 className="text-yellow-400 text-xl md:text-2xl font-semibold">
                                Do You Actually Need a New Mobile App?
                            </h3>
                        </div>

                        <div className="w-full lg:w-1/4 flex justify-center">
                            <Image
                                src="/whatwedo/phoneimg.png"
                                alt="iPhone iPad"
                                width={450}
                                height={450}
                                className="object-contain"
                            />
                        </div>

                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="font-bold text-3xl md:text-4xl leading-tight mb-6">
                            Our website and mobile app development service
                        </h1>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Our digital marketing company provides end-to-end custom services for building up the platforms digitally that showcase your products and services. The website development provides custom website and mobile app development services. There are some of the services that will build up and boost the image of your page to showcase your services to offer. We develop platforms that contain all the details pertaining to the information that you want to portray to the respective clients.
                        </p>

                        {/* <p className="text-gray-600 leading-relaxed">
              When developing iOS applications, we strictly adhere to industry best
              practices and modern technologies. Our transparent development process
              helps clients stay ahead in the market while ensuring the app aligns
              perfectly with business goals and user expectations.
            </p> */}
                    </div>

                    <div className="flex justify-center">
                        <Image
                            src="/whatwedo/iphone-ios.jpg"
                            alt="iOS Development"
                            width={450}
                            height={450}
                            className="rounded-xl object-cover"
                        />
                    </div>

                </div>
            </section>

            <section className='bg-[#778DDF] h-auto w-full'>
                <div className='max-w-6xl mx-auto px-4 py-16 text-white grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {client.map((cli) => (
                        <div key={cli.id} className='text-center mb-8'>
                            <div className='bg-white h-0.5 mb-10'></div>
                            <h2 className='text-4xl md:text-5xl font-bold'>{cli.no}</h2>
                            <p className='text-2xl font-bold  mt-2'>{cli.desc}</p>
                            <div className='bg-white h-0.5 mt-10'></div>

                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-20">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                        OUR WEBSITE
                        <span className="text-blue-600">DEVELOPMENT EXPERTISE</span>
                    </h1>

                    <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
                        We are experts in whatever we do on the digital platforms. Talk online marketing and you will get us; we cater to diversified requirements from clients.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
                        {ApplicationDev.map((app) => (
                            <div
                                key={app.id}
                                className="group relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm 
                     hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                            >

                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition" />

                                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                    {app.title}
                                </h2>

                                <p className="text-gray-600 leading-relaxed">
                                    {app.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative bg-black text-white overflow-hidden py-24">
                <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-wide">
                    We deliver awesome results with guaranteed ROI
                </h2>


                <div className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 lg:grid-cols-3 items-center gap-12">

                    <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
                        <p>
                            At Ring Scale Media Digital, We take a look at the advanced on-page strategies and provide the measures for getting ROI by performing Search engine optimization.
                        </p>

                        <p>
                            We help you to manage the campaigns more efficiently and effectively with Search engine marketing.
                        </p>

                        <p>
                            The Ring Scale Media media offers extensive engagement with the targeted audiences using the Social media marketing medium.
                        </p>
                    </div>


                    <div className="flex justify-center relative">
                        <img
                            src="/whatwedo/b.png"
                            alt="Brand Logo"
                            className="w-48 md:w-64 lg:w-72 drop-shadow-[0_0_30px_rgba(255,0,100,0.4)]"
                        />
                    </div>


                    <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
                        <p>
                            Content marketing is what makes the website useful and meaningful and we use the content to the core of your marketing strategy.
                        </p>

                        <p>
                            We do inbound marketing so that it will work for you as a medium to attract the customers by creating valuable content and experiences that are tailored to them.
                        </p>

                        <p>
                            To reach out to the maximum number of customers on diverse platforms, it is best to work with Email marketing so that you get prompt responses and the engagement is built.
                        </p>
                    </div>
                </div>


                <div className="text-center mt-20">
                    <h3 className="text-xl md:text-2xl font-semibold">
                        Have Queries? We are happy to help you!
                    </h3>
                    <p className="text-gray-400 mt-2">
                        Find the relevant answers
                    </p>
                </div>


                <div className="absolute left-6 top-1/2 -translate-y-1/2 h-64 w-[2px] bg-gradient-to-b from-pink-500 to-transparent" />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 h-64 w-[2px] bg-gradient-to-b from-pink-500 to-transparent" />
            </section>

            <section className="max-w-6xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div>
                        <Image
                            src="/whatwedo/advantage.png"
                            alt="Our Advantage"
                            width={420}
                            height={420}
                            className="object-contain mb-6"
                        />

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                           We are visible as among the most proficient digital marketing agency that develops websites and apps.

                        </h2>

                        <p className="mt-4 text-gray-600 leading-relaxed max-w-lg">
                            At Ring Scale Media, we work keeping in mind the ethical business practices that are transparent in dealing.
                        </p>

                        <button className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                            Get Started Today
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center md:justify-end">
                        <div className="relative bg-white p-6 shadow-lg">
                            <Image
                                src="/whatwedo/moneybck.png"
                                alt="Money Back Guarantee"
                                width={220}
                                height={220}
                                className="object-contain"
                            />

                        </div>
                    </div>

                </div>
            </section>
            <section className='bg-[#292A30] h-28 w-full'>
                <p className="mt-4 text-center text-2xl font-bold text-white py-6">
                    100% ROI guarantee,
With innovative and creative website designs
                </p>

            </section>

                 <section>
        <LeadForm />
      </section>

        </div>
    )
}

export default AndroidAppDevelopment