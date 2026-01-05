"use client"

import LeadForm from '@/app/components/LeadForm'
import WhatWeDoLayout from '@/app/components/WhatWeDoLayout'
import Image from 'next/image'
import { title } from 'process'
import React from 'react'

const WebsiteMaintenance = () => {
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
        { id: 1, title: "KEEP CENTER OF ATTENTION OF YOUR BUSINESS", desc: "Nowadays, no one can deny the importance of e-commerce site, but it is also a fact that business owners and marketing directors can’t spend much time to keep their website updated. They would like to spend their time in making and developing their business strategies. They spend the least time to manage and update their website." },

        { id: 2, title: "REDUCE YOUR COST AND EXPENSES", desc: "Small business ventures as well as the large one do not require a full-time employee to keep a website managed and updated. Both require a maintenance professional for some specific tasks and functions that are creating hassle while reaching the website. It will be a cost-effective affair to work with , where you are hiring someone for some specific tasks and paying for that only without any extra employee benefit." },

        { id: 3, title: "ADVANTAGE OF A PROFESSIONAL EXPERTISE", desc: "If you are not aware of web development or web hosting and don’t have any idea how to decrease risk and vulnerabilities associated with the website. Do you know how to make changes in the search engine world? Then, you don’t need to worry we are here to help you to maintain and update your website."},

        { id: 4, title: "KEEP YOUR SITE AND REPUTATION UPDATE", desc: "Dealing with a hacked website can take excessive time to respond and cause mistrust among visitors. The main reason why a website got infected is not keep up with the latest security patches and bug fixes. Websites are under threat for the both that is the software, running the website and web-hosting server. is familiar with all kinds of website systems, software, and programs. Additionally, we usually oversee, upload, and update while maintaining break-ups." },

        { id: 5, title: "CONNECT YOUR CONSUMERS WITH YOU", desc: "User experience and user interface design is a unique procedure to improve user contentment by enhancing accessibility and usability of the website’s applications." },

        { id: 6, title: "SEARCH ENGINE FRIENDLY", desc: "Content plays a vitally important role while searching on the internet. Google seeks out the fresh and creative content out from millions. Search engine frequently updating algorithms and the competitive landscape that is flexible. assists you to follow up your website through web analytics, maintaining blogs, and other contents. This also helps you to make future recommendations and provides you the best result from the investment." }
    ]

    return (
        <div>
            <WhatWeDoLayout children="WEBSITE MAINTENANCE SERVICES" >
            </WhatWeDoLayout>

            <section className='max-w-6xl mx-auto'>
                <div className='px-4 py-16'>
                    <h1 className='font-bold text-2xl py-3'>Website Maintenance:</h1>
                    <p className='py-4'>A website makes your barter exchange popular worldwide electronically that engage your business quickly. It is not a one-time deal but a lifelong affair to manage, organize and update a website. Keeping your website updated and running may become an anomalous task to handle.</p>
                    <p className='py-4'>It is not possible for your website to work on its own for a long time. After a span of time, you need a professional to fix and troubleshoot your web issues. To keep your online business upgraded, this is very important for you to maintain and fix your website from time to time. ’s website maintenance services assure you that your website is constantly running and working properly. We determine ourselves to offer website maintenance services globally that are cost-effective for both the startups as well as the highly-established firms looking out for expanding their wings.</p>
                    <p className='py-4'>Our company comprises all services you need to ensure your long-term success in electronic retailing. Website maintenance services include content update, image update and providing you 24*7 support through phone and e-mail for the maintenance issues you face with your website. Apart from this, ’s website maintenance services also include editing, revising, and changing updated web pages to keep your website go hand-in- hand with the latest technology.</p>

                </div>
            </section>

            <section className="bg-black py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">

                        <div className="w-full lg:w-1/2 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                WHY?
                            </h2>

                            <p className="text-red-500 mb-6">
                                has been pulling its socks to make a long-lasting business impact on the customers. Our developers maintain the website with the all technical and developmental strategies for your business. We offer cost-effective website maintenance services worldwide to various organizations. We are meant to help you reap the benefits through our sophisticated services. Our business philosophy has become a model for our competitors.
                            </p>

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
                            Facts and stats about Web maintenance services:
                        </h1>

                        {/* <p className="text-gray-600 mb-4 leading-relaxed">
                            Our Web Portal Development expertise help to progress multiple industries:
                        </p> */}
                        <ul className='list-decimal px-6'>
                            <li>Facts and stats about Web maintenance services</li>
                            <li>The Internet has influenced and raised online sales by 2 trillion</li>
                            <li>Over 1 million blog posts are published on the internet every day</li>
                            <li>Around the globe, there are 1.24 billion websites estimated</li>
                            <li>5.5 billion Google searches are made every day globally</li>
                            <li>51.8% of the internet traffic comes from bots, and 48.9% from humans</li>
                            <li>$92 spent on generating traffic and getting customers and $ 1 for the conversion of the customers.</li>
                            {/* <li>Enegry</li>
                            <li>Media and Entertainment</li>
                            <li>Public sector</li>
                            <li>Transportaion and Logistics</li> */}
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
                        <h2 className='text-3xl font-extrabold '>Why do you need to maintain a website?</h2>

                        <p className='mt-3'>Whenever we overlook any component related to our business than the outcome will be negative; the same goes with electronic marketing. When we show some interest in our website, it will pay us back in the form of business. It is highly recommended to keep your website up-to- date to profit your business. is here to help you to maintain your website effectively with spending any extra pound from your budget.</p>

                        <h2 className='font-extrabold text-3xl py-5'>To create accuracy for your brand:</h2>
                        <p className='text-justify mt-4'>It is not easy to create log lasting impact to our new business seekers. Whenever you go to promote our business, we give our business card to show our brand value, the very first thing that is done by that seeker after coming back is to check out the website of that particular brand to see the brand value and reliability.</p>
                        <p className='text-justify mt-4'>The impression of the website decides the credibility, and authenticity of your brand. If the last latest news was updated 2 years ago, and your monthly special edition had already expired last year then it will not leave a positive impression on the table of the seeker.</p>
                        <p className='text-justify mt-4'>On the other hand, if your website is well-organized and updated then the customer can communicate well with your company. We provide you well-organized and maintained website that is updated with all the latest information about your brand.</p>



                        {/* {features.map((feature) => (
                            <div className='text-left py-4 px-6' key={feature.id}>
                                <ul className='list-disc' key={feature.id}>
                                    <li><span className='font-bold'>{feature.title}  </span> <br />{feature.desc} </li>
                                </ul>
                            </div>
                        ))} */}
                    </div>
                </div>


                <div className=''>
                    <h2 className='font-extrabold text-2xl text-center py-4'>Boost your search engine and drive traffic:</h2>
                    <p className='mt-4'>Search engines are fond of new and creative content that makes tells more about you and your brand. Search engine optimization depends on the up-gradation of your website’s information. And the opposite is also concordant with facts with your website.</p>

                    <p className='mt-4'>When you stop updating your website time to time then the search engine stop crawling them, and the ranking of your brand may begin to drop for substantial keywords. To raise your ranking it is highly require updating your content from time to time.</p>

                    <p className='mt-4'>So to boost your search engine ranking and to drive traffic to your website, we keep updating new information. To enhance your ranking professionals will keep updating your website with informative blogs and articles about your company and related products to drive traffic for your website without degrading your ranking.</p>

               
                </div>

                <div className='text-justify px-4 py-5'>
                    <h2 className='font-extrabold text-3xl text-center'>Include modern features to give reasons to the visitors to come back:</h2>
                    <p className='py-4'>Maintaining the old customer base is as important as getting the new customers. The best way to do this is by keeping relevant and the latest information that attracts them and makes them stay on your website.</p>

                    <p className='py-4'>As it may be your monthly newsletter and the blog or any other specific information about your brand. When you start keeping your site informative and updated this will build a strong relationship with your customers. It is very easy to lose the trust of your patrons is hard to gain. The team of professionals at , helps you to build this trust by providing the latest information on your website. We are here to help you by offering you relevant assistance to update your data and content on your website.</p>
                </div>

                <div className='text-justify '>
                    <h1 className='text-center font-extrabold text-3xl capitalize py-3'>The most updated security patches and bug fixer helps their site to stay up-to- date:</h1>
                    <p className='py-2'>Content management system is a vitally necessary part to keep your website updated with the most recent security patches and bug fixes. We assure you that your website cannot be hacked or broken by hackers to affect your business. It is seen that the hackers upload Trojan and Malware after breaking your website to control your website and degrade your business.</p>
                    <p className='py-2'>updates your outdated software to keep your website secure and safe. Hackers take benefit from those websites that are not pro-actively updating their software and keep tracking on outdated websites. If Google detects hacking or degrading problem with your website they delist your website from search engine until you fix it or update it with the latest software. We assist you to save your website from delisting and also, to hike your website in the goggle searches.</p>
                </div>

                <div className='text-justify py-5'>
                    <h1 className='font-extrabold text-3xl capitalize text-center'>Benefits of website maintenance services</h1>

                         {features2.map((feature) => (
                        <div className='text-left py-4 px-6' key={feature.id}>
                            <ul className='list-disc' key={feature.id}>
                                <li><span className='font-extrabold text-xl'>{feature.title}  </span> <br />{feature.desc} </li>
                            </ul>
                        </div>
                    ))}
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

export default WebsiteMaintenance