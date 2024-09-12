import React from 'react'
import FeaturedCard from './FeaturedCard'
import { FaArchive } from "react-icons/fa";
import { FaCloud } from "react-icons/fa6";
import { FaChargingStation } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa";
import { FaArchway } from "react-icons/fa6";
import { FaPuzzlePiece } from "react-icons/fa6";


const featuredItems = [
    {
        title: "CSS Templates",
        description: "TemplateMo website is the best for you to explore and download free website templates.",
        icon: <FaArchive className="text-primary text-6xl group-hover:translate-y-4 transition-all duration-500" />
    },
    {
        title: "HTML5 Web Pages",
        description: "Templates are based on Bootstrap 5 CSS framework. You can easily adapt or modify based on your needs.",
        icon: <FaCloud className="text-primary text-6xl group-hover:translate-y-4 transition-all duration-500" />
    },
    {
        title: "Responsive Designs",
        description: "All of our CSS templates are 100% free to use for commercial or business websites.",
        icon: <FaChargingStation className="text-primary text-6xl group-hover:translate-y-4 transition-all duration-500" />
    },
    {
        title: "Mobile and Tablet ready!",
        description: "Our HTML CSS templates are well-tested on mobile, tablet, and desktop compatibility.",
        icon: <FaSuitcase className="text-primary text-6xl group-hover:translate-y-4 transition-all duration-500"/>
    },
    {
        title: "Fast Customer Support",
        description: "Do not be hesitated to contact us if you have any question or concern about our templates.",
        icon: <FaArchway className="text-primary text-6xl group-hover:translate-y-4 transition-all duration-500"/>
    },
    {
        title: "Fully Customizable",
        description: "If you have any idea or suggestion about new templates, feel free to let us know.",
        icon: <FaPuzzlePiece className="text-primary text-6xl group-hover:translate-y-4 transition-all duration-500"/>
    },
]

const Featured = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 grid grid-cols-2 gap-x-4 gap-y-8">
    {
        featuredItems.map((item) => (
            <FeaturedCard item={item} key={item.title} />
        ))
    }
     
    </div>
  )
}

export default Featured
