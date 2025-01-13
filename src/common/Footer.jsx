import React from 'react'
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '../utils/icons'

const Footer = () => {
    const newYear = new Date().getFullYear();
    return (
        <>
            <div className='container mx-auto px-4 flex items-center flex-col justify-center'>
                <img className='max-w-[255px] pb-[70px] ' src="./assets/images/png/footer-logo.png" alt="logo" />
                <div className="flex items-center justify-center gap-6">
                    <a target='blank' href="https://www.instagram.com/" className='hover:scale-110 transition-all duration-300 ease-linear'><InstagramIcon /></a>
                    <a target='blank' href="https://www.twitter.com/" className='hover:scale-110 transition-all duration-300 ease-linear'><TwitterIcon /></a>
                    <a target='blank' href="https://www.facebook.com/" className='hover:scale-110 transition-all duration-300 ease-linear'><FacebookIcon /></a>
                    <a target='blank' href="https://www.youtube.com/" className='hover:scale-110 transition-all duration-300 ease-linear'><YoutubeIcon /></a>
                </div>
            </div>
            <div className="border-t-[1px] border-white w-full my-4"></div>
            <p className='text-white opacity-70 text-center pb-5'>© Karmic labs {newYear}</p>
        </>
    )
}

export default Footer