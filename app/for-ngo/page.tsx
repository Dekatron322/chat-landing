"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import { useState } from "react"
import { motion } from "framer-motion"
import CardComponent from "components/CardComponent/card-component"
import HowBeneficiariesCanRecieve from "components/CardComponent/how-beneficiaries-can-recieve"
import Footer from "components/Footer/Footer"
import OurStory from "components/CardComponent/our-story"
import FAQsComponent from "components/CardComponent/faqs-component"
import AboutComponent from "components/CardComponent/about-component"
import Features from "components/CardComponent/features"
import Seamless from "components/CardComponent/seamless"

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
        <div className=" paddings mt-16  flex h-auto w-full">
          <div className="   ngoImage w-full  gap-6  rounded-[19px] max-md:flex-col max-md:px-0 md:mb-16">
            <div className="mt-14 flex w-full flex-col items-center justify-center gap-3   max-sm:mt-10   ">
              <div className="card flex items-center gap-2 rounded-md  px-[20px] py-2">
                <p className="text-sm">Our All-in-One Management Solution</p>
              </div>
              <motion.h2
                className=" h-full  max-w-[874px] text-center text-4xl font-medium max-sm:text-3xl md:leading-[55px]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                Streamlined Dashboards for NGOs to Manage Campaigns, Verify{" "}
                <span className="text-[#05F29A]">Beneficiaries</span>, and Drive Results
              </motion.h2>

              <motion.p
                className="paragraph mt-2 max-w-[685px] text-center text-base font-normal"
                transition={{ ease: "easeIn", duration: 2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                CHATS gives NGOs the tools they need to manage campaigns efficiently, verify beneficiaries, and provide
                transparent reports to donors.
              </motion.p>

              <button className="slide-button relative mt-4 flex overflow-hidden rounded-full border px-5 py-2 text-sm">
                <div className="btn-img-element absolute bottom-0 left-0"></div>
                <div className="btn-img-element-one absolute bottom-2 right-2"></div>
                Signup
              </button>

              <img src="/Graphite.png" alt="" className="w-[722px]" />
            </div>
          </div>
        </div>

        <section className="primary-500 relative flex h-[191px] w-full items-center">
          <div className="img-element-twenty absolute bottom-0 left-10"></div>

          <div className="flex h-full w-full items-center justify-between px-64">
            <div>
              <p className=" text-2xl font-bold">
                Total Number of <span className="text-[#05F29A]">campaigns</span> managed:
              </p>
              <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <div className="img-element-twenty-one"></div>
          </div>
        </section>
        <Features />
        <Seamless />

        {/* <section className="primary-100 relative h-[117px]">
          <div className="img-element absolute bottom-0 left-10"></div>
          <div className="img-element-two absolute bottom-0 right-10"></div>
          <div className="flex items-center px-96">
            <p className="animate-text text-[32px] font-medium">Driving Aid with Innovation and Transparency</p>
            <div className="car-img flex h-[117px] w-full items-center "></div>
          </div>
        </section>
        <CardComponent />
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
