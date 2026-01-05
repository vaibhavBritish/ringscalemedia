"use client"

import Image from 'next/image'
import React from 'react'
import LeadForm from '../components/LeadForm'

const WhoWeAre = () => {
    return (
        <div>
            <section className="relative w-full h-screen overflow-hidden">

                <Image
                    src="/who-we-are/about-us_banner.jpg"
                    alt="City Night View"
                    fill
                    priority
                    className="object-cover"
                />


                <div className="absolute inset-0 bg-black/50" />


                <div className="absolute top-0 left-0 w-full h-48 bg-linear-to-b from-purple-900 via-pink-800 to-transparent opacity-90" />


                <div className="relative z-10 flex flex-col items-center justify-start text-center px-4 pt-16">
                    <p className="text-white text-sm md:text-base italic tracking-wide max-w-4xl">
                        Attention Scale Media Lawyers & Consultants! We <span className="font-semibold">GUARANTEE</span> 100 booked appointments in your calendar
                    </p>

                    <p className="text-white text-lg md:text-xl font-bold mt-2">
                        EVERY month!! <span className="uppercase">Guaranteed!</span>
                    </p>

                    {/* Divider */}
                    <div className="w-24 h-0.5 bg-white mt-6 mb-6" />

                    {/* Scroll Indicator */}
                    <div className="flex flex-col items-center gap-2 animate-bounce">
                        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                            <span className="w-1 h-2 bg-white rounded-full mt-2" />
                        </div>
                        <span className="text-white text-xs tracking-widest uppercase">
                            Scroll Down
                        </span>
                    </div>
                </div>

            </section>

            <section className='max-w-6xl mx-auto px-10 py-16'>
                <div className='flex flex-col gap-8'>

                    <p><span className='font-bold capitalize'>Ring Scale Media Canada</span> is the <span className='font-bold capitalize'>first AI-powered immigration marketing agency</span>, transforming the way immigration services are promoted and delivered. We combine <span className='font-bold capitalize'>advanced artificial intelligence</span> with <span className='font-bold capitalize'>strategic marketing</span> to help immigration firms, consultants, and legal professionals reach their ideal clients efficiently.</p>

                    <p>Our AI-driven solutions analyze market trends, optimize client engagement, and enhance conversion rates, ensuring your services stand out in a competitive landscape. Whether it's <span className='font-bold capitalize'>branding, lead generation, or digital marketing</span>, we provide tailored strategies that maximize your reach and impact.</p>

                    <p>At <span className='font-bold capitalize'>Ring Scale Media Canada</span>, we bridge the gap between <span className='font-bold capitalize'>technology and immigration</span>, making immigration services more accessible, efficient, and results-driven. Partner with us to revolutionize your immigration business with  <span className='font-bold capitalize'>AI-powered marketing</span>.</p>

                    <h1 className='font-bold'>🚀 Innovate. Automate. Elevate.</h1>

                    <p>At Ring Scale Media digital agency we believe to strategize the key point to lead you to the desired results that match with the changing trends in the environment. We genuinely think that all the members of our team thrive for implementing the new opportunities in the digital marketing industry to enhance the brand equity and the business value of the products and services of your brands. When we work with the industry and the changing trends the clients can cope up with the changing trends.</p>
                </div>

            </section>

            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Image 1 */}
                    <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden">
                        <Image
                            src="/who-we-are/ring1.jpeg" // replace path
                            alt="Marketing Result"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Image 2 */}
                    <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden">
                        <Image
                            src="/who-we-are/ring2.jpeg" // replace path
                            alt="Immigration Marketing"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Image 3 */}
                    <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden">
                        <Image
                            src="/who-we-are/ring3.jpeg" // replace path
                            alt="Marketing Guide"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Image 4 */}
                    <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden">
                        <Image
                            src="/who-we-are/ring4.jpg" // replace path
                            alt="Book Now"
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>

                
            </section>

            <section>
                <Image
                    src="/who-we-are/aboutusCustomer.jpg" 
                    alt="World Map Background"
                    width={1000}
                    height={1000}
                    className="object-cover w-full h-full"
                />
            </section>

            <section>
                <LeadForm />
            </section>
        </div>
    )
}

export default WhoWeAre