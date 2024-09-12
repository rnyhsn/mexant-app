"use client";
import Image from 'next/image'
import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";



const options = [
    {
        title: "Mexant Financial Planning",
        description: "You will see a bunch of free CSS templates when you search on Google. TemplateMo website is probably the best one because it is 100% free. We do not ask you anything in return. You are free to use our templates for any purpose."
    },
    {
        title: "Mexant Crypto Investing",
        description: "Mexant HTML5 Template is available to download 100% free of charge. This CSS layout is based on Boostrap 5 framework.Anyone can edit and use this layout for all professional websites. Thank you for visiting TemplateMo website."
    },
    {
        title: "Cryptocurrency Investments",
        description: "Ut dictum vehicula massa, ac pharetra leo tincidunt eu. Phasellus in tristique magna, ac gravida leo.Integer sed lorem sapien. Ut viverra mauris sed lobortis commodo. Mauris scelerisque venenatis justo, sed interdum sem."
    },
]

const AboutFeatured = () => {
    const [itemIndex, setItemIndex] = useState(0);
  return (
    <div className="px-4 md:px-10 lg:px-28 grid grid-cols-2 gap-16">
        <div className="relative">
            <Image src="/about-left-image.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="py-16 px-10 bg-white shadow-md flex flex-col">
        {
            options.map((item, index) => (
                <div key={index} className="flex flex-col gap-2 py-7 border-b border-gray-300 group">
                    <div onClick={()=> setItemIndex(index)} className={`flex items-center justify-between font-semibold cursor-pointer ${index === itemIndex && "text-primary"}`}>
                        <span> {item.title} </span> 
                        <IoIosArrowForward className={`text-xl ${index === itemIndex && "rotate-90"}`} />
                    </div>
                    <div className={`text-gray-800 h-0 overflow-hidden  transition-all duration-500 ${itemIndex === index && "h-max"}`}>
                        {item.description}
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default AboutFeatured
