"use client"

import LeadForm from '@/app/components/LeadForm'
import WhatWeDoLayout from '@/app/components/WhatWeDoLayout'
import Image from 'next/image'
import { title } from 'process'
import React from 'react'

const WebPortal = () => {
    const client = [
        { id: 1, no: 421, desc: "Happy Clients" },
        { id: 2, no: 47, desc: "Mobile Apps" },
        { id: 3, no: 26, desc: "Years Exp" }

    ]

    const ApplicationDev = [
        { id: 1, title: "BUSINESS APP", desc: "Digital | Mobile | CLM Experiental" },
        { id: 2, title: "E-COMM APPS", desc: "Scientific Storytelling / MLR Standards | Identity" },
        { id: 4, title: "EDUCATION APPS", desc: "Scientific Storytelling / MLR Standards | Identity" },
        { id: 3, title: "SOCIAL NET APPS.", desc: "Health & Fitness | Lifestyle | Productivity" },
        { id: 5, title: "ENTERTAIN APPS", desc: "Tailored Solutions | Business Needs | User Experience" },
        { id: 6, title: "E-BOOKS APPS", desc: "Digital | Mobile | CLM Experiental" },
        // { id: 7, title: "SHOPIFY", desc: "Tailored Solutions | Business Needs | User Experience" },
        // { id: 8, title: "WIX", desc: "Tailored Solutions | Business Needs | User Experience" },
        // { id: 9, title: "WOOCOMMERCE", desc: "Tailored Solutions | Business Needs | User Experience" },


    ]

    const features = [
        { id: 1, title: "B2C CUSTOMER PORTAL", desc: "To create a long-term relationship with customers B2C is considered as one of the finest platforms. It helps us to build the relationship with the most effective features like navigation, less responsive time, credibility, reliability, and content" },
        { id: 2, title: "B2B Customer Portal", desc: "The B2B customer portal offers extensive customer self-service. Only this unique feature energizes the customers' satisfaction, centralizes online sales, and proves to be very cost effective. The B2B portals developed and designed by us helps you to take a break from support centers." },
        { id: 3, title: "Partner Portal", desc: "The partner portal is a very reliable and effective platform to entrust partners, increase sales, and to attain competitive advantages. Although 80% of the partner portals end up unpopular with the channel partners. But don't worry we know the value of your time and money, so we develop out-of- the-box partners portal that helps your portal in engaging users." },
        { id: 4, title: "Vendor Portal", desc: "Vendor portal allows you to communicate and deal with vendors collaboratively. This platform encourages self-service that reduces your vendor management load operating costs. You can access vendor details easily without any hassle as well as it saves time, effort and money of company and vendors. Moreover, the portal service we provide will assist the progress of interactions with the suppliers that help to make business more transparent and smooth." },
        { id: 5, title: "Community PORTAL", desc: "We develop gateway in the world of internet for your company. Community portals developed by us encourage collaboration and build relationships between clients and companies. This will also provide fuel for your experience and help you to exchange ideas with other communities. It includes user- friendly interface and strong capabilities comprising chats, blogs, and media file support, forums, events, and more." },
        { id: 6, title: "Learning Portal", desc: "develops Learning Portal to provide proper assistance to training providers and customers. Learning Portal is developed to benefit businesses and individual learners. Our developers create portals that provide the right and true learning experience. This is designed and developed by our capable developers who are utilizing the knowledge of various extensive functionalities that are packed in a responsive design." },
        { id: 7, title: "Custom Portal", desc: "Our developers use transfer box that is an important feature of the Custom Portal. This box helps to engage customers without any distraction, which ultimately makes the webpage highly responsive." },
        { id: 8, title: "Real Estate Portal", desc: "We develop these Real-estate portals by involving various attractive features to the portal that help visitors to meet their specific requirements. Our potential developers comprise features such as listing agents, agencies, their ratings, agents' dashboard, agency microsite, and subscription." },
        { id: 9, title: "Government Portal", desc: "In the Government Portal, our developers provide some unique features like live help and notification services that help the seeker to get the assistance as soon as possible. These portals are highly efficient, transparent, secure and safe to use." },
        { id: 10, title: "News Portal", desc: "The News Portals developed by the are highly responsive and user-friendly. These web portals are easy to access around the globe. People can use the power of democracy by commenting and suggesting their ideas for the news displayed online." },
        { id: 10, title: "Entertainment Portal", desc: " Our developers utilize advanced technology to create these portals. Some distinguish features that our developers include while creating these portals are downloadable audio and video clips, dynamic admin panel, integration of payment gateway, and automatic video rentals." },
        { id: 11, title: "Dating Portal", desc: "Our developers plan these portals with the highly modern technique that make them user-friendly and easy to access. It includes features like membership deals, searching options, and also, provide you the competency to select your friends and block lists." }
    ]

    const features2 = [
        { id: 1, title: "User-Friendly", desc: "Our web portals are highly responsive and their adoptive designs provide them unified appearance. These portals have feedback forms, calculators and personal cabinets that make them more interactive. Furthermore, the Navigation helps to locate a number of features without any hassle. We also provide API with mobile applications. These portals are developed by us have well-structured information, architecture and strong search functionality." },
        { id: 2, title: "Realibility", desc: "High-performance of these web portals ensures that the users can approach the content and tools easily and quickly. We also provide scalability to handle the increased number of users and data. Our developers embed various measures to help you protect your confidential data from unauthorized access, fraud, and other online threats." },
        { id: 3, title: "Easy content management", desc: "Our developers provide back–up for the non-technical team to upload and update content easily in regular breaks. We make sure that we provide access to all kinds of content to your portal like the searchable product, service catalog, real-time pricing and inventory viewing, multimedia galleries, e-cabinets, blogs, and so on." },
        { id: 4, title: "Integration", desc: "Our capable developers provide automated integration with other business systems like CRM, e-commerce solutions, ERP, HRM, and many more. Moreover, we render the service of API development to ensure tight integration with the customers, vendors, and ERP systems." },
    ]

    return (
        <div>
            <WhatWeDoLayout children="PORTAL DEVELOPMENT" >
            </WhatWeDoLayout>

            <section className='max-w-6xl mx-auto'>
                <div className='px-4 py-16'>
                    <h1 className='font-bold text-2xl py-3'>WHAT IS A WEB PORTAL?</h1>
                    <p>A web portal is an exclusively designed website that compiles information for you from different sources such as forums, search engines, and emails together in a systematic manner. It is a single point of access for the web information. Portal is also considered as the library of categorized and personalized content. A web portal is highly helpful in searching notification, navigation, information integration, personalization and other features such as collaboration, task manager, application integration and business intelligence.</p>

                </div>
            </section>

            <section className="bg-black py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">

                        <div className="w-full lg:w-1/2 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                STATS AND FACTS ABPUT WEB PORTAL DEVELOPMENT
                            </h2>

                            {/* <p className="text-red-500 mb-6">
                                We strive hard to provide our customers with the best web solutions in order to grow their businesses. By using e-commerce, you may reach out to the target audience without having to do much. By seeking our e-commerce developments services, you can:
                            </p> */}
                            <ul className='list-decimal px-10'>
                                <li>Customized web portals at reasonable rates</li>
                                <li>44% people leave the web page if they don't find any contact details there</li>
                                <li>78% of people are using internet on their mobile phones</li>
                                <li>40% of people search B2B portals and other portals on mobile phone only</li>
                                <li>47% people check out products and services before seeking any other information on a web page</li>
                                <li>Mobile ads perform 4-5 times better than online ads</li>
                                <li>52% people visit about us page while browsing a web page</li>
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
                            INDUSTRY EXPERTISE :
                        </h1>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Our Web Portal Development expertise help to progress multiple industries:
                        </p>
                        <ul className='list-decimal px-6'>
                            <li>Healthcare</li>
                            <li>Banking and financial service</li>
                            <li>Retail</li>
                            <li>Telecom</li>
                            <li>Manufacturing</li>
                            <li>Education</li>
                            <li>Professional services</li>
                            <li>Enegry</li>
                            <li>Media and Entertainment</li>
                            <li>Public sector</li>
                            <li>Transportaion and Logistics</li>
                        </ul>

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

            <section className='max-w-6xl mx-auto px-4 py-16'>
                <div className=''>
                    <div className='text-center'>
                        <h2 className='text-3xl font-extrabold '>HOW WEB PORTALS IS DIFFERENT FROM WEBSITE :</h2>

                        <p className='mt-3'>A website is a bunch of data with various pages tagged together, while web portal is explained as a service that provides an extensive collection of resources and services such as forums, emails, search engines and online shopping sites. A Web portal is a coordinated route that helps to set up the approach to information found on the internet.</p>

                        <h2 className='font-extrabold text-3xl py-5'>TYPES OF WEB PORTALS DEVELOPED BY : </h2>

                        {features.map((feature) => (
                            <div className='text-left py-4 px-6' key={feature.id}>
                                <ul className='list-disc' key={feature.id}>
                                    <li><span className='font-bold'>{feature.title}  </span> <br />{feature.desc} </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>


                <div className='text-center'>
                    <h2 className='font-extrabold text-2xl text-center py-4'>FEATURE WE PROVIDE IN A WEB PORTAL</h2>
                    <p>We provide some of the exceptional and exclusive features in the Web Portals that make them easy to configure and adaptable. Some prominent features provide in the Web Portals:</p>

                    {features2.map((feature) => (
                        <div className='text-left py-4 px-6' key={feature.id}>
                            <ul className='list-disc' key={feature.id}>
                                <li><span className='font-bold'>{feature.title}  </span> <br />{feature.desc} </li>
                            </ul>
                        </div>
                    ))}
                </div>

                <div className='text-justify px-4'>
                    <h2 className='font-extrabold text-3xl text-center'>TECHNOLOGIES WE UTILIZE TO DEVELOP WEB PORTALS</h2>
                    <p>utilizes the most innovative and suitable technologies to develop your portals that ensure maximum personalization and usability of the portal. We have an adequate experienced team of developers to offer the best services:</p>

                    <ul className='list-disc px-10'>
                        <li>From-Scratch Development on.NET, PHP, or Java</li>
                        <li>CMS-based solutions on Pimcore, Drupal, WordPress.</li>
                    </ul>

                    <p className='py-2'>We acknowledge the changeable nature of the market so that we can provide the access to make changes on your portal without inflicting the performance of your portal. We always try to benefit the customers business with impressive and effective image online.</p>
                    <ul className='list-disc px-10'>
                        <li><span className='font-bold'> Front-end:</span> HTML, CSS, JavaScript (Angular, React, Backbone, Meteor, etc.
                        </li>
                        <li><span className='font-bold'> Back-end:</span> PHP, .NET, Java, Node.js
                        </li>
                        <li><span className='font-bold'> CMSs:</span> Pimcore, Drupal, WordPress, SharePoint
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className='font-extrabold mt-10 py-3'>CONTACT US : </h2>
                    <p>We have stated our services, methods, techniques, and outcome you will get from the Web Portal we design. Now it's the time for you to think and expand your business online. We are providing you proper in-depth consultation as per your requirements.</p>
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
                        OUR MOBILE APP<br />
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
                    WE DELIVER AWESOME MOBILE APPLICATION<br />
                    {/* <span>Website designing services
                    </span> */}
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
            <section className='bg-[#292A30] h-auto w-full'>
                <p className="mt-4 text-center text-2xl font-bold text-white py-6">
                    100% money back guarantee,<br />
                    We keep our services transparent in order to build the trust of our customers in us.
                </p>

            </section>
<section>
    <LeadForm />
</section>
        </div>
    )
}


export default WebPortal