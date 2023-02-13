import React from 'react'
import SectionHead from '../SectionHead'

function OurSuccess() {
    return (
        <div className="flex flex-col gap-8 my-32 items-center justify-center px-40">
            <SectionHead head="Our Success" subheadFirst="Bringing Pets and People Together:" subheadSecond="Our Adoption and Reunification Results" />
            <div className="flex gap-40 mt-8">
                <div className='flex flex-col gap-4 items-center'>
                    <img src="./src/assets/petsadopt.png" className='w-[160px]' />
                    <div className='text-center'>
                        <p className='text-orange-400 font-extrabold text-5xl'>25,000 +</p>
                        <p className='font-bold mt-1'>Pets Adoption</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 items-center'>
                    <img src="./src/assets/lostpets.png" className='w-[160px]' />
                    <div className='text-center'>
                        <p className='text-orange-400 font-extrabold text-5xl'>3,000 +</p>
                        <p className='font-bold mt-1'>Lost Pets Reunification</p>
                    </div>
                </div>
                {/* <div className='flex flex-col gap-4 items-center'>
                    <img src="./src/assets/lostpets.png" className='w-[160px]' />
                    <div className='text-center'>
                        <p className='text-orange-400 font-extrabold text-5xl'>3,000 +</p>
                        <p className='font-bold mt-1'>Lost Pets Reunification</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default OurSuccess