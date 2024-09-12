import Image from 'next/image'
import { FaArchive } from "react-icons/fa";

const services = [
    {
        title: "Digital Currencies",
        description: "You will see a bunch of free CSS templates when you search on Google. TemplateMo is the best one because it is 100% free for anyone. We do not ask you anything in return. You are free to use our templates for any purpose.",
        img: "/service-image-01.jpg"
    },
    {
        title: "Digital Currencies",
        description: "You will see a bunch of free CSS templates when you search on Google. TemplateMo is the best one because it is 100% free for anyone. We do not ask you anything in return. You are free to use our templates for any purpose.",
        img: "/service-image-02.jpg"
    },
    {
        title: "Digital Currencies",
        description: "You will see a bunch of free CSS templates when you search on Google. TemplateMo is the best one because it is 100% free for anyone. We do not ask you anything in return. You are free to use our templates for any purpose.",
        img: "/service-image-03.jpg"
    },
]

const ServiceSection = () => {
  return (
    <div className="px-4 md:px-10 lg:px-28 flex flex-col gap-28 mt-10">
    {
    services.map((item, index) => (
        <div className="flex gap-14 even:flex-row-reverse" key={index}>
            <div className="flex-1 relative">
                <Image src={item.img} alt="" className="" fill />
            </div>
            <div className="flex-1 flex flex-col gap-10 text-slate-800">
                <div className="h-24 w-24 rounded-md bg-blue-50 flex items-center justify-center">
                    <FaArchive className="text-primary text-6xl" />
                </div>
                <h1 className="text-3xl font-extrabold"> {item.title} </h1>
                <p> {item.description} </p>
            </div>
        </div>
    ))
    }
    </div>
  )
}

export default ServiceSection
