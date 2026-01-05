'use client'

import { useState } from 'react'
import Image from 'next/image'

const slides = [
    '/who-we-are/slider-1.jpg',
    '/who-we-are/slider-2.jpg',
    '/who-we-are/slider-3.jpg',
    '/who-we-are/slider-4.jpg',
    '/who-we-are/slider-5.jpg',
    '/who-we-are/slider-6.jpg',
]


export default function WorkFolioSlider() {
    const [current, setCurrent] = useState(0)

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1)
    }

    return (
        <section className="w-full bg-white py-16">

            <div className="text-center mb-10">
                <h2 className="text-2xl font-bold tracking-widest uppercase inline-block">
                    Work Folio
                    <span className="block w-14 h-1 bg-black mx-auto mt-2"></span>
                </h2>
            </div>


            <div className="relative max-w-7xl mx-auto px-4">

                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-pink-600 text-white w-12 h-12 flex items-center justify-center z-10 hover:bg-pink-700 transition">
                    ←
                </button>

                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-700"
                        style={{ transform: `translateX(-${current * 100}%)` }}>
                        {slides.map((src, index) => (
                            <div key={index} className="min-w-full">
                                <Image
                                    src={src}
                                    alt="Workfolio Slide"
                                    width={1200}
                                    height={500}
                                    className="w-full h-112.5 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>


                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-pink-600 text-white w-12 h-12 flex items-center justify-center z-10 hover:bg-pink-700 transition"
                >
                    →
                </button>
            </div>


            <div className="flex justify-center mt-6 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition ${current === index ? 'bg-red-500' : 'bg-red-300'}`}
                    />
                ))}
            </div>

            
        </section>

        
    )
}
