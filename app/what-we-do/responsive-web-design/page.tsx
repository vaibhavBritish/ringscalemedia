"use client"

import LeadForm from '@/app/components/LeadForm'
import WhatWeDoLayout from '@/app/components/WhatWeDoLayout'
import Image from 'next/image'
import { title } from 'process'
import React from 'react'

const ResponsiveWebDesign = () => {
    const client = [
        { id: 1, no: 421, desc: "Happy Clients" },
        { id: 2, no: 47, desc: "Mobile Apps" },
        { id: 3, no: 26, desc: "Years Exp" }

    ]

    const ApplicationDev = [
        { id: 1, title: "DISCOVER", desc: "Digital | Mobile | CLM Experiental" },
        { id: 2, title: "STRATEGIZE", desc: "Scientific Storytelling / MLR Standards | Identity" },
        { id: 4, title: "DESIGN & EXPERIENCE.", desc: "Scientific Storytelling / MLR Standards | Identity" },
        { id: 3, title: "WEB DEVELOPMENT", desc: "Health & Fitness | Lifestyle | Productivity" },
        { id: 5, title: "DEPLOYMENT", desc: "Tailored Solutions | Business Needs | User Experience" },
        // { id: 6, title: "THE EMBLEMx", desc: "Digital | Mobile | CLM Experiental" },
    ]
    return (
        <div>
            <WhatWeDoLayout children="RESPONSIVE WEBSITE DESIGN" >
            </WhatWeDoLayout>

            <section className='max-w-6xl mx-auto'>
                <div className='px-4 py-16'>
                    <h1 className='font-bold text-2xl py-3'>Responsive Web Designing Services</h1>
                    <p>Since we know that a responsive web designing technology is proving to be a valuable asset for most companies, thus investing in this field is not a bad idea.
                    </p>
                    <p>In the recent surveys held by different platforms, the most important finding is that people make more searches on their mobile devices as compared to PCs. So, keeping that in view, you must note that the web design of your brand should give you more responses.</p>
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
                                Responsive web designing in India
                            </h2>

                            <p className="text-red-500 mb-6">
                                Keeping in line with the trend of the time while the creation of the website is very necessary to meet the changing needs of the people. According to the prevailing situation, a website design should be such that it looks perfect on a mobile device as well. So, if you invest in a responsive web design, then you'll surely come up with better results.
                            </p>
                            <p className="text-red-500 mb-6" >Apart from this, a responsive design is something that attracts more audience as compared to a simple web design. Similarly, with an accurate web design, the information is presented in a better manner. Also, the marketplace scenario is sure to change of you invest in a responsive web design in India with a visible increase in the business activities.</p>

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
                            Why invest in responsive web design?
                        </h1>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Our expert web designers and developers are putting extra efforts to design a website that matches the requirements and ideas of the client. For making an impactful responsive web design, they use technologies such as PHP, WordPress, Magento, Joomla, and more.
                        </p>
                        <p>
                            Following are the points why investing in a responsive web design is a good idea for you:
                        </p>
                        <p>To expand your reach to smartphone users.
                            To make customer engagement more flexible.
                            So that you can stay one step ahead of your competitors.
                            In order to get a spike in the conversion rate.
                            So as to increase the website traffic.</p>
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
                <div className='max-w-5xl mx-auto'>
                    <h1 className="font-bold text-2xl py-2">How do we create a responsive web design?</h1>
                    <p>Since we know that a responsive web design is something that works as an asset for any business, thus choosing a company that follows all the protocols of this technology is difficult. Here is how we work.</p>

                    <ul className='list-disc'>
                        <li>Your website will be created using technologies such as CSS and HTML. With these technologies in use, you can customize and make changes whenever you want.</li>
                        <li>With the help of CSS technology, the screen size adjusts to the size of the design and vice versa so that you can go through it without any hassle.</li>
                        <li>
                            Our designers also use grid view in order to place and align different sections of the website so that they don't look awful.
                        </li>
                    </ul>
                    {/* <h2 className="font-bold text-2xl py-2">Experienced team of website designers and professionals:</h2>
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
                        Following the information of clients, our designers make websites as per their requirements.</p> */}
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
                        Our responsive design <br />
                        <span className="text-blue-600">development process</span>
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
                    We serve different industries <br />
                    {/* <span>Website designing services
                    </span> */}
                </h2>


                <div className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 lg:grid-cols-3 items-center gap-12">

                    <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
                        <p>
                            Our business model is designed to serve the needs of different fields.
                        </p>

                        <p>
                            Contact us if you are looking for developing eCommerce and shopping websites.
                        </p>

                        <p>
                            We work on on-demand basis to cater to the varied needs of businesses
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
                            You may choose our services for the creation of Finance as well as Retail websites.
                        </p>

                        <p>
                            Get in touch with us if you wish to create a real-estate website.
                        </p>

                        <p>
                            Apart from this, we are also experts in creating travel and learning websites.
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
                            WReach the target audience within minutes
                        </h2>

                        <p className="mt-4 text-gray-600 leading-relaxed max-w-lg">
                            Contact one of the leading responsive web designing company in India We would be privileged to provide you the required assistance.
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



export default ResponsiveWebDesign