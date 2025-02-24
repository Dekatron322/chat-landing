import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"

const CardComponent = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      title: "Donor Dashboard",
      content: (
        <div className="primary-200 relative flex h-[508px] w-full rounded-[15px] p-6">
          <div className="img-element-three absolute bottom-0 left-10"></div>
          <div className="img-element-four absolute bottom-0 right-0"></div>
          <div className="flex w-full items-center justify-between">
            <div className="w-1/2"></div>
            <div className="flex w-1/2 flex-col gap-2 pl-20">
              <p className="text-start text-[24px] font-bold text-[#FFFFFF]">Donor Dashboard</p>
              <p className="text-[#FFFFFF]">
                <span className="text-[#05F29A]">What it Does:</span> Allows donors to contribute securely to campaigns,
                track their impact, and receive detailed reports.
              </p>
              <p className="text-[#FFFFFF]">
                <span className="text-[#05F29A]">Benefit:</span> Transparency and real-time updates build confidence and
                ensure funds are used effectively.
              </p>
              <div>
                <button className="border-color rounded-full border px-5 py-2 text-sm">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Beneficiary App",
      content: (
        <div className="primary-300 relative flex h-[508px] w-full overflow-hidden rounded-[15px] p-6">
          <div className="img-element-fifteen absolute bottom-0 left-56"></div>
          <div className="img-element-four absolute bottom-0 right-0"></div>
          <div className="flex w-full items-center justify-between">
            <div className="w-1/2"></div>
            <div className="flex w-1/2 flex-col gap-2 pl-20">
              <p className="text-start text-[24px] font-bold">Beneficiary App</p>
              <p>
                <span className="text-[#05F29A]">What it Does:</span> Allows beneficiaries to access aid, check
                balances, and redeem funds at approved vendors.
              </p>
              <p>
                <span className="text-[#05F29A]">Benefit:</span> Provides an easy, reliable way for beneficiaries to
                receive and utilize aid.
              </p>
              <div>
                <button className="border-color rounded-full border px-5 py-2 text-sm">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Field Agent/Vendor App",
      content: (
        <div className="relative flex h-[508px]  w-full overflow-hidden rounded-[15px] bg-[#05F29A] p-10">
          <div className="grid w-full grid-cols-2 gap-10">
            <div className="relative h-full w-full overflow-auto rounded-[10px] bg-[#151E22]">
              <div className="img-element-sixteen absolute bottom-0 left-10"></div>

              <div className="grid h-full w-full grid-cols-2 items-center justify-between p-6">
                <div className=""></div>
                <div className="flex  flex-col gap-4 ">
                  <p className="text-start text-[24px] font-bold text-[#ffffff]">Field Agent App</p>
                  <p className="text-[#ffffff]">
                    <span className="text-[#05F29A]">What it Does:</span> Field agents can verify beneficiaries,
                    distribute aid, and report on-ground activities.
                  </p>
                  <p className="text-[#ffffff]">
                    <span className="text-[#05F29A]">Benefit:</span> Simplifies fieldwork and ensures accurate,
                    real-time data collection.
                  </p>
                  <div>
                    <button className="border-color rounded-full border px-5 py-2 text-sm">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="primary-300 relative h-full w-full overflow-auto rounded-[10px]">
              <div className="img-element-seventeen absolute bottom-0 left-10"></div>

              <div className="grid h-full w-full grid-cols-2 items-center justify-between p-6">
                <div className=""></div>
                <div className="flex  flex-col gap-4 ">
                  <p className="text-start text-[24px] font-bold">Vendor App</p>
                  <p>
                    <span className="text-[#05F29A]">What it Does:</span> Vendors can redeem digital vouchers, process
                    NFC payments, and track disbursements
                  </p>
                  <p>
                    <span className="text-[#05F29A]">Benefit:</span> Fast, secure payments and easy transaction
                    management.
                  </p>
                  <div>
                    <button className="border-color rounded-full border px-5 py-2 text-sm">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "NGO Dashboard",
      content: (
        <div className="primary-400 relative flex h-[508px] w-full overflow-hidden rounded-[15px] p-6">
          <div className="img-element-eighteen absolute bottom-0 left-10"></div>
          <div className="img-element-four absolute bottom-0 right-0"></div>
          <div className="flex w-full items-center justify-between">
            <div className="w-1/2"></div>
            <div className="flex w-1/2 flex-col gap-4 pl-40">
              <p className="text-start text-[24px] font-bold">NGO Dashboard</p>
              <p>
                <span className="text-[#05F29A]">What it Does:</span> Enables NGOs to manage campaigns, verify
                beneficiaries, and generate reports for donors.
              </p>
              <p>
                <span className="text-[#05F29A]">Benefit:</span> Streamlines operations, builds trust with donors, and
                improves accountability.
              </p>
              <div>
                <button className="border-color rounded-full border px-5 py-2 text-sm">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="flex w-full">
      <div className="paddings w-full gap-6 max-md:flex-col max-md:px-0 md:mb-16">
        <div className="mt-14 flex w-full flex-col items-center justify-center gap-6 max-sm:mt-10">
          <div className="card flex items-center gap-2 rounded-full px-[20px] py-2">
            <img src="/chats transparent 1.png" alt="" className="w-7" />
            <p className="text-sm">Platform Breakdown</p>
          </div>
          <motion.h2
            className="h-full max-w-[558px] text-center text-[24px] font-medium max-sm:text-3xl md:leading-[32.4px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            Streamline aid distribution with tailored tools for donors, NGOs, vendors, and beneficiaries
          </motion.h2>
          <div className="flex gap-2 ">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`border-color rounded-full border px-5 py-2 text-sm ${
                  activeTab === index ? "border-color-active" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="relative mt-6 w-full" style={{ height: "508px" }}>
            <AnimatePresence>
              {tabs.map((tab, index) => (
                <motion.div
                  key={index}
                  className={`absolute left-0 top-0 w-full ${index === activeTab ? "z-10" : "z-0"}`}
                  initial={{ y: index === activeTab ? 0 : 20, opacity: index === activeTab ? 1 : 0 }}
                  animate={{ y: index === activeTab ? 0 : 20, opacity: index === activeTab ? 1 : 0 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ ease: "easeOut", duration: 0.5 }}
                  style={{
                    height: index === activeTab ? "100%" : "20px", // Show a small portion of the previous tab's background
                    overflow: "hidden",
                    backgroundColor: index < activeTab ? "transparent" : "inherit", // Only show background for active tab
                  }}
                >
                  {index === activeTab && tab.content}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
