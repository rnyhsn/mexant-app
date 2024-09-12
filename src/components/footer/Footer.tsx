import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="text-white mt-20">
      <div className="grid grid-cols-6 gap-14 py-20 px-4 md:px-10 lg:px-28 bg-slate-800">
        {/* Top Section */}
        <div>
          <Image src="/client-01.png" alt="" className="" width={250} height={100} />
        </div>
        <div>
          <Image src="/client-01.png" alt="" className="" width={200} height={100} />
        </div>
        <div>
          <Image src="/client-01.png" alt="" className="" width={200} height={100} />
        </div>
        <div>
          <Image src="/client-01.png" alt="" className="" width={200} height={100} />
        </div>
        <div>
          <Image src="/client-01.png" alt="" className="" width={200} height={100} />
        </div>
        <div>
          <Image src="/client-01.png" alt="" className="" width={200} height={100} />
        </div>
      </div>
      <div className="bg-slate-900 py-8">
        {/* Bottom Section */}
        <h2 className="text-center text-sm font-semibold">Copyright © 2022 Mexant Co., Ltd. All Rights Reserved.</h2>
        <p className="text-center text-sm">Designed by <span className="text-secondary">xyz</span> Distributed By <span className="text-primary">Rony Hossain</span> </p>
      </div>
    </div>
  )
}

export default Footer
