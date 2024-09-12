import React from 'react'

const AboutSection = () => {
  return (
    <div className="px-4 md:px-10 lg:px-28 text-textSecondary">
      <div>
        {/* Heading Section */}
        <h3 className="text-secondary text-center font-bold text-sm uppercase mb-1">About Us</h3>
        <h1 className="text-4xl text-center font-semibold">Know Us Better</h1>
      </div>
      <div className="grid grid-cols-4 gap-12 mt-12">
        {/* Bottom Section */}

        <div className="col-span-3">
            {/* Left Section */}
            <div className="flex gap-5 text-lg font-semibold ml-10">
                <div className="py-3 px-8 rounded-md text-secondary shadow-md">Web Design</div>
                <div className="py-3 px-8 rounded-md shadow-md">Graphics</div>
                <div className="py-3 px-8 rounded-md shadow-md">Web Coding</div>
            </div>
            <table className="w-full text-left mt-10">
                <thead>
                    <tr className="">
                        <th className="py-3">Project Title</th>
                        <th>Budget</th>
                        <th>Deadline</th>
                        <th>Client</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-3 text-primary">Website Redesign</td>
                        <td>$1,500 to $2,200</td>
                        <td>2022 Dec 12</td>
                        <td> Web Biz</td>
                    </tr>
                    <tr>
                        <td className="py-3 text-primary">Website Redesign</td>
                        <td>$1,500 to $2,200</td>
                        <td>2022 Dec 12</td>
                        <td> Web Biz</td>
                    </tr>
                    <tr>
                        <td className="py-3 text-primary">Website Redesign</td>
                        <td>$1,500 to $2,200</td>
                        <td>2022 Dec 12</td>
                        <td> Web Biz</td>
                    </tr>
                    <tr>
                        <td className="py-3 text-primary">Website Redesign</td>
                        <td>$1,500 to $2,200</td>
                        <td>2022 Dec 12</td>
                        <td> Web Biz</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="col-span-1 flex flex-col gap-5 ">
            {/* Right Section */}
            <h1 className="text-2xl font-semibold">Please tell us about your idea and how you want it to be</h1>
            <p>You are allowed to use this template for your websites. You are NOT allowed to redistribute the template ZIP file on any other template websites.</p>
            <p>Thank you for downloading and using our templates. Please tell your friends about our website.</p>
            <button className="px-6 py-2.5 bg-secondary rounded-md text-white w-max">Discover More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
