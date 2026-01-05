
"use client";
import LeadForm from '@/app/components/LeadForm';
import WhatWeDoLayout from '@/app/components/WhatWeDoLayout'
import Image from 'next/image'
import { title } from 'process'
import React from 'react'

const StaticWebsiteDesign = () => {
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
            <WhatWeDoLayout children="STATIC WEBSITE DESIGN" >
            </WhatWeDoLayout>

            <section className='max-w-6xl mx-auto'>
                <div className='px-4 py-16'>
                    <h1 className='font-bold text-2xl py-3'>STATIC WEBSITE DESIGN</h1>
                    <p>The Static website design enables the users to create or establish web presence of your brand with highlighting the services and the products details that you wish to offer. It therefore supports all the small or big business ventures with the website that becomes the USP to attract maximum number of the visitors. For the promotion of your services we offer you static website design that will boost your website.
                    </p>
                    <h2 className='font-bold text-2xl py-3'>What aspires you for Static website designing?</h2>
                    <p>We work with the aim to build a static website that allows the companies to communicate their respective business goals in more simpler and easy-to-understand manner. We involve the designing and development of the personal as well as the corporate website along with those that are used or accessed by the competitors. It enables you to earn from your business. These static websites does not demand any extra costs.</p>
                    <h2 className='font-bold text-2xl py-3'>How Static website designing works for you?
                    </h2>
                    <p>It is very important to have a perfect combination of design and content when it comes to design a website. It is essential to know the every company needs a website that will showcase the values, aims and objectives of the brand. There is a need for specific website that should meet certain expectations that will work for you. We make a static website design that meets the specific requirements.

                        There are some of the detailed points are added to the websites in order to make it more informative. The small details that shows the aim of your business:

                        We have customers globally
                        Website requirement for completion
                        Products and services offered by the brand.
                        All such details are required from the clients to make amendments to the website</p>
                </div>
            </section>

            <section className="bg-black py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">

                        <div className="w-full lg:w-1/2 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                What are the advantages of Static Website designing?

                            </h2>

                            <p className="text-red-500 mb-6">
                                The static website is very much easy to design and host.
                                For small budget companies there are static website designs.
                                The static website is designed and builds promptly.
                                Web sites are accessible with précised information about HTML coding.
                                Highly suited for business ventures that do not need a proper content changes regularly.
                                The websites are highly responsive websites.
                            </p>
                            {/* <p className="text-red-500 mb-6" >We understand the power of branding and keeping that in view, we try our best that your logo is something that is enough to let others know what your business is all about.</p> */}

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
                            What are the approaches we use to design the Static websites?
                        </h1>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            The static website is the best source to put across the basic information about the brand on the digital platform. It is the simplest way to put across the details of your brand to a maximum reach online. The static website designing helps you to create the corporate image of your brand. It is and cost-effective that suits your pocket with web programming and visualization.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            At static website development, there is a need to represent the content and the images to the clients. This process works as a perfect example of online brochure and catalog. Remember, the responsive static website comprises off all the details about your brand, its products, services and some relevant information about brand.


                        </p>
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
                <div className='max-w-5xl mx-auto'>
                    <h1 className="font-bold text-2xl py-2">Budget-friendly services:</h1>
                    <p>The static website designing enables the small ventures to work in a similar manner as huge business do. Our designing services are designed and planned by targeting other small ventures. We provide a high-quality responsive static website that enables the users to grow efficiently. The website is supporting the smaill business ventures to show the products and services online. We create these websites to run and enhance the business.</p>

                    <h2 className="font-bold text-2xl py-2">Experienced team of website designers and professionals:</h2>
                    <p>It has a set of experienced and skilled professional statice website designers and these designers work to gain the benefits of the small business ventures in order to march the customer requirements. We work together in order to make the company’s standard valuable. We also guarantee to satisfy the customers with proper services.</p>

                    <h3 className="font-bold text-2xl py-2">For more information contact us:</h3>
                    <p>We have told you about what we do to meet the basic requirements for specific web designing. Now, it’s the time for you to get the best out of your experience. Just feel free to contact us for the related queries. We are available to offer the hassle-free discussion to specific requirement.</p>

                    <h2 className="font-bold text-2xl py-2">How Design static website works for your Business or brand?</h2>
                    <p>A website is the most innovative way to represent your company. It is not an easy task to create or design a website for small business ventures. Our website designers work hard for days to complete your requirements. We only need some specific details to meet your requirements. Information and process we follow to design a static website:</p>

                    <h2 className="font-bold text-2xl py-2">Information or details that we need from the clients:</h2>
                    <p>Aims and objectives of the company that simply means for whom we are designing the website and who are the targeted customers.
                        Vision, mission, and brand of the company
                        Products and services rendered by the owner.</p>

                    <h2 className="font-bold text-2xl py-2">Structured process we follow to create websites</h2>
                    <p>We forward all these details to our details to our professional website designers.
                        Following the information of clients, our designers make websites as per their requirements.</p>
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
                        Our experts on mobile app<br />
                        <span className="text-blue-600">or website development</span>
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
                    We deliver awesome <br />
                    <span>Website designing services
                    </span>
                </h2>


                <div className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 lg:grid-cols-3 items-center gap-12">

                    <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
                        <p>
                            We offer services that will enable the users to access static website designing along with other features that are easy to access.
                        </p>

                        <p>
                            To unlock the new dimensions of the website you need to learn the techniques that we build for you in static website Designs.
                        </p>

                        <p>
                           We develop website that are easy to access and conveys the message of your brand to the mass audience.
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
                            We build in designs that are rich in quality and high in desgings to make it standalone from the rest in the same business.

                        </p>

                        <p>
                            We aim for achieving maximum ROI for you ne it you have a small venture or have the big one.
                        </p>

                        <p>
                           We are best at what we do, experience the quality in our work
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
                            At Ring Scale Media Digital we strive to work with ethical business practices along with transparent dealing.
                        </h2>

                        {/* <p className="mt-4 text-gray-600 leading-relaxed max-w-lg">
                            We deliver you 100% transparent services so that no hurdles come in your way
                        </p> */}

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



export default StaticWebsiteDesign