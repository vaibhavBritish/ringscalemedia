"use client";

import LeadForm from '@/app/components/LeadForm';
import WhatWeDoLayout from '@/app/components/WhatWeDoLayout'
import Image from 'next/image'
import { title } from 'process'
import React from 'react'

const EcommerceManagement = () => {
    const client = [
        { id: 1, no: 421, desc: "Happy Clients" },
        { id: 2, no: 47, desc: "Mobile Apps" },
        { id: 3, no: 26, desc: "Years Exp" }

    ]

    const ApplicationDev = [
        { id: 1, title: "VOLUSION", desc: "Digital | Mobile | CLM Experiental" },
        { id: 2, title: "PRETASHOP", desc: "Scientific Storytelling / MLR Standards | Identity" },
        { id: 4, title: "WEEBLY", desc: "Scientific Storytelling / MLR Standards | Identity" },
        { id: 3, title: "SQUARE SPACE", desc: "Health & Fitness | Lifestyle | Productivity" },
        { id: 5, title: "MAGENTO", desc: "Tailored Solutions | Business Needs | User Experience" },
        { id: 6, title: "BIG COMMERCE", desc: "Digital | Mobile | CLM Experiental" },
        { id: 7, title: "SHOPIFY", desc: "Tailored Solutions | Business Needs | User Experience" },
        { id: 8, title: "WIX", desc: "Tailored Solutions | Business Needs | User Experience" },
        { id: 9, title: "WOOCOMMERCE", desc: "Tailored Solutions | Business Needs | User Experience" },


    ]

    const features = [
        {id:1,title:"Attractive theme",desc:"we try to bring the attention of customers to your website by using an attractive theme."},
        {id:2,title:"Graphics quality",desc:"we use high-resolution graphics to make your banners have a good impact on the audience."},
        {id:3,title:"Navigation",desc:"the theme would be such that users can easily navigate to the desired tab or services."},
        {id:4,title:"Diverse payment options",desc:"we integrate different payment gateways on the website so as to make the transactions easier."},
        {id:5,title:"Securit",desc:"we will code your website in such a way that your website will be highly secured to keep away from prying eyes."},
        {id:6,title:"",desc:"For this we use firewalls"},
        {id:7,title:"",desc:"Give proper immunity to your website by using strict security measures"},
        {id:8,title:"",desc:"By providing you with the option to back up your data in case your website gets hacked."},
        {id:9,title:"Responsive website",desc:""},
        {id:10,title:"",desc:"when you ultimately get hold of your website, you will find out that your website is completely functional and responsive."},
        {id:10,title:"Faster loading",desc:" your website will be faster in responding, unlike other websites that are slow to respond."},
    ]
    return (
        <div>
            <WhatWeDoLayout children="E-COMMERCE DEVELOPMENT" >
            </WhatWeDoLayout>

            <section className='max-w-6xl mx-auto'>
                <div className='px-4 py-16'>
                    <h1 className='font-bold text-2xl py-3'>WHAT IS MEANT BY E-COMMERCE?</h1>
                    <p>Today, we cannot imagine living our lives without the use of modern technology and gadgets. And, the development in technology has resulted in the hike of businesses that are using modern ways for the purpose of growing in the market. E-commerce is one such way that is helping organizations to reach everybody through the means of the internet.</p>
                    {/* <h2 className='font-bold text-2xl py-3'>How Static website designing works for you?
                    </h2> */}
                    <p className='mt-3'>This method is not specific to only big businesses since each business; big or small can adopt this modern way to grow their business manifolds. This method is not helping organizations but is also proving to be beneficial for consumers. So, if you are looking for an affordable way to get e-commerce development services, then you should look no further as Ring Scale MediaMedia has got you covered.</p>
                </div>
            </section>

            <section className="bg-black py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">

                        <div className="w-full lg:w-1/2 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                HOW E-COMMERCE IS HELPING BUSINESSES TO GROW?
                            </h2>

                            <p className="text-red-500 mb-6">
                                We strive hard to provide our customers with the best web solutions in order to grow their businesses. By using e-commerce, you may reach out to the target audience without having to do much. By seeking our e-commerce developments services, you can:
                            </p>
                            <ul className='list-decimal px-10'>
                                <li>Imporve the sales of your goods</li>
                                <li>Get in direct touch with the customer</li>
                                <li>Provide your service without appointing any middleman</li>
                                <li>Advertise your company to a greater extent</li>
                                <li>Get paid immediately for the delivered goods.</li>
                            </ul>
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
                            Why invest in E-commerce Development?
                        </h1>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            By seeking e-commerce development, you will see a visible growth of your business in the digital market. We try our best to improve each feature of your online platform. Our team has skilled, capable, and knowledgeable programmers who keep in mind the notes given by the service seekers. Here are some acknowledged benefits of e-commerce:
                        </p>
                        <ul className='list-decimal px-6'>
                            <li>Lets the buyers find the desired product easily.
                                This method is generally easier for buying and selling goods.</li>
                            <li>There is no hindrance in the buying and selling process.</li>
                            <li>You can avail the services from local and international brands</li>
                            <li>You get better services at a low price.</li>
                            <li>There is no requirement to set up a physical company.</li>
                            <li>It is considered one of the best and easiest way to get into the market.</li>
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
            <section>
                <div className='max-w-6xl mx-auto px-4 py-16'>
                    <div className='text-center'>
                        <h2 className='text-3xl font-extrabold '>FEATURES OF E-COMMERCE  <br /><span>DEVELOPMENT
                        </span></h2>

                        <p className='mt-3'>The experts available at our end for the development of your e-commerce website take necessary measure to offer you the following services:</p>
                        {features.map((feature)=>(
                            <div className='text-left' key={feature.id}>
                                <ul className='list-disc' key={feature.id}>
                                    <li><span className='font-bold'>{feature.title}</span>  {feature.desc}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-20">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                        PLATFORMS USED FOR THE DEVELOPMENT OF <br />
                        <span className="text-blue-600">E-COMMERCE DEVELOPMENT</span>
                    </h1>

                    <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
                        The experts available at our end for the development of your e-commerce website take necessary measure to offer you the following services:</p>

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
                    WE CREATE IMPECABLE WEBSITES<br />
                    {/* <span>Website designing services
                    </span> */}
                </h2>


                <div className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 lg:grid-cols-3 items-center gap-12">

                    <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
                        <p>
                           We create websites that show high compatibility on your device be it mobile or PC.
                        </p>

                        <p>
                           Our websites work effectively and load faster on each kind of operating system.
                        </p>

                        <p>
                            We have a dedicated team of programmers who work towards fulfilling your dreams.
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
                            Our experienced team of developers keeps every detail in mind while website creation.
                        </p>

                        <p>
                          You can also ask us to create a sample website to have an idea of what it would actually look like.
                        </p>

                        <p>
                            We try to reflect your ideas on your website in every possible way to always serve you the best.
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
                            Get in touch with experts at Ring Scale MediaMedia to find out how we can help you
                        </h2>

                        <p className="mt-4 text-gray-600 leading-relaxed max-w-lg">
                            We keep our services transparent in order to build the trust of our customers in us.
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


export default EcommerceManagement