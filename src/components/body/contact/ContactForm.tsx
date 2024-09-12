import React from 'react'

const ContactForm = () => {
  return (
    <div className="px-4 md:px-10 lg:px-28 text-textSecondary mt-20">
      <div className="mb-16">
        <h2 className="text-secondary uppercase font-bold text-center">Contact Us</h2>
        <h1 className="text-center font-bold text-4xl">Feel free to message us</h1>
      </div>
      <form action="" className="flex flex-col gap-4 px-20">
        <div className="flex gap-8">
            <input type="text" className="flex-1 py-4 outline-none rounded-md px-4 bg-slate-200" placeholder="Your Name" />
            <input type="text" className="flex-1 py-4 outline-none rounded-md px-4 bg-slate-200" placeholder="Your Phone" />
        </div>
        <div className="flex gap-8">
            <input type="text" className="flex-1 py-4 outline-none rounded-md px-4 bg-slate-200" placeholder="Your E-mail" />
            <input type="text" className="flex-1 py-4 outline-none rounded-md px-4 bg-slate-200" placeholder="Your Subject" />
        </div>
        <textarea name="" id="" className="py-4 px-4 rounded-md h-[150px] outline-none bg-slate-200" placeholder="Your Message"></textarea>
        <button className="px-8 py-3 bg-secondary text-white rounded-md w-max mt-4 hover:bg-primary transition-all duration-300">Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm
