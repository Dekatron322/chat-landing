import { motion } from "framer-motion"
import React from "react"

const CardComponent = () => {
  return (
    <div className="  flex  w-full">
      <div className=" paddings   w-full gap-6 max-md:flex-col max-md:px-0 md:mb-16">
        <div className="mt-14 flex w-full flex-col items-center justify-center gap-6  max-sm:mt-10   ">
          <div className="card flex items-center gap-2 rounded-full px-[20px] py-2">
            <img src="/chats transparent 1.png" alt="" className="w-7" />
            <p className="text-sm"> Platform Breakdown</p>
          </div>
          <motion.h2
            className=" h-full  max-w-[558px] text-center text-[24px] font-medium max-sm:text-3xl md:leading-[32.4px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            Streamline aid distribution with tailored tools for donors, NGOs, vendors, and beneficiaries
          </motion.h2>
          <div className="flex gap-2">
            <button className="border-color rounded-full border px-5 py-2 text-sm">Donor Dashboard</button>
            <button className="border-color rounded-full border px-5 py-2 text-sm">Beneficiary App</button>
            <button className="border-color rounded-full border px-5 py-2 text-sm">Field Agent/Vendor App</button>
            <button className="border-color rounded-full border px-5 py-2 text-sm">NGO Dashboard</button>
          </div>

          <div className="primary-200 relative flex h-[508px] w-full rounded-[15px] p-6">
            <div className="img-element-three absolute bottom-0 left-10"></div>
            <div className="img-element-four absolute bottom-0 right-0"></div>
            <div className="flex w-full  items-center justify-between ">
              <div className="w-1/2"></div>
              <div className="flex w-1/2 flex-col gap-2 pl-20">
                <p className="text-start text-[24px] font-bold">Donor Dashboard</p>
                <p>
                  <span className=" text-[#05F29A]">What it Does:</span> Allows donors to contribute securely to
                  campaigns, track their impact, and receive detailed reports.
                </p>
                <p>
                  <span className=" text-[#05F29A]">Benefit:</span> Transparency and real-time updates build confidence
                  and ensure funds are used effectively.
                </p>
                <div>
                  <button className="border-color rounded-full border px-5 py-2 text-sm">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
