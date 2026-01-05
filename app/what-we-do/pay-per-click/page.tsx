"use client";

import LeadForm from '@/app/components/LeadForm';
import WhatWeDoLayout from '@/app/components/WhatWeDoLayout'
import Image from 'next/image'
import { title } from 'process'
import React from 'react'

const PayPerClick = () => {
    const client = [
        { id: 1, no: 421, desc: "Happy Clients" },
        { id: 2, no: 47, desc: "Mobile Apps" },
        { id: 3, no: 26, desc: "Years Exp" }

    ]

    const ApplicationDev = [
        { id: 1, title: "BUSINESS APPS", desc: "Digital | Mobile | CLM Experiental" },
        { id: 2, title: "E-COMM APPS.", desc: "Scientific Storytelling / MLR Standards | Identity" },
        { id: 4, title: "EDUCATION APPS.", desc: "Scientific Storytelling / MLR Standards | Identity" },
        { id: 3, title: "SOCIAL NET APPS.", desc: "Health & Fitness | Lifestyle | Productivity" },
        { id: 5, title: "ENTERTAIN APPS.", desc: "Tailored Solutions | Business Needs | User Experience" },
        { id: 6, title: "E-BOOKS APPS", desc: "Digital | Mobile | CLM Experiental" },
    ]
    return (
        <div>
            <WhatWeDoLayout children="PAY PER CLICK" >
            </WhatWeDoLayout>

            <section className='max-w-6xl mx-auto'>
                <div className='px-4 py-16'>
                    <p>Pay per click services (PPC) is an online advertising model where the advertisers pay every time a user opens an online ad. Pay per click services offers many types of pay per click ads but the most common ones are paid search ads. These ads appear when people go to the search engines such as Google, Bing, etc., for commercial purp oses i.e., when they search for something to buy. The range of these commercial searches can vary from looking for a nice dine-in restaurant to a service such as plumbers. It also includes searches like finding gifts for someone’s birthday or purchasing software. All these searches initiate pay per click ads. The other forms of Pay per click ads include visual display ads and remarketing ads.
                    </p>
                    <h1 className='font-bold mt-8'>Pay per click - Inclusions</h1>
                    <p>Pay per click services covers various advertisement platforms such as Google ads and Bing ads and each of these platforms includes different formats which are given below:</p>
                    <ul className='list-disc px-10'>
                        <li>Display Ads</li>
                        <li>Search Ads</li>
                        <li>Gmail Ads</li>
                        <li>Shopping Ads</li>
                        <li>Video Ads</li>
                    </ul>
                </div>
            </section>

            <section className="bg-black py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">

                        <div className="w-full lg:w-1/2 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                PAY PER CLICK SERVICE PROCESS:
                            </h2>


                            <ul className="list-disc pl-6 space-y-2 text-gray-200">
                                <li>Sign up/create an advertising account on a desired platform</li>
                                <li>Create ads (and include who will be your targets by adding keywords or audiences, etc.)</li>
                                <li>Set an amount that you will pay for each click</li>
                                <li>All the ads with similar keywords will go for auction.</li>
                                <li>The order in which each ad is shown is determined at the auction.</li>
                                <li>After the auction, every time someone clicks your ad, you will have to pay them the final bidding amount.</li>
                            </ul>
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
                            PAY PER CLICK SERVICES - BENEFITS
                        </h1>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            <span className='font-bold'>Speed:</span> Through Pay per click services, advertisers get many potential customers easily and quickly. This form of marketing is the fastest way to reach out to most audiences and create profit out of them.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            <span className='font-bold'>Precision:</span> One can target a specific group of the population using Pay per click services.
                        </p>

                        <p><span className='font-bold'>Agility:</span> Pay per click services provides instant results to reflect on how a particular business has performed and how successful has been their performance. This further helps the advertisers to update and make quick adjustments to improve and increase their chances of success.
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

            <section className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* LEFT COLUMN */}
                    <div>
                        {/* USA */}
                        <h2 className="text-3xl font-bold mb-4">Pay Per Click Services In USA</h2>
                        <p className="text-gray-600 mb-4">
                            Pay per click services in USA are much popularly known as ‘services’, but this is not the limit.
                            PPC is a wide spread service with its unique and impressive specialties in the USA.
                        </p>

                        <p className="font-semibold mb-2">Pay per click services in USA includes:</p>
                        <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
                            <li>Setting a goal: Initial focus</li>
                            <li>Targeting: after having a goal, deciding where to share the ads?</li>
                            <li>Designing and budgeting: finally, the ads are designed and a monthly budget is decided.</li>
                        </ul>

                        <p className="font-semibold mb-2">
                            Types of campaigns available at Pay per click services in USA are:
                        </p>
                        <ol className="list-decimal pl-5 text-gray-700 space-y-1">
                            <li>Ads that appears on the search engine page</li>
                            <li>Ads that are creative and include attractive images to advertise.</li>
                            <li>Shopping Campaigns that involved mixed media, to get information on individuals views.</li>
                            <li>Stream-ads: these can be Skipped, or not if they are Video Campaigns.</li>
                        </ol>

                        {/* CANADA */}
                        <h2 className="text-3xl font-bold mt-10 mb-4">Pay Per Click Services In Canada</h2>
                        <p className="text-gray-600 mb-4">
                            Whether you own a new business, run a successful firm, or are creating your home brand;
                            Pay per click services in Canada is your one-stop destination.
                        </p>

                        <ol className="list-decimal pl-5 text-gray-700 space-y-2">
                            <li>
                                <span className="font-semibold">Creating Target Campaigns</span> – Researches effective keywords and
                                tracks competitors for maximum conversion.
                            </li>
                            <li>
                                <span className="font-semibold">Straightening existing pay per click Campaigns</span> – A/B testing
                                and keyword-level optimizations for better engagement.
                            </li>
                            <li>
                                <span className="font-semibold">Keeping up-to-date of PPC Performance</span> – Dashboards for better
                                understanding and growth analysis.
                            </li>
                        </ol>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Pay Per Click Services In India</h2>
                        <p className="text-gray-600 mb-4">
                            Pay per click services in India includes various marketing strategies so as to reach the vast and
                            diverse population of the country.
                        </p>

                        <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
                            <li>Keyword Discovery</li>
                            <li>Text Selection</li>
                            <li>Ad Text Creation</li>
                            <li>Help with Optimizing Landing Pages</li>
                            <li>Bid Management</li>
                            <li>Conversion / Sales Tracking / Calls</li>
                            <li>PPC Monitoring & Reporting</li>
                        </ul>

                        <p className="font-semibold mb-2">
                            The services offered under Pay per click services in India look at:
                        </p>

                        <ol className="list-decimal pl-5 text-gray-700 space-y-2">
                            <li>
                                <span className="font-semibold">Advertising through search</span> – More leads, reduced CPA, and increased revenue.
                            </li>
                            <li>
                                <span className="font-semibold">Display Advertising</span> – Enhances visibility with attractive ads.
                            </li>
                            <li>
                                <span className="font-semibold">Social media advertising</span> – Interest-based targeting at lower cost.
                            </li>
                            <li>
                                <span className="font-semibold">Remarketing</span> – Re-engage users who didn’t convert initially.
                            </li>
                            <li>
                                <span className="font-semibold">Google shopping ads</span> – High conversion PPC with better engagement.
                            </li>
                            <li>
                                <span className="font-semibold">Mobile advertising</span> – Faster lead generation, app installs, and sales.
                            </li>
                        </ol>
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

            {/* <section className="max-w-6xl mx-auto px-4 py-20">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                        OUR MOBILE APP <br />
                        <span className="text-blue-600">DEVELOPMENT EXPERTISE</span>
                    </h1>

                    <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
                        Being one of the best mobile app development companies in India, we cater to a wide array of business verticals. Some of our verticals include:</p>

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
            </section> */}

            <section className="relative bg-black text-white overflow-hidden py-24">
                <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-wide">
                    WE DELIVER AWESOME <br />
                    <span>MOBILE APPLICATION</span>
                </h2>


                <div className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 lg:grid-cols-3 items-center gap-12">

                    <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
                        <p>
                            Highly scalable and robust mobile apps from experienced team of 40+ mobile app developers who've worked on 300+ apps so far.
                        </p>

                        <p>
                            Cross-device functionality across all smartphone devices- compatible with all versions of smartphones.
                        </p>

                        <p>
                            Assigning the work to right team dedicated to your project to reduce complexity and enhance productivity.
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
                            Highly scalable and robust mobile apps from experienced team of 40+ mobile app developers who've worked on 300+ apps so far.
                        </p>

                        <p>
                            Cross-device functionality across all smartphone devices- compatible with all versions of smartphones.
                        </p>

                        <p>
                            Assigning the work to right team dedicated to your project to reduce complexity and enhance productivity.
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
                            We are counted among best mobile development companies in India
                        </h2>

                        <p className="mt-4 text-gray-600 leading-relaxed max-w-lg">
                            owing to our ethical business practices and transparent dealing. Here are some of our USPs:
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
                    100% money back guarantee, <br />
                    if not satisfied
                </p>

            </section>
<section>
    <LeadForm />
</section>
        </div>
    )
}


export default PayPerClick