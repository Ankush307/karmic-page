import React from 'react'
import { FOOTER_LIST } from '../utils/helper';

const Footer = () => {
    const newYear = new Date().getFullYear();
    return (
        <>
            <div className='container mx-auto px-4 flex items-center flex-col justify-center'>
                <a href="/"><img className='max-w-[255px] pb-[70px] ' src="./assets/images/png/footer-logo.png" alt="logo" /></a>
                <div className="flex items-center justify-center gap-6">
                    {FOOTER_LIST.map((obj, i) => (
                        <a key={i} target='blank' href={obj.link} className='hover:scale-110 transition-all duration-300 ease-linear'>{obj.icon}</a>
                    ))}
                </div>
            </div>
            <div className="border-t-[1px] border-white w-full my-4"></div>
            <p className='text-white opacity-70 text-center pb-5'>© Karmic labs {newYear}</p>
        </>
    )
}

export default Footer