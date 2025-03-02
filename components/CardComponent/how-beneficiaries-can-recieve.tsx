import { motion } from "framer-motion"
import React from "react"

const HowBeneficiariesCanRecieve = () => {
  return (
    <section className="section-1  flex  w-full">
      <div className="mt-6   w-full gap-4 max-md:flex-col  max-md:px-0 md:mb-16">
        <div className="flex w-full flex-col items-center justify-center gap-4   max-sm:mt-10   ">
          <div className="card-sm flex items-center gap-2 rounded-full px-3 py-2">
            <img src="/chats transparent 1.png" alt="" className="w-7" />
            <p className="text-sm">How Beneficiaries can recieve</p>
          </div>
          <motion.h2
            className="h-full max-w-[555px] text-center text-5xl font-medium leading-[64.8px] max-sm:text-3xl "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <span className="text-[#05F29A]">CHATS</span> Offers Seamless Disbursement Options
          </motion.h2>

          <div className=" paddings flex  w-full flex-col items-center justify-center gap-10">
            <div className="border-color-100 max-w-[1104px] gap-[66px] border-b pb-10 xl:flex">
              <img src="/Frame 1618874007.png" alt="" className="xl:h-[181px] xl:w-[306px]" />
              <div className="flex flex-col items-start gap-5">
                <h2 className="text-3xl font-medium max-sm:text-3xl">Paper payment voucher</h2>
                <p className="paragraph max-w-[669px]  text-[20px]  font-normal">
                  Beneficiaries can get unique payment vouches that would be scannedby the vendor for the payment
                </p>
                <button className="primary-text-100 flex items-center gap-2 underline">
                  Get Started <img src="/weui_arrow-filled.png" className="h-6 w-3" />{" "}
                </button>
              </div>
            </div>
            <div className="border-color-100 max-w-[1104px] gap-[66px] border-b pb-10 xl:flex">
              <img src="/Frame 1618874007 (1).png" alt="" className="xl:h-[181px] xl:w-[306px]" />
              <div className="flex flex-col items-start gap-5">
                <h2 className="text-3xl font-medium max-sm:text-3xl">NFC TAP to Pay</h2>
                <p className="paragraph max-w-[669px]  text-[20px]  font-normal">
                  Physical card enable transactions offline via NFC Embedded devices, ideal for those without phones
                </p>
                <button className="primary-text-100 flex items-center gap-2 underline">
                  Get Started <img src="/weui_arrow-filled.png" className="h-6 w-3" />{" "}
                </button>
              </div>
            </div>
            <div className="border-color-100 max-w-[1104px] gap-[66px] border-b pb-10 xl:flex">
              <img src="/Frame 1618874007 (1).png" alt="" className="xl:h-[181px] xl:w-[306px]" />
              <div className="flex flex-col items-start gap-5">
                <h2 className="text-3xl font-medium max-sm:text-3xl">Android Application</h2>
                <p className="paragraph max-w-[669px]  text-[20px]  font-normal">
                  Funds are credited directly to beneficiaries , cHATS linked wallet, accessible to all
                </p>
                <button className="primary-text-100 flex items-center gap-2 underline">
                  Get Started <img src="/weui_arrow-filled.png" className="h-6 w-3" />{" "}
                </button>
              </div>
            </div>
            <div className="max-w-[1104px] gap-[66px] pb-10 xl:flex">
              <img src="/Frame 1618874007.png" alt="" className="xl:h-[181px] xl:w-[306px]" />
              <div className="flex flex-col items-start gap-5">
                <h2 className="text-3xl font-medium max-sm:text-3xl">SMS/USSD (For Feature Phone)</h2>
                <p className="paragraph max-w-[669px]  text-[20px]  font-normal">
                  Text based codes allow easy fund redemption for beneficiaries without smartphone
                </p>
                <button className="primary-text-100 flex items-center gap-2 underline">
                  Get Started <img src="/weui_arrow-filled.png" className="h-6 w-3" />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowBeneficiariesCanRecieve
