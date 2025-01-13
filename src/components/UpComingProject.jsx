import React from 'react'
import { PROJECT_LIST } from '../utils/helper'
import CustomButton from '../common/CustomButton'

const UpComingProject = () => {
    return (
        <div id='about' className='md:pt-20 pt-10 md:pb-[136px] pb-16 relative'>
            <div className="container mx-auto max-w-[1180px]">
                <h2 className='lg:text-[56px] sm:text-[46px] text-[30px] font-light text-white md:leading-[60px] lg:pb-12 pb-6 leading-[50px] text-center uppercase relative'>UpComing Projects <span><img className='absolute lg:top-[-20%] md:top-[-40%] sm:top-[-54%] top-[-25%] left-[50%] translate-x-[-50%] max-sm:max-h-[77px] pointer-events-none' src="./assets/images/png/text-line.png" alt="text line" /></span> </h2>
                <div className="flex items-center justify-center flex-wrap gap-8">
                    {PROJECT_LIST.map((obj, i) =>
                        <div className="text-white group p-4 bg-wood-smoke cursor-pointer rounded-[12px] border-[1px] border-white border-opacity-[10%]" key={i}>
                            <div className="overflow-hidden rounded-xl">
                                <img className='sm:max-w-[231px] group-hover:scale-110 transition-all duration-500 ease-linear max-w-[280px] ' src={obj.cardImg} alt="img" />
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <p className='text-[20px] leading-[24px] font-bold'>{obj.heading}</p>
                                <p className='font-bold '>{obj.time} </p>
                            </div>
                            <p className='leading-[28px] font-light uppercase font-space'>{obj.description} </p>
                        </div>
                    )}
                </div>
                <div className="w-full flex items-center justify-center">
                    <CustomButton text={'View All'} myClass={'border-[1px] text-center border-white bg-transparent !py-[13px] px-[31px] text-white sm:mt-12 mt-8 font-medium max-w-[124px]'} />
                </div>
            </div>
            <img className='absolute sm:bottom-[-40%] bottom-0 right-0 pointer-events-none' src="./assets/images/png/project-bottom-ellips.png" alt="bottom-ellips" />
        </div>
    )
}

export default UpComingProject