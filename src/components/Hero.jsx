import React from 'react'
import Header from '../common/Header'
import CustomButton from '../common/CustomButton'
import { ButtonIcon, Icon } from '../utils/icons'

const Hero = () => {
    return (
        <div id='home' className='relative md:pb-[80px] pb-24'>
            <img className='absolute top-0 left-0 pointer-events-none' src="./assets/images/png/top-ellips.png" alt="ellips" />
            <div className="container mx-auto max-w-[1140px] px-5">
                <Header />
            </div>
            <div className="bg-heroBgImg bg-no-repeat bg-cover bg-center">
                <div className="container mx-auto max-w-[1140px] md:pt-[140px] md:pb-16 px-5 pt-24">
                    <div className="flex flex-wrap  max-lg:gap-10">
                        <div className="lg:w-7/12 w-full flex flex-col justify-center">
                            <h1 className='font-sunflower font-light text-[64px] leading-[69.53px] text-white lg:max-w-[570px] max-lg:text-center uppercase max-lg:text-6xl max-md:text-5xl max-sm:text-4xl max-sm:pt-10'> We are believers decentralization and {''}
                                <span className='relative'>
                                    <img className='absolute pointer-events-none -top-3 right-0 max-sm:-top-2 max-sm:right-2 max-w-[158px] max-sm:max-w-[90px] w-full' src='./assets/images/webp/text-top-line.webp' alt='top-line' />
                                    Web3.
                                    <img className='absolute pointer-events-none -bottom-[2px] left-2 max-sm:top max-w-[169px] max-sm:max-w-[90px] w-full' src='./assets/images/webp/text-bottom-line.webp' alt='bottom-line' />
                                </span>
                            </h1>
                            <p className='lg:pt-3 pt-2 lg:pb-10 pb-6 text-white max-w-[550px] font-space max-lg:text-center max-lg:mx-auto'>Vulputate tristique habitant neque, accumsan. Vitae ultrices nulla erat nibh aliquam, quis tempus volutpat arcu. Leo convallis luctus dis malesuada turpis non consequat ac. </p>
                            <div className="flex lg:gap-8 gap-3 sm:gap-6 max-lg:justify-center">
                                <CustomButton myClass={'sm:py-3 py-2.5 px-6 sm:px-8 !font-bold bg-white flex items-center gap-2 justify-center'} text={'Get Started'} icon={<ButtonIcon />} />
                                <CustomButton myClass={'sm:py-3 py-2.5 px-6 sm:px-8 !font-light border-[1px] border-white text-white '} text={'Read More'} />
                            </div>
                        </div>
                        <div className="lg:w-5/12 w-full flex items-center justify-center">
                            <img className='max-w-[398px] w-full lg:h-[446px] object-cover' src="./assets/images/webp/cards-image.webp" alt="cards img" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center pt-[38px] max-lg:hidden">
                        <a href="#about" className='animate-bounce'><Icon /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero