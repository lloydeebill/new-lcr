"use client";

import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroll = () => {
        const servicesElement = document.getElementById('Services');
        servicesElement?.scrollIntoView({ behavior: 'smooth' });

    }
    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Request PSA Registration  -civil registry made easy!
                </h1>

                <p className='hero__subtitle'>
                    Your Online Civil Registry Destination
                </p>
                
                <CustomButton 
                    title="Get Started"
                    containerStyles="bg-primary-blue
                    text-white rounded-full mt-10 text-2xl"
                    handleClick= {handleScroll}
                />
            </div>
            <div className='hero__image-container'>
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero" fill className="object-contain" />
                </div> 
                <div className='hero__image-overlay' />

                    
                

            </div>
        </div>
    )
}

export default Hero