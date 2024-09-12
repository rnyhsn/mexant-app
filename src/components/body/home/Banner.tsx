import React from 'react'

const Banner = () => {
  return (
    <div className="w-screen h-screen px-4 md:px-10 lg:px-20 flex justify-center flex-col  text-white" style={{background: "url('/slide-02.jpg')"}}>
        <div className="flex flex-col gap-8 w-1/2">
            <h1 className="text-6xl font-bold leading-snug">Get <span className="text-secondary">ready</span> for your Business & upgrade <span className="text-secondary">all aspects</span></h1>
            <div className="h-1 bg-white w-20"></div>
            <p>Mexant HTML5 Template is provided for free of charge. This layout is based on Boostrap 5 CSS framework. Anyone can download and edit for any professional website. Thank you for visiting TemplateMo website.</p>
            <div className="flex gap-4">
                <button className="px-6 py-2.5 bg-primary text-white rounded-md">Discover More</button>
                <button className="px-6 py-2.5 bg-secondary text-white rounded-md">Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default Banner
