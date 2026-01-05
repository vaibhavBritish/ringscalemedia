"use client"

import Image from "next/image";
import LeadForm from "./components/LeadForm";

export default function HeroBanner() {
  return (
    <div>

      <section className="relative w-full h-130 md:h-162.5 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/mainbanner.png"
          alt="Agency Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Left Pink Bar */}
        <div className="absolute top-0 left-0 h-full w-12 md:w-20 bg-pink-600 z-10" />

        {/* Diagonal White Lines */}
        <div className="absolute left-24 top-40 z-20">
          <div className="w-24 h-0.5 bg-white rotate-60 mb-3" />
          <div className="w-24 h-0.5 bg-white rotate-60" />
        </div>

        {/* Text Content */}
        <div className="absolute left-24 md:left-36 top-1/2 -translate-y-1/2 z-20 max-w-xl">
          <h2 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
            THE AGENCY FOR
          </h2>

          <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight">
            CHALLENGER
          </h1>

          <h1 className="text-pink-600 text-5xl md:text-7xl font-extrabold leading-tight">
            BRANDS
          </h1>

          {/* Dashed Line */}
          <div className="mt-6 w-56 border-t-4 border-dashed border-white" />
        </div>

        {/* Bottom White Section Preview */}
        {/* <div className="absolute bottom-0 left-0 w-full bg-white py-6 px-8 z-30 flex items-center gap-6">
          <h3 className="text-gray-300 text-5xl font-bold uppercase">
            Healthcare
          </h3>

          <div className="text-gray-600 max-w-2xl">
            <p className="text-lg">
              “What separates good content from great content is a willingness to
              take risks and push the envelope.”
            </p>
            <p className="mt-2 text-sm font-semibold">
              – Brian Halligan, CEO & Co-Founder, HubSpot
            </p>
          </div>
        </div> */}

      </section>

      <section className="relative bg-[#f7f3f2] py-24 overflow-hidden">
        {/* Left angled shape */}
        <div className="absolute left-0 top-0 h-full w-40 bg-gray-200 clip-path-angle" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Top Row */}
          <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
            {/* Left */}
            <div>
              <h2 className="text-gray-300 text-6xl font-extrabold uppercase">
                Healthcare
              </h2>

              <span className="inline-block mt-6 bg-pink-600 text-white text-sm font-semibold px-3 py-1">
                CHALLENGERS ARE PLAYING
              </span>

              <h3 className="mt-4 text-4xl font-extrabold text-gray-900 leading-tight">
                A HIGH-STAKES <br /> GAME
              </h3>

              {/* Yellow diamond */}
              <div className="w-5 h-5 bg-yellow-400 rotate-45 mt-6" />
            </div>

          </div>

          {/* Big Center Text */}
          <div className="text-center">
            <h4 className="text-4xl md:text-5xl font-bold text-gray-600">
              ASPIRING
            </h4>

            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
              <span className="text-gray-600">DIGI</span>
              <span className="text-pink-600">TAL</span>
            </h1>

            <h4 className="mt-4 text-4xl md:text-5xl font-bold text-gray-600">
              MARKETING SERVICES
            </h4>

            <h4 className="mt-2 text-4xl md:text-5xl font-bold text-gray-600">
              FOR
            </h4>

            <p className="mt-6 text-xl font-semibold text-gray-900">
              YOUR BRAND
            </p>

            <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
              The Ring Scale Media digital agency gives you the opportunity to put your step forward towards the ultimate success route in the realm of the Digital marketing industry in order to boost the business and providing the solutions for increasing sales. We give a platform to your business vision so that your potential customers get a clear picture of your brand.
            </p>
          </div>
        </div>
      </section>


      <section className="relative bg-white py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            {/* Heading */}
            <div className="flex items-start gap-4">
              <span className="writing-vertical text-lg font-bold text-black">
                WHAT
              </span>
              <h1 className="text-6xl md:text-7xl font-extrabold text-black">
                WE DO
              </h1>
            </div>

            {/* Core Services Card */}
            <div className="relative mt-10 inline-block">
              <div className="bg-white border shadow-md px-6 py-4 -rotate-2">
                <p className="text-pink-600 font-extrabold text-xl uppercase">
                  Core Services
                </p>
                <p className="text-gray-600 mt-2 text-sm">
                  Time to realize that promise you <br />
                  did to yourself and forgot.
                </p>
              </div>

              {/* Doodle Icons */}
              <span className="absolute -left-6 -top-6 text-3xl">💡</span>
            </div>

            {/* SERVICES LIST */}
            <div className="mt-14 space-y-10">
              {/* 1 */}
              <div className="flex gap-6 items-start">
                <div className="text-2xl font-bold border-2 border-black rounded-full w-10 h-10 flex items-center justify-center">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-extrabold uppercase">
                    Brand Strategy
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Research / Messaging / Planning / Launch Strategy
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="flex gap-6 items-start">
                <div className="text-2xl font-bold border-2 border-black rounded-full w-10 h-10 flex items-center justify-center">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-extrabold uppercase">
                    Creative Activation
                  </h3>
                  <p className="text-gray-600 mt-1">
                    User-Centric Design / TV / Print / Identity
                  </p>
                </div>
              </div>

              {/* 3 */}
              <div className="flex gap-6 items-start">
                <div className="text-2xl font-bold border-2 border-black rounded-full w-10 h-10 flex items-center justify-center">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-extrabold uppercase">
                    Digital Marketing
                  </h3>
                  <p className="text-gray-600 mt-1">
                    SEO / Paid Media / Social / Content Marketing
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="text-2xl font-bold border-2 border-black rounded-full w-10 h-10 flex items-center justify-center">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-extrabold uppercase">
                    ROI Analysis
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Analyzing Return on investment on the Website
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="text-2xl font-bold border-2 border-black rounded-full w-10 h-10 flex items-center justify-center">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-extrabold uppercase">
                    Performance Measurement
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Insight-Based Optimization / ROI Modeling
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative hidden lg:block">
            <Image
              src="/images/manscroll.jpg" // cropped face image
              alt="Creative Thinking"
              width={520}
              height={720}
              className="object-cover"
            />
          </div>
        </div>
      </section>


      <section className="relative w-full h-150 md:h-175 overflow-hidden">

        {/* Background Image */}
        <Image
          src="/images/bgsecndlast.jpg" // city + lake image
          alt="Work Showcase"
          fill
          priority
          className="object-cover"
        />

        {/* Red Overlay */}
        <div className="absolute inset-0 bg-pink-700/90 z-10" />

        {/* Vertical WORK Text */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20">
          <h1 className="text-black text-[120px] md:text-[160px] font-extrabold leading-none writing-vertical">
            Our WORK
          </h1>
        </div>

        {/* Main Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white top-1/2 -translate-y-1/2">
          <h2 className="text-xl md:text-2xl font-light italic">
            Work that says
          </h2>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-2">
            “HELL YES,” AND
          </h1>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-2">
            THE COMPETITION
          </h1>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-2">
            “OH $#!”
          </h1>

          {/* Description */}
          <p className="mt-8 text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-white/90">
            We aim at powering your digital dreams and taking your business
            ahead. We do everything to power up your business as compared
            with the competitors—from designing to developing to posting
            the updates. We create platforms that let your customers
            experience your brand at its best.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#f6f5f3] py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">
              OUR SERVICES
            </h2>
            <div className="w-20 h-1 bg-pink-600 mx-auto mt-3"></div>
          </div>

          {/* Logos */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center justify-items-center">

            <Image
              src="/icon/meta-ai.jpg"
              alt="Meta AI"
              width={140}
              height={60}
              className="object-contain grayscale hover:grayscale-0 transition"
            />

            <Image
              src="/icons/open-ai.webp"
              alt="OpenAI"
              width={140}
              height={60}
              className="object-contain grayscale hover:grayscale-0 transition"
            />

            <Image
              src="/icons/google-ads.png"
              alt="Google Ads"
              width={120}
              height={60}
              className="object-contain grayscale hover:grayscale-0 transition"
            />

            <Image
              src="/icons/meta.webp"
              alt="Meta"
              width={120}
              height={60}
              className="object-contain grayscale hover:grayscale-0 transition"
            />

            <Image
              src="/icons/microsoft.webp"
              alt="Microsoft"
              width={140}
              height={60}
              className="object-contain grayscale hover:grayscale-0 transition"
            />

          </div>
        </div>
      </section>

      <section
        className="relative min-h-screen flex items-center px-6 md:px-20 text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bgscroll.jpg')" }}
      >

        <div className="absolute inset-0 bg-linear-to-r from-pink-600/95 to-rose-700/90"></div>


        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider leading-tight">
            <span className="text-6xl md:text-7xl font-bold">“</span>
            IT’S INDESCRIBABLE
            <span className="text-6xl md:text-7xl font-bold">”</span>
          </h1>

          <h2 className="mt-2 text-2xl md:text-3xl italic font-light">
            But we’ll try!
          </h2>

          <div className="w-28 h-0.5 bg-white my-6"></div>

          <p className="text-sm md:text-base leading-relaxed opacity-95">
            We are the creators and innovators who work with research pieces of
            knowledge that revolve around technology and the market with fresh
            perspectives to engage the visitors or the potential customers to your
            website. We chase the challenges with an amalgamation of originality
            and uniqueness.
            <br /><br />
            Whether to build a market strategy for executing the website or to
            endorse the online reputation frequently, if you wish to surround
            yourself with partners who are innovative, creative and can do
            brainstorming then at Ring Scale Media, the team of experts has all
            the qualities that you need in a person who will create the perfect
            brand image for your business.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-8 flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">

        {/* Left Column: Stat */}
        <div className="flex flex-col items-center md:items-end text-gray-300 select-none">
          <div className="flex flex-col items-center leading-tight">
            <span className="text-3xl font-serif italic">Positive</span>
            <span className="text-4xl font-black tracking-tighter uppercase">Agency</span>
            <span className="text-4xl font-black tracking-tighter uppercase">Culture</span>
          </div>
          <div className="text-[12rem] font-black leading-none -mt-5">
            88%
          </div>
        </div>

        {/* Vertical Divider (Hidden on Mobile) */}
        <div className="hidden md:block w-px h-64 bg-gray-200"></div>

        {/* Right Column: Copy */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-6xl font-black text-gray-200 uppercase tracking-tight mb-4">
            Jealous?
          </h2>
          <div className="text-xl md:text-2xl text-gray-700 font-serif italic leading-relaxed space-y-4">
            <p>
              We offer the end to end services that revolve around digital marketing.
            </p>
            <p>
              We specialize in generating additional services such as pay-per-click
              along with Search engine optimization and other digital marketing
              dimensions like website development, mobile app development,
              email marketing, content marketing, and many more.
            </p>
          </div>
        </div>

      </section>

      <section>
        <LeadForm />
      </section>

    </div>


  );
}
