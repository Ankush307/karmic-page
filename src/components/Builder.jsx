import React from 'react'
import { BUILDERS_LIST } from '../utils/helper'

const Builder = () => {
    return (
        <div className='relative pb-[60px]'>
            <div className="max-w-[1140px] mx-auto max-sm:px-5">
                <div className='pt-[96px] max-md:pt-[60px]'>
                    <h2 className='lg:text-[56px] text-white sm:text-[46px] text-[30px] font-light md:leading-[60px] leading-[50px] text-center uppercase relative'>Who is karmic? <span><img className='absolute pointer-events-none top-[-45%] left-[50%] translate-x-[-50%] max-sm:max-h-[77px] ' src="./assets/images/png/text-line.png" alt="" /></span> </h2>
                    <p className='max-w-[532px] text-white mx-auto text-center pt-6 max-sm:text-sm font-space'>We are builders, innovaters, and believers.</p>
                    <p className='max-w-[532px] text-white mx-auto text-center max-sm:text-sm pb-10 font-space pt-0.5'>We believe in a future that rests in your hands, and yours alone. The future is decentralized, The future is web3.</p>
                    <div className="flex items-center justify-center flex-wrap">
                        {BUILDERS_LIST.map((obj, i) => (
                            <div key={i}>
                                <img className='max-w-[369px] ' src={obj.image} alt="builders" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <img className='absolute sm:top-[-40%] top-[-20%] right-0 pointer-events-none' src="./assets/images/png/project-bottom-ellips.png" alt="bottom-ellips" />
        </div>
    )
}

export default Builder