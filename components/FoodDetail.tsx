
"use client"
import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MealProps } from '@/types';
import { CustomButton } from '.';

interface MealDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    meal: MealProps
}
interface MealTagProp {
    key: string,
    value: string,
}



const CarDetail = ({ isOpen, closeModal, meal }: MealDetailsProps) => {
    const keysToDisplay = ['strMeal', 'strCategory', 'strArea', 'strInstructions'];
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25'>

                        </div>
                    </Transition.Child>
                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel className="relative max-w-lg max-h-[90vh] 
                                overflow-y-auto transform rounded-2xl
                                 bg-white p-6 w-full text-left shadow-xl 
                                 transition-all flex flex-col gap-5">
                                    <button type="button"
                                        onClick={closeModal}
                                        className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'>
                                        <Image src="/close.svg"
                                            alt="close"
                                            width={20}
                                            height={20}
                                            className='object-contain' />
                                    </button>
                                    <div className='relative gap-3'>
                                        <div className='flex justify-center  w-auto h-70  rounded-lg'>
                                            <Image src={meal.strMealThumb} alt="car modal" priority width={250} height={250} className='object-contain' />
                                        </div>
                                        {/* <div className='flex gap-3'>
                                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                                <Image src={genereateCarImageUrl(car, '29')} alt="car modal" fill priority className='object-contain' />
                                            </div>
                                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                                <Image src={genereateCarImageUrl(car, '33')} alt="car modal" fill priority className='object-contain' />
                                            </div>
                                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                                <Image src={genereateCarImageUrl(car, '13')} alt="car modal" fill priority className='object-contain' />
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className='flex-1 flex flex-col gap-2'>
                                        <h2 className='font-semibold tex-xl capitalize'>{meal.strMeal}{meal.strCategory}</h2>
                                        <div className='mt-3 flex flex-wrap gap-4'>

                                            {keysToDisplay.map((key) => (
                                                key == 'strInstructions' ?
                                                    <div className='flex flex-col justify-between gap-5 w-full text-right' key={key} >
                                                        <h4 className='text-gray capitalize text-left'>{key.substring(3)}</h4>
                                                        <p className='text-black-100 font-semibold text-left'>{meal.strInstructions}</p>
                                                    </div> :
                                                    <div className='flex justify-between gap-5 w-full text-right' key={key}>
                                                        <h4 className='text-gray capitalize'>{key.substring(3)}</h4>
                                                        <p className='text-black-100 font-semibold'>{meal[key as keyof MealProps]}</p>
                                                    </div>

                                            ))}

                                        </div>
                                    </div>
                                    <CustomButton
                                        title="Play"
                                        containerStyles='w-full py-[16px] rounded-full bg-[#F38C20] pt-5 '
                                        textStyle="text-white text-[14px] leading-[17px] font-bold"

                                        handleClick={() => window.open(meal['strYoutube'], "_blank")}
                                    />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>

                    </div>

                </Dialog>

            </Transition >
        </>
    )
}

export default CarDetail