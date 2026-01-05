"use client"
import LeadForm from '@/app/components/LeadForm'
import WhatWeDoLayout from '@/app/components/WhatWeDoLayout'
import Image from 'next/image'
import { title } from 'process'
import React from 'react'

const ReputationManagement = () => {
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
            <WhatWeDoLayout children="REPUTATION MANAGEMENT" >
            </WhatWeDoLayout>

            (
            <section className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* LEFT COLUMN */}
                    <div className="bg-gray-50 p-8">
                        <h2 className="text-3xl font-extrabold uppercase mb-4">
                            Online Reputation Management
                        </h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Online Reputation Management (ORM) deals with the reputation of a certain individual
                            or group of people online. Online Reputation Management is making sure you are put
                            up justly in front of the world when they are looking for you. The main motive of
                            online reputation management is to create stability, prevent false tendencies of
                            details, attractively present your data forward, and generate considerable traffic
                            on your brand’s website.
                        </p>

                        <h3 className="text-2xl font-extrabold uppercase mb-4">
                            How Can You Check Your Online Reputation?
                        </h3>

                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li>First step is Google your name, product name or business name</li>
                            <li>Check if you are listed in the first five listings</li>
                            <li>If the response is positive or negative</li>
                        </ul>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="p-4">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The Online Reputation Management services vary country-wise, and we will be
                            discussing mainly about Online Reputation Management in the USA, India, and Canada.
                            Almost 70–80% of the adults believe that it is very important to look for information
                            about the person and/or a business online before interacting with them.
                        </p>

                        <h3 className="text-2xl font-extrabold uppercase mb-4">
                            Online Reputation Management Predominantly Has Two Cycles:
                        </h3>

                        <ul className="list-disc pl-5 text-gray-700 space-y-4">
                            <li>
                                <span className="font-semibold">Vicious Cycle:</span> In this cycle, you, as an online
                                user, do not bother about neither yours nor your business’s online reputation.
                            </li>
                            <li>
                                <span className="font-semibold">Virtuous Cycle:</span> In this cycle, you, as an online
                                user, care about your and your business’s online reputation, build up on the good
                                reviews, and consider to have a healthy discussion for a negative review.
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            <section className="bg-black py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">

                        <div className="w-full lg:w-1/2 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                ONLINE REPUTATION MANAGEMENT IN THE USA
                            </h2>

                            <p className="text-red-500 mb-6">
                                There are several companies which provide the online reputation management services in the USA. Online Reputation Management focuses on removing the negative information about your business or brand and keeping all the positive content so the positive side of the brand is seen. As you know before going for a services consumer search online about that services and go through at least seven to ten reviews. This review has a great impact on the consumer, so it is necessary that your Online Reputation Management includes mainly the positive reviews.
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
                            Online Reputation Management in the USA focuses on the following services:
                        </h1>

                        <ul className='list-decimal px-4 py-3'>
                            <li>Personal Reputation Management</li>
                            <li>Brand Reputation Management</li>
                            <li>Corporate Reputation Management</li>
                            <li>Remove Negative Comment, link, or content</li>
                        </ul>

                        <p className="text-gray-600 leading-relaxed">
                            Online Reputation Management is the key to a successful running of a business as it keeps a constant monitoring on the activities to make sure it is safe and clean. ORM keeps your information 100% confidential and every action which is performed is fully assured.

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

            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* LEFT COLUMN */}
                    <div>
                        {/* INDIA */}
                        <h2 className="text-3xl font-extrabold uppercase mb-4">
                            Online Reputation Management In The India
                        </h2>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                            In this digital day and age, Online Reputation Management is a service which every
                            individual, group of people, or business should be interested in. In India, the focal
                            point of Online Reputation Management services are:
                        </p>

                        <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-8">
                            <li>Search engine: Ensures you are easily found on the search engine</li>
                            <li>Latest information: Ensure your online reputation is up to date</li>
                            <li>Brand Strengthening</li>
                            <li>
                                Improving Criticism: If there is any criticism about you and your services,
                                you should deal with it and try to improve it.
                            </li>
                        </ul>

                        {/* CANADA */}
                        <h2 className="text-3xl font-extrabold uppercase mb-4">
                            Online Reputation Management In The Canada
                        </h2>

                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Online Reputation Management services in Canada also works by protecting your reputation
                            by removing all the negative content and let you control over the messages that you want
                            to carry out across the web by applying unique reputation management solutions. There
                            are certain times when the information that is uploaded on the web can give you advantage
                            but it can be vice-versa too. Henceforth, as an individual or a business, you should be
                            capable of handling both.
                        </p>

                        <h2 className="text-3xl font-extrabold uppercase mb-4">
                            Online Reputation Management In The Canada Services Helps You In The Following Ways:
                        </h2>

                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li>It will create the best story for you.</li>
                            <li>Remove all the negative list of reviews and feedback</li>
                            <li>It is cost effective way of gaining reputation online</li>
                            <li>It will give you the right ranking</li>
                        </ul>

                        <p className="text-gray-700 mt-4 leading-relaxed">
                            It is unlikely that all customers will give you a glorious 5-star rating and there
                            will be some customers who will not be satisfied with the product or services you
                            provide. In such cases, you must make an effort to:
                        </p>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Online Reputation Management works as a guard and ensures the reputation of your name,
                            brand name, services or product image is unstained. This can also be built by social
                            channels like Twitter, Instagram, Facebook, LinkedIn, Pinterest, by answering the
                            following crucial questions:
                        </p>

                        <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                            <li>How many followers do you have?</li>
                            <li>How many likes are there on your posts?</li>
                            <li>What is the frequency of your post?</li>
                            <li>Do you reply to the comments?</li>
                            <li>Does the post represent the exact image of your brand?</li>
                        </ul>

                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Online Reputation Management in the India makes sure all the negative reviews and feedback
                            of the customer remains away from the search as 50% of the online reputation is built up
                            by this. You can choose the best Online Reputation Management services and can mail any
                            of your queries to them.
                        </p>

                        <div className="bg-gray-50 p-6">
                            <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                                <li>Reach out to the customer to seek an apology for a poor rating</li>
                                <li>
                                    Enquire how could you have helped, give details and explanations, as necessary
                                </li>
                                <li>
                                    Ensure you incorporate any changes, if feasible, to strengthen your brand’s image
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed">
                                <span className="font-semibold">Conclusion:</span> Online Reputation Management is a
                                platform which helps you in creating a strong online image for your brand. Being
                                realistic, we must remember that the internet is just a click away and one bad review
                                may tarnish your meticulously created online reputation. Therefore, it is important
                                to keep an eye on the web activities, and you can achieve this through Online Reputation
                                Management services. The professionals will divert the readers’ focus towards the
                                positive reviews, testimonials, and feedback resulting in a fair presentation of your
                                brand when you are being searched.
                            </p>
                        </div>
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
            </section>

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


export default ReputationManagement