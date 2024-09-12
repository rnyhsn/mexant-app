import Image from 'next/image'
import React from 'react'
import NavLink from './NavLink'

const links = [
    {title: "Home", path: "/"},
    {title: "Services", path: "/services"},
    {title: "About Us", path: "/about-us"},
    {title: "Contact", path: "/contact"},
    {title: "Testimonial", path: "/testimonial"},
]

const Header = () => {
  return (
    <div className="px-4 md:px-10 lg:px-28 h-28 absolute w-full flex z-50 items-center justify-between text-white">
        <div>
            {/* Logo Section */}
            <Image src="/logo.png" alt="" width={200} height={170} />
        </div>
        <div className="flex gap-8 items-center">
        {
        links.map((link) => (
            <NavLink link={link} key={link.title} />
        ))
        }
        <button className="py-2.5 px-6 rounded-md bg-primary text-white font-semibold">Contact Support</button>
        </div>
    </div>
  )
}

export default Header
