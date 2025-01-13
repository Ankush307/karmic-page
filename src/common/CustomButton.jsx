import React from 'react'

const CustomButton = ({ myClass, text, icon }) => {
    return (
        <button className={`${myClass} !font-bold !leading-none rounded-[82px] py-3.5 px-[34px] hover:scale-110 transition-all duration-500 ease-linear`}>{text}{icon}</button>
    )
}

export default CustomButton