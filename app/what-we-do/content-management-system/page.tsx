"use client";

import LeadForm from '@/app/components/LeadForm'
import WhatWeDoLayout from '@/app/components/WhatWeDoLayout'
import Image from 'next/image'
import { title } from 'process'
import React from 'react'

const ContentManagementSystem = () => {
    const client = [
        { id: 1, no: 421, desc: "Happy Clients" },
        { id: 2, no: 47, desc: "Mobile Apps" },
        { id: 3, no: 26, desc: "Years Exp" }

    ]

    const ApplicationDev = [
        { id: 1, title: "BUSINESS APPS E-COM APPS", desc: "Digital | Mobile | CLM Experiental" },
        { id: 2, title: "EDUCATION APPS", desc: "Scientific Storytelling / MLR Standards | Identity" },
        { id: 4, title: "SOCIAL NETWORKING APPS.", desc: "Scientific Storytelling / MLR Standards | Identity" },
        { id: 3, title: "ENTERTAIN APPS", desc: "Health & Fitness | Lifestyle | Productivity" },
        { id: 5, title: "E-BOOKS APPS", desc: "Tailored Solutions | Business Needs | User Experience" },
        // { id: 6, title: "THE EMBLEMx", desc: "Digital | Mobile | CLM Experiental" },
    ]
    return (
        <div>
            <WhatWeDoLayout children="CONTENT MANAGEMENT SYSTEM" >
            </WhatWeDoLayout>

            <section className='max-w-6xl mx-auto'>
                <div className='px-4 py-16'>
                    {/* <h1 className='font-bold text-2xl py-3'>Responsive Web Designing Services</h1> */}
                    <p>A content management system is a very essential part when we are considering performing digital marketing for any brand. It is the most crucial part when we are designing a website and we understand that a CMS is an application that is used to manage the web content that allows the multiple contributors or designers to create, edit or publish the desired content.</p>
                    {/* <h2 className='font-bold text-2xl py-3'>How Static website designing works for you?
                    </h2>
                    <p>It is very important to have a perfect combination of design and content when it comes to design a website. It is essential to know the every company needs a website that will showcase the values, aims and objectives of the brand. There is a need for specific website that should meet certain expectations that will work for you. We make a static website design that meets the specific requirements.

                        There are some of the detailed points are added to the websites in order to make it more informative. The small details that shows the aim of your business:

                        We have customers globally
                        Website requirement for completion
                        Products and services offered by the brand.
                        All such details are required from the clients to make amendments to the website</p> */}
                </div>
            </section>

            <section className="bg-black py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">

                        <div className="w-full lg:w-1/2 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                LET'S UNDERSTAND THE BASIC FEATURES OF THE CMS
                            </h2>

                            <p className="text-red-500 mb-6">
                                The content management system allows you to format and create content. It also stores the content in one place and in the persistence stage.
                            </p>
                            <p className="text-red-500 mb-6" >It enables the users to assign the privileges and responsibilities that are based on roles such as authors, editors, and admins for workflow management.</p>
                            <p>It enables the users to publish the content and organizes the same for pushing the live content.</p>
                            <p>Powerful publishing tools are used to boost the webpage.</p>
                            <p>Remember you will get the built-in SEO tools. It enables you to boost the page by providing social media integration over the website</p>

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
                            WHAT DOES CONTENT MANAGEMENT SYSTEM DO?
                        </h1>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            A General content management system aims to help the users to manage the information efficiently. The basic and the key functions of the content management system apps includes storing, indexing, search and retrieval format management, revision control, access control along with publishing and reporting for the same. At Ring Scale Media, we provide the services that will do CMS and maintain the system for the same so that the content is not affected.
                        </p>
                        {/* <p>
                            Following are the points why investing in a responsive web design is a good idea for you:
                        </p>
                        <p>To expand your reach to smartphone users.
                            To make customer engagement more flexible.
                            So that you can stay one step ahead of your competitors.
                            In order to get a spike in the conversion rate.
                            So as to increase the website traffic.</p> */}
                        {/* <p className="text-gray-600 leading-relaxed">
                            At static website development, there is a need to represent the content and the images to the clients. This process works as a perfect example of online brochure and catalog. Remember, the responsive static website comprises off all the details about your brand, its products, services and some relevant information about brand.


                        </p> */}
                        {/* <p className="text-gray-600 mb-4 leading-relaxed">You do not need to compromise at any level because we have experts that work according to you and your business needs. We keep track of varied needs of the clients.</p>
                        <p className="text-gray-600 mb-4 leading-relaxed">We give special heed to the requirements of the customers so that they do not have regret in the end.</p> */}
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
                        OUR CONTENT MANAGEMENT <br />
                        <span className="text-blue-600">SYSTEM EXPERTISE</span>
                    </h1>

                    <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
                        We are one of the best mobile app development companies that are spread across the borders. We therefore cater to assorted business verticles and these verticals includes:</p>

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
                    WE DELIVER SCALABLE SERVICE RELATE CONTENT MANAGEMENT SYSTEM<br />
                    {/* <span>Website designing services
                    </span> */}
                </h2>


                <div className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 lg:grid-cols-3 items-center gap-12">

                    <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
                        <p>
                            The content management system delivers the services for allocating between the user groups for management of the content.
                        </p>

                        <p>
                            It enables the users to manage the content organization structures and workflow.
                        </p>

                        <p>
                            The content management system supports online marketing campaigns and builds up the brand’s image.
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
                            You will get access to the integrated audit logs that are scalable and manageable for the services.
                        </p>

                        <p>
                            It just gathers all your customer relationship management system and giving you the structured content.
                        </p>

                        <p>
                            You will get compliance with the website and accessibility standards to manage the content standard to be published online.
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
                            We are recognized among the best content management system developers
                        </h2>

                        <p className="mt-4 text-gray-600 leading-relaxed max-w-lg">
                            Our team works with ethical business practices along with transparent dealings for the same. You will get 100% money back guaranteed, if you are not satisfied with the services offered by us.
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
                    Get your money back, if not pleased
                </p>

            </section>
     <section>
        <LeadForm />
      </section>
        </div>
    )
}




export default ContentManagementSystem