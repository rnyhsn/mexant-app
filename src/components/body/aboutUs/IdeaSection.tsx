
const steps = [
    {
        title: "First Step",
        description: "Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus."
    },
    {
        title: "Second Step",
        description: "Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus."
    },
    {
        title: "Third Step",
        description: "Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus."
    },
    {
        title: "Forth Step",
        description: "Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus."
    },
]

const IdeaSection = () => {
  return (
    <div className="px-4 md:px-10 lg:px-28 flex gap-32 text-slate-900">
        <div className="flex flex-col gap-8 flex-1">
            <h2 className="text-xl font-bold">Please tell us about your idea and how you want it to be</h2>
            <p>If you need more HTML templates, you can try visiting TooCSS blog and Tooplate websites. You can get many good templates on those websites.</p>
            <p>Nulla non placerat neque, a gravida elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi sed dolor condimentum tellus commodo volutpat non malesuada turpis.</p>
            <button className="py-2.5 px-6 bg-primary text-white rounded-md w-max">Discover More</button>
        </div>
        <div className="flex-[1.5] grid grid-cols-2 gap-x-6 gap-y-8">
        {
            steps.map((item, index) => (
                <div key={index} className="relative bg-white shadow-md rounded-md py-10 px-5 group">
                    <div className="absolute top-2 right-2 text-4xl text-primary font-bold group-hover:translate-y-4 transition-all duration-500"> 0{index+1} </div>
                    <h2 className="text-xl font-semibold mb-6 text-slate-800"> {item.title} </h2>
                    <p className="text-slate-800"> {item.description} </p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default IdeaSection
