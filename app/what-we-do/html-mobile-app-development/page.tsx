"use client";
import LeadForm from '@/app/components/LeadForm';
import WhatWeDoLayout from '@/app/components/WhatWeDoLayout'
import Image from 'next/image'
import { title } from 'process'
import React from 'react'

const HTMLMobileAppDevelopment = () => {
    const client = [
        { id: 1, no: 421, desc: "Happy Clients" },
        { id: 2, no: 47, desc: "Mobile Apps" },
        { id: 3, no: 26, desc: "Years Exp" }

    ]

    const ApplicationDev = [
        { id: 1, title: "DATA MIGRATION", desc: "Digital | Mobile | CLM Experiental" },
        { id: 2, title: "HTML RE-DESIGN.", desc: "Scientific Storytelling / MLR Standards | Identity" },
        { id: 4, title: "FLASH TO HTML 5.", desc: "Scientific Storytelling / MLR Standards | Identity" },
        { id: 3, title: "PSD TO HTML 5.", desc: "Health & Fitness | Lifestyle | Productivity" },
        { id: 5, title: "GAME DEVELOPMENT.", desc: "Tailored Solutions | Business Needs | User Experience" },
        { id: 6, title: "CSS 3 WEB DEVELOPMENT", desc: "Digital | Mobile | CLM Experiental" },
    ]
    return (
        <div>
            <WhatWeDoLayout children="HTML 5 MOBILE APPS DEVELOPMENT ">
            </WhatWeDoLayout>

            <section className='max-w-6xl mx-auto'>
                <div className='px-4 py-16'>
                    <p>Are you looking for a company based in India that can give wings to your dream of building an HTML 5 mobile application? If yes, you have landed at the right place to make your dreams come true. If you are aiming to steer clear of your aim, then Ring Scale Mediamedia is your one-stop destination to get everything done. So, if you are also looking for a way to develop one such app, you will require programmers and designers for the same purpose.
                    </p>
                </div>
            </section>

            <section className="bg-black py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">

                        <div className="w-full lg:w-1/2 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                LET&apos;S FIND OUT WHY SHOULD INVEST IN HTML 5 APPS
                            </h2>

                            <p className="text-red-500 mb-6">
                                The ultimate aim in the processing of developing one such application is to uphold the security of databases that is involved in it. This ensures that sustainability as well as the scalability of your developed mobile application. Our programmers believe developing the applications by looking for opportunities and transforming it with technology.
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
                            OUR HTML 5 APP DEVELOPMENT SERVICES
                        </h1>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Ring Scale Mediamedia is your ultimate solution for creating innovative designs as well as execution of the any kind of HTML 5 development projects. Our dedicated design team works hard to constantly innovate and work harder to accomplish any kind of project.

                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Building a robust application is what we strive and constantly work for. We give you the surety of creating robust and excellent mobile applications. We have a number of professionals in our team for designing as well as building interactive applications. Our tailor-made HTML applications are enough to create a mind-boggling effect on the target audience. We ensure that our business solution best fits your ideas.
                        </p>
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
                       OUR PRIMARY HTML 5 <br />
                        <span className="text-blue-600">DEVELOPMENT SERVICE</span>
                    </h1>

                    <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
                       We have different tech savvy dedicated developers that are highly proficient in creating outstanding solutions.
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
                    WE STRIVE TO SERVE <br />
                    <span>YOU THE BEST</span>
                </h2>


                <div className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 lg:grid-cols-3 items-center gap-12">

                    <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
                        <p>
                            We use high-tech solutions to build cross-platform HTML 5 mobile applications with the help of experienced and skilled app developers.
                        </p>

                        <p>
                            Our robust team helps build excellent application that matches the requirements of the clients by using latest tools and techniques.
                        </p>

                        <p>
                           Ring Scale Mediamedia is highly renowned app development service provider that has a lot of potential for developing the application of your choice.
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
                            The app developers are enriched with knowledge and have expertise in creating Javascript based applications to create feature-rich apps.
                        </p>

                        <p>
                            We have highly expert HTML 5 app developers who excellently build multiple functional apps that are not only perfect but user-friendly.
                        </p>

                        <p>
                            The applications we develop with the help of our team are perfect for fulfilling the needs of small businesses as well as large enterprises.
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
                            Our developers deliver top quality applications using HTML 5.

                        </h2>

                        <p className="mt-4 text-gray-600 leading-relaxed max-w-lg">
                            The creative team of app developers has gained enough expertise in developing apps.
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
                    100% MONEY BACK GUARANTEE, <br />
                    IF NOT HAPPY
                </p>

            </section>
<section>
    <LeadForm />
</section>
        </div>
    )
}


export default HTMLMobileAppDevelopment