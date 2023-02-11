import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div className="sm:flex-row py-4 px-40 flex flex-col justify-between items-center">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-5xl leading-snug">Adopt a Furry Friend and Change Their Life Forever</h1>
                    <p className="leading-relaxed">Every pet deserves a second chance at happiness. Whether you're looking for a playful kitten or a loyal dog, Start your adoption journey today.</p>
                </div>
                <div className="flex gap-8">
                    <Link to="#" className="bg-black text-white px-6 py-3 rounded-lg font-medium active:bg-white active:text-black active:ring-1 active:ring-black">Adopt a Pet</Link>
                    <Link to="#" className="ring-1 ring-black px-6 py-3 rounded-lg font-medium">Contact Us</Link>
                </div>
            </div>
            <img className='hidden lg:block' src="./src/assets/hero-image.png" alt='dog and cat'/>
        </div>
    )
}

export default Hero