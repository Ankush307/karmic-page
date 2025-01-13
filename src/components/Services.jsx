import React from "react";
import { SERVICES_LIST } from "../utils/helper";

const Services = () => {
    return (
        <div id="services" className="relative">
            <img className="bottom-[-40%] absolute pointer-events-none" src="./assets/images/png/services-ellips.png" alt="ellips" />
            <div className="max-w-[1145px] w-full mx-auto flex flex-col">
                <h2 className='lg:text-[56px] sm:text-[46px] text-[30px] font-light text-white md:leading-[60px] lg:pb-12 pb-6 leading-[50px] text-center uppercase relative'>Services <span><img className='absolute top-[-20%] left-[50%] translate-x-[-50%] max-sm:max-h-[77px] pointer-events-none' src="./assets/images/png/text-line.png" alt="" /></span> </h2>
                <div className="flex pt-[77px] max-lg:pt-16 max-md:pt-12 max-sm:pt-8 gap-y-10 flex-wrap">
                    {SERVICES_LIST.map((item, index) => (
                        <div className="w-4/12 px-[10.5px] max-lg:w-1/2 max-md:w-full justify-center" key={index}>
                            <div className="relative ball-card">
                                <div className={`relative transition-all duration-500 ease-linear cursor-pointer z-10 p-[22.22px] sm:h-[276px] sm:max-w-[369px] max-w-[300px] mx-auto rounded-xl hover:backdrop-blur-[10px] hover:bg-white hover:bg-opacity-10 hover:drop-shadow-[0_4px_20px_rgba(0,0,0,15)`}>
                                    {item.logo}
                                    <h3 className="font-bold text-xl leading-7 text-white max-lg:text-lg pt-5">{item.heading}</h3>
                                    {item.description && (
                                        <p className="max-md:text-sm text-white leading-[150%] pt-1.5">{item.description}</p>
                                    )}
                                    {item.list && Array.isArray(item.list) && (
                                        <ul className="list-inside max-md:text-sm text-white pt-1.5 pl-4">
                                            {item.list.map((listItem, subIndex) => (
                                                <li className="list-disc " key={subIndex}>{listItem}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <img className="sm:top-[-12%] top-[-15%] absolute right-[-5%] sm:right-[-12%] white-ball hidden" src="./assets/images/png/white-ball.png" alt="white ball" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;