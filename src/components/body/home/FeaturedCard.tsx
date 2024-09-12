import { FaArchive } from "react-icons/fa";


const FeaturedCard = ({item}: {item: {title: string, description: string, icon: any}}) => {
  return (
    <div className="p-10 bg-white shadow-md rounded-sm flex gap-6 col-span-1 group">
        <div>
            {item.icon}
        </div>
        <div>
            <h2 className="text-2xl font-bold mb-4 text-textSecondary"> {item.title} </h2>
            <p className="text-textSecondary"> {item.description} </p>
        </div>
    </div>
  )
}

export default FeaturedCard
