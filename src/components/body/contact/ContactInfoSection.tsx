import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";



const ContactInfoSection = () => {
  return (
    <div className="px-4 md:px-10 lg:px-28">
        <div className="grid grid-cols-3 gap-16 mx-32 relative -top-16">
            <div className="flex items-center flex-col gap-4 relative  bg-white rounded-md py-6 shadow-md group">
                <FaEnvelope className="text-primary text-4xl group-hover:scale-125 transition-all duration-300" />
                <div className="">
                <h1 className="mb-2 text-lg font-semibold text-center text-textSecondary">Email Address</h1>
                <p className="text-primary text-center"> info@company.com </p>
                </div>
            </div>
            <div className="flex items-center flex-col gap-4 bg-white rounded-md py-6 shadow-md group">
                <FaPhoneAlt className="text-primary text-4xl group-hover:scale-125 transitiona-ll duration-300" />
                <div className="">
                <h1 className="mb-2 text-lg font-semibold text-center text-textSecondary">Phone Number</h1>
                <p className="text-primary text-center"> +123456 </p>
                </div>
            </div>
            <div className="flex items-center flex-col gap-4 bg-white rounded-md py-6 shadow-md group">
                <FaMapLocationDot className="text-primary text-4xl group-hover:scale-125 transition-all duration-300" />
                <div className="">
                <h1 className="mb-2 text-lg font-semibold text-center text-textSecondary">Address</h1>
                <p className="text-primary text-center"> Victoria, Australia </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactInfoSection
