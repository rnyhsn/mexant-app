import React from 'react'

const Solution = () => {
  return (
    <div className="h-[250px] bg-red-400 px-4 md:px-10 lg:px-20 flex items-center justify-between" style={{background: "url('/cta-bg.jpg')"}}>
        <h1 className="text-white text-4xl font-bold leading-snug">Business <span className="text-primary">Solutions</span> and<br/> <span className="text-secondary">Crypto</span> Investments</h1>
        <div className="flex gap-4">
                <button className="px-6 py-2.5 bg-primary text-white rounded-md">Discover More</button>
                <button className="px-6 py-2.5 bg-secondary text-white rounded-md">Contact Us</button>
        </div>
    </div>
  )
}

export default Solution
