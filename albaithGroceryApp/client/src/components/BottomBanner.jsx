import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {
    return (
        <div className='relative mt-24'>
            <img src={assets.banner_big} alt="banner" className='w-full hidden md:block' />
            <img src={assets.banner_small} alt="banner" className='w-full  md:hidden' />

            <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24'>
                <div>
                    <h1 className='text-2xl md:text-3xl font-semibold text-primary mb-6'>Why We Are The Best </h1>
                    {features.map((feature, index) => (
                        <div key={index} >
                            <img src={feature.icon} alt={feature.title} className='md:w-11 w-9 text-primary' />
                            <div> <h3 className='text-lg md:text-xl font-semibold text-primary'>{feature.title}</h3>
                                <p className=' text-xs md:text-sm text-primary'>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default BottomBanner

