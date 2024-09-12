import Image from 'next/image'
import { FaQuoteLeft } from "react-icons/fa";


const TestimonialSection = () => {
  return (
    <div className="flex flex-col px-4 md:px-10 lg:px-20 text-slate-800">
        <div className="text-center">
            <h2 className="uppercase font-extrabold mb-1 text-sm text-secondary">Testimonials</h2>
            <h1 className="text-4xl font-bold">What They Say</h1>
        </div>
        <div className="w-full h-[250px] mt-20 rounded-xl overflow-hidden">
            <div className="h-full flex gap-5 mx-32 bg-white shadow-xl">
                <div className="flex-[2.5]">
                    <div className="bg-primary w-16 h-16 rounded-sm text-white flex items-center justify-center mb-6">
                    <FaQuoteLeft className="text-4xl text-white" />
                    </div>
                    <p className="mb-6">“Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”</p>
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold">Andrew Grafield</h2>
                        <p className="text-primary text-sm font-bold">Crypto Manager</p>
                    </div>
                </div>
                <div className="col-span-1 relative flex-1 bg-red-400"> <Image src="/testimonials-01.jpg" alt="" className="object-cover" fill /> </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialSection
