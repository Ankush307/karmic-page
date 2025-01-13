import React from 'react'
import { VALUES_LIST } from '../utils/helper'

const Values = () => {
    return (
        <div className='max-w-[1170px] mx-auto max-xl:px-4 pt-8 pb-16'>
            <h2 className='lg:text-[56px] text-white sm:text-[46px] text-[30px] font-light md:leading-[60px] leading-[50px] text-center uppercase relative'>Values<span><img className='absolute top-[-45%] left-[50%] translate-x-[-50%] max-sm:max-h-[77px] pointer-events-none' src="./assets/images/png/text-line.png" alt="" /></span> </h2>
            <div className="flex pt-[77px] max-lg:pt-16 max-md:pt-12 max-sm:pt-8 gap-y-10 flex-wrap justify-center">
                {VALUES_LIST.map((item, index) => (
                    <div className="w-4/12 px-[8px] max-lg:w-1/2 max-md:w-full cursor-pointer" key={index}>
                        <div className="relative ball-card">
                            <div className={`relative z-10 sm:p-3 p-3 border-[1px] border-white border-opacity-10 transition-all duration-500 ease-linear sm:max-w-[369px] max-w-[330px] mx-auto rounded-xl hover:backdrop-blur-[10px] hover:bg-white hover:bg-opacity-10 hover:drop-shadow-[0_4px_20px_rgba(0,0,0,15)`}>
                                {item.logo}
                                <h3 className="font-bold text-xl leading-7 text-white max-lg:text-lg py-2.5 font-space ">{item.heading}</h3>
                                <p className='text-white font-space'>{item.description} </p>
                            </div>
                            <img className="top-[-12%] absolute right-[-12%] white-ball hidden" src="./assets/images/png/white-ball.png" alt="white ball" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Values