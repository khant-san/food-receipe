"use client"
import { useState } from 'react'
import Image from 'next/image'
import { MealProps } from '@/types'
import { FoodDetail, CustomButton } from '.'


interface MealCardProps {
    meal: MealProps
    category: String
}
const CarCard = ({ meal, category }: MealCardProps) => {
    const { strMeal, strCategory, strArea, strInstructions, strMealThumb, strTags } = meal
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='car-card group'>
            <div className='car-card__content '>
                <h2 className='car-card__content-title'>
                    {strMeal}
                </h2>
            </div>
            <p className='flex mt-6 text-[32px] font-extrabold'>
                <span className='self-start text-[10px] font-semitbold'>

                </span>

                <span className='self-end text-[14px] font-medium'>

                </span>
            </p>
            <div className='relative w-full h-40 my-3 object-contain rounded-lg '>

                <Image src={strMealThumb} alt="car modal" fill priority className='object-contain p-3' />


            </div>

            <div className='relative flex flex-col w-full mt-2 mb-5 '>
                <div className='relative flex flex-col w-full justify-between text-gray'>
                    <div className='flex flex-row justify-start items-center gap-2 pt-1'>
                        <p className='text-[14px]'>
                            <span className={`bg-green-100 text-orange-100 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-orange-900`}>{strCategory ? strCategory : category}</span>
                            {strArea ? <span className={`bg-green-100 text-orange-100 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-orange-900`}>{strArea}</span> : ''}

                        </p>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-2'>

                        <p className='inline-block text-[14px] '>

                            {strTags ?
                                strTags.split(",").map((item) => (

                                    <span className={`bg-green-100 text-yellow-100 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900`}>{item}</span>
                                )) : <span className='px-2.5 py-0.5'></span>
                            }



                        </p>
                    </div>

                </div>
                <div className='relative car-card__btn-container  h-20  '>
                    <div className='absolute inset-x-0 bottom-0'>
                        <CustomButton
                            title="View More"
                            containerStyles='w-full py-[16px] rounded-full bg-[#F38C20] pt-5 '
                            textStyle="text-white text-[14px] leading-[17px] font-bold"
                            rightIcon="/right-arrow.svg"
                            handleClick={() => setIsOpen(true)} />
                    </div>


                </div>
            </div>
            <FoodDetail isOpen={isOpen} closeModal={() => setIsOpen(false)} meal={meal} />

        </div >
    )
}

export default CarCard