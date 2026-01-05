"use client"
import LeadForm from '@/app/components/LeadForm'
import WhatWeDoLayout from '@/app/components/WhatWeDoLayout'
import Image from 'next/image'
import { title } from 'process'
import React from 'react'

const LogoDesign = () => {
    const client = [
        { id: 1, no: 421, desc: "Happy Clients" },
        { id: 2, no: 47, desc: "Mobile Apps" },
        { id: 3, no: 26, desc: "Years Exp" }

    ]

    const ApplicationDev = [
        { id: 1, title: "MONOGRAM LOGOS", desc: "Digital | Mobile | CLM Experiental" },
        { id: 2, title: "WORDMARKS LOGOS.", desc: "Scientific Storytelling / MLR Standards | Identity" },
        { id: 4, title: "PICTORIAL MARKS.", desc: "Scientific Storytelling / MLR Standards | Identity" },
        { id: 3, title: "ABSTRACT LOGOS.", desc: "Health & Fitness | Lifestyle | Productivity" },
        { id: 5, title: "MASCOTS", desc: "Tailored Solutions | Business Needs | User Experience" },
        { id: 6, title: "THE EMBLEMx", desc: "Digital | Mobile | CLM Experiental" },
    ]
    return (
        <div>
            <WhatWeDoLayout children="PROFESSIONAL LOGO" >
            </WhatWeDoLayout>

            <section className='max-w-6xl mx-auto'>
                <div className='px-4 py-16'>
                    <h1 className='font-bold text-2xl py-3'>WHY INVEST IN A LOGO?</h1>
                    <p>A logo is something that represents your company in different arena of business and gives a good impression to your client. So, if you want this impression to be everlasting, you should not give a second thought to design a logo.</p>
                    <h2 className='font-bold text-2xl py-3'>R, M, V, P, SS and Round Logo Designs Services:</h2>
                    <p>A Logo is a combination of the visual image along with the text that is created to serve two purposes. It speaks for your brand as it creates a visual symbol that represents the work of your business. There are some logos that have powerful symbolism that is connected to people’s memories. Moreover, a log comes with a strong motto of branding efforts, however, there are companies that usually begin with a focus on the branding of the company. By the logo, you can get the hint of what exactly the business is all about and this is possible as the features such as colors, tone, fonts along with other things. There are R Logo Design, M Logo Design, V Logo Design, P Logo Design, SS Logo Design, and Round Logo Design Services which consider the design elements such as shape, lines, colors along with the experienced graphic designer that can turn a logo into a marketing tool.</p>
                </div>
            </section>

            <section className="bg-black py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">

                        <div className="w-full lg:w-1/2 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                EXPLORE A PLETHORA OF LOGO DESIGN IDEAS
                            </h2>

                            <p className="text-red-500 mb-6">
                                Ring Scale MediaMedia offers a wide range of logo designs to choose from. We have a number of years of experience and our expertise in web development services have been highly renowned in the market. Our team works by using different strategies that are required to take your business to the new heights.
                            </p>
                            <p className="text-red-500 mb-6" >We understand the power of branding and keeping that in view, we try our best that your logo is something that is enough to let others know what your business is all about.</p>

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
                            WHY IS IT VITAL TO GET A LOGO DESIGNED?

                        </h1>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            A logo is something that distinct your brand from the rest. Therefore, it is very essential for a business to have a logo of its own. A logo should be designed in such a manner that it conveys the message of your business without having to do much.



                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            A professional designer will give wings to your ideas.
                            While designing a logo, they keep your target in mind.
                            The experts use most fitted style for designing.
                            They opt for perfect colors and fonts.
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed">You do not need to compromise at any level because we have experts that work according to you and your business needs. We keep track of varied needs of the clients.</p>
                        <p className="text-gray-600 mb-4 leading-relaxed">We give special heed to the requirements of the customers so that they do not have regret in the end.</p>
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
                        EXPLORE OUR PROFESSIONALS <br />
                        <span className="text-blue-600">LOGO DESIGNS</span>
                    </h1>

                    <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
                       You can always ask to show you the previous projects we have worked on so that you can have an idea of the same.</p>

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
                    WE OFFER YOU HIGHLY <br />
                    <span>ROBUST BRAND LOGOS</span>
                </h2>


                <div className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 lg:grid-cols-3 items-center gap-12">

                    <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
                        <p>
                            We always try to make sure that your business uses the most innovative steps to get to its desired place in the market.

                        </p>

                        <p>
                        We can help you to come up with the most unique and attractive logo design that would showcase your business from every aspect.
                        </p>

                        <p>
                            You just need to get connected to us and give each minute detail about what you want and we will be right at your back.
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
                            We help you with everything that comes in the way of you and your business. So let us assist you and your business to grow.
                        </p>

                        <p>
                            Our team designs such a logo that leaves a good impression on the targeted audience by using perfect colors, styles, and fonts.

                        </p>

                        <p>
                           We facilitate you with the creation of effective company logo by assigning the right team which works according to your requirements.
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
                            Get your custom logo designed with professionals based in India
                        </h2>

                        <p className="mt-4 text-gray-600 leading-relaxed max-w-lg">
                           We deliver you 100% transparent services so that no hurdles come in your way
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
                    IF YOU’RE NOT SATISFIED, <br />
                    ASK US FOR THE REFUND
                </p>

            </section>
<section>
    <LeadForm />
</section>
        </div>
    )
}


export default LogoDesign