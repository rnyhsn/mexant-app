import React from 'react'

const ServiceBanner = () => {
  return (
    <div className="bg-red-400 h-[450px] relative" style={{background: "url('/about-banner.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2">
            <h2 className="text-5xl font-bold mb-2">Our Services</h2>
            <hr className="h-1.5 rounded-sm bg-gray-300 w-20 mx-auto mt-4" />
        </div>
    </div>
  )
}

export default ServiceBanner
