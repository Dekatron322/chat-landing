"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import { useState } from "react"
import { motion } from "framer-motion"
import Footer from "components/Footer/Footer"
import FAQsComponent from "components/CardComponent/faqs-component"
import Features from "components/CardComponent/features"
import Seamless from "components/CardComponent/seamless"
import HowItWorks from "components/CardComponent/how-it-works"
import TestimonialSection from "components/CardComponent/testimonials-section"
import Image from "next/image"

export default function Dashboard() {
  const [hover, setHover] = useState(false)
  const [hoverCall, setHoverCall] = useState(false)

  const [cvHover, setCvHover] = useState(false)
  const [hoverCard, setHoverCard] = useState(false)
  const [copied, setCopied] = useState(false)
  const [callCopied, setCallCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("cygnux696@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Reset copied state after 2 seconds
  }

  const handleCallCopy = () => {
    navigator.clipboard.writeText("08129859405")
    setCallCopied(true)
    setTimeout(() => setCallCopied(false), 2000) // Reset copied state after 2 seconds
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between children
      },
    },
  }

  // Child item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="   h-full w-full">
      <div className="   max-sm:w-full max-sm:p-4">
        <DashboardNav />
        <div className="paddings mt-32 flex h-auto w-full">
          <div className="solutionImage relative h-[590px] w-full gap-6 rounded-[19px] max-md:flex-col max-md:px-0 md:mb-16">
            {/* Floating Buttons */}
            <div className="animate-float absolute left-10 top-1/4">
              <button className="border-color-100 mt-4 flex  items-center  justify-center overflow-hidden rounded-full border px-5 py-2 text-sm text-[#ffffff] shadow-lg">
                NGO Dashboard
              </button>
              <Image src="/solutions/Vector (4).png" alt="" width={18.56} height={23.39} className="ml-10 mt-2" />
            </div>
            <div className="animate-float absolute right-10 top-1/3 delay-100">
              <button className="border-color-100 mt-4 flex  items-center  justify-center overflow-hidden rounded-full border px-5 py-2 text-sm text-[#ffffff] shadow-lg">
                Beneficiary App
              </button>
              <Image src="/solutions/Vector (2).png" alt="" width={18.56} height={23.39} className="ml-10 mt-2" />
            </div>
            <div className="animate-float absolute bottom-1/4 left-1/4 delay-200">
              <button className="border-color-100 mt-4 flex  items-center  justify-center overflow-hidden rounded-full border px-5 py-2 text-sm text-[#ffffff] shadow-lg">
                Donor Dashboard
              </button>
              <Image src="/solutions/Vector (3).png" alt="" width={18.56} height={23.39} className="ml-10 mt-2" />
            </div>
            <div className="animate-float absolute bottom-1/3 right-1/4 delay-300">
              <button className="border-color-100 mt-4 flex  items-center  justify-center overflow-hidden rounded-full border px-5 py-2 text-sm text-[#ffffff] shadow-lg">
                Vendor App
              </button>
              <Image src="/solutions/Vector (5).png" alt="" width={18.56} height={23.39} className="ml-10 mt-2" />
            </div>
            <div className="animate-float absolute bottom-7 right-1/2 delay-300">
              <button className="border-color-100 mt-4 flex  items-center  justify-center overflow-hidden rounded-full border px-5 py-2 text-sm text-[#ffffff] shadow-lg">
                Field Agent App
              </button>
              <Image src="/solutions/Vector (6).png" alt="" width={18.56} height={23.39} className="ml-10 mt-2" />
            </div>

            {/* Content */}
            <div className=" flex h-full w-full flex-col items-center justify-center gap-3 ">
              <motion.h2
                className="max-w-[603px] justify-center text-center text-4xl font-medium text-[#FFFFFF] max-sm:text-3xl md:leading-[55px]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                Find the Right <span className="text-[#05F29A]">Solutions</span> for Your Aid Distribution
              </motion.h2>
              <p className="w-[503px] text-center text-[#FFFFFF]">
                Check out our thoughtfully designed solutions crafted to simplify aid management, enhance transparency,
                and drive impact
              </p>
            </div>
          </div>
        </div>
        <section className="paddings">
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
          <div className="primary-200  relative mt-10  flex h-[508px] w-full overflow-hidden rounded-[15px] p-6">
            <div className="img-element-three absolute bottom-0 left-10"></div>
            <div className="img-element-four absolute bottom-0 right-0"></div>

            <div className="flex w-full items-center justify-between">
              <div className="w-1/2"></div>
              <div className="flex w-1/2 flex-col gap-2 pl-20">
                <p className="text-start text-[24px] font-bold text-[#FFFFFF]">Donor Dashboard</p>
                <p className="text-[#FFFFFF]">
                  <span className="text-[#05F29A]">What it Does:</span> Allows donors to contribute securely to
                  campaigns, track their impact, and receive detailed reports.
                </p>
                <p className="text-[#FFFFFF]">
                  <span className="text-[#05F29A]">Benefit:</span> Transparency and real-time updates build confidence
                  and ensure funds are used effectively.
                </p>
                <div>
                  <button className="border-color rounded-full border px-5 py-2 text-sm">Get Started</button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-10 flex h-[508px]  w-full overflow-hidden rounded-[15px] bg-[#05F29A] p-10">
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
          <div className="primary-400 relative mt-10 flex h-[508px] w-full overflow-hidden rounded-[15px] p-6">
            <div className="img-element-fifteen absolute bottom-0 left-56"></div>
            <div className="img-element-twenty-two absolute bottom-0 left-0"></div>
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

          <div className="primary-400 relative mt-10 flex  w-full overflow-hidden rounded-[15px] p-6">
            <div className="img-element-twenty-three absolute right-10 top-0"></div>
            <div className="img-element-four absolute bottom-0 right-0"></div>
            <div className="flex w-full items-center justify-between">
              <div className="flex w-full flex-col items-center justify-center gap-2 pl-20">
                <Image src="/solutions/Frame 1618874244.png" alt="" width={138} height={57.84} />
                <p className="text-start text-[24px] font-bold">CHATS Disbursement Options to Beneficiaries</p>
                <p className="paragraph max-w-[498px] text-center">
                  CHATS provides flexible and secure disbursement options to ensure aid reaches beneficiaries
                  efficiently and transparently.
                </p>

                <div className="my-10 grid grid-cols-2 gap-5 ">
                  <div className="paperImage flex h-[146px] w-[393px] flex-col  justify-center rounded-[10px] p-6">
                    <h5 className="text-xl text-white">Paper payment voucher</h5>
                    <p className="text-[#FFFFFFCC]">
                      Beneficiaries can get unique payment vouches that would be scannedby the vendor for the payment
                    </p>
                  </div>
                  <div className="paperImage1 flex h-[146px] w-[393px] flex-col  justify-center rounded-[10px] p-6">
                    <h5 className="text-xl text-white">NFC TAP to Pay</h5>
                    <p className="text-[#FFFFFFCC]">
                      Physical card enable transactions offline via NFC Embedded devices, ideal for those without phones
                    </p>
                  </div>
                  <div className="paperImage2 flex h-[146px] w-[393px] flex-col  justify-center rounded-[10px] p-6">
                    <h5 className="text-xl text-white">Android Application</h5>
                    <p className="text-[#FFFFFFCC]">
                      Funds are credited directly to beneficiaries , cHATS linked wallet, accessible to all
                    </p>
                  </div>
                  <div className="paperImage3 flex h-[146px] w-[393px] flex-col  justify-center rounded-[10px] p-6">
                    <h5 className="text-xl text-white">SMS/USSD (For Feature Phone)</h5>
                    <p className="text-[#FFFFFFCC]">
                      Text based codes allow easy fund redemption for beneficiaries without smartphone
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="primary-100 relative h-[117px]">
          <div className="img-element absolute bottom-0 left-10"></div>
          <div className="img-element-two absolute bottom-0 right-10"></div>
          <div className="flex h-full items-center px-96">
            <p className="animate-text text-[32px] font-medium">Driving Aid with Innovation and Transparency</p>
            <div className="car-img flex h-[117px] w-full items-center "></div>
          </div>
        </section>
        {/* <CardComponent />
        <HowBeneficiariesCanRecieve />
        <section className="paddings mb-10 flex  w-full">
          <div className="flex w-full flex-col items-center justify-center   max-sm:mt-10   ">
            <div className=" mt-10  ">
              <img src="/Frame 1618873988.png" alt="" />
            </div>
          </div>
        </section> */}

        <FAQsComponent />
      </div>
      <Footer />
    </section>
  )
}
