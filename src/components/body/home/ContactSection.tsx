import Image from 'next/image'
import React from 'react'

const ContactSection = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 bg-no-repeat flex gap-4" style={{background: "url('/calculator-bg.jpg')"}}>
        <div className="flex-[1.2] relative">
            <Image src="/calculator-image.png" alt="" width={300} height={800} className="h-[600px] w-[800px] absolute -top-10" />
        </div>
        <div className="flex-[0.8] px-8 py-20 text-gray-100">
            <h2 className="text-secondary uppercase mb-2 font-semibold">Your Freedom</h2>
            <h1 className="text-3xl font-bold ">Get a Financial Plan</h1>
            <form action="" className="flex flex-col gap-6 mt-14">
                <div className="flex gap-5">
                    <div className="flex flex-col flex-1 gap-1">
                        <label htmlFor="">Your Name</label>
                        <input type="text" name="name" className="py-2.5 px-4 bg-slate-500 outline-none rounded-md" />
                    </div>
                    <div className="flex flex-col flex-1 gap-1">
                        <label htmlFor="">Your Name</label>
                        <input type="text" name="name" className="py-2.5 px-4 bg-slate-500 outline-none rounded-md"  />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Subject</label>
                    <input type="text" name="subject" className="py-2.5 px-4 bg-slate-500 outline-none rounded-md"  />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Reason</label>
                    <select name="reason" id="" className="py-2.5 px-4 bg-slate-500 outline-none rounded-md" >
                        <option value="">Choose an option</option>
                        <option value="">Online Banking</option>
                        <option value="">Financial Control</option>
                        <option value="">Yearly Profit</option>
                        <option value="">Crypto Investment</option>
                        <option value="">Others</option>
                    </select>
                </div>
                <button className="px-6 py-2.5 rounded-md bg-secondary text-white w-max">Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default ContactSection
