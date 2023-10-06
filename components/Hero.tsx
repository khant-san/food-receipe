"use client";
import Image from 'next/image'
import { CustomButton } from '.'

const Hero = () => {
    const handleScroll = () => {

    };
    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>Find your favoirte receipe  --quickly and easily</h1>
                <p className='hero__subtitle'>
                    Discover a world of deliciousness! Explore easy-to-follow recipes for all tastes and occasions. From savory dishes to sweet treats, we've got your cravings covered. Let's cook up something wonderful together!

                </p>
                <CustomButton
                    title='Explore'
                    containerStyles="bg-[#F38C20] text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div
                className='hero__image-container'>
                <div className='hero__image'>
                    <Image src="/hero.png"
                        alt="hero"
                        fill
                        className='object-contain object-left'
                    />

                </div>
                <div className='hero__image-overlay' />

            </div>
        </div>
    )
}

export default Hero