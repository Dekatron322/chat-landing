"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import { useState } from "react"
import { motion } from "framer-motion"
import Footer from "components/Footer/Footer"
import Image from "next/image"
import NgoFaqs from "components/CardComponent/ngo-faqs"
import DonorFaqs from "components/CardComponent/donor-faqs"
import VendorFaqs from "components/CardComponent/vendor-faqs"
import BeneficiaryFaqs from "components/CardComponent/beneficiary-faqs"
import GetInTouch from "components/CardComponent/get-in-touch"
import Glossary from "components/CardComponent/glossary"

export default function Dashboard() {
  const [hover, setHover] = useState(false)
  const [hoverCall, setHoverCall] = useState(false)
  const [cvHover, setCvHover] = useState(false)
  const [hoverCard, setHoverCard] = useState(false)
  const [copied, setCopied] = useState(false)
  const [callCopied, setCallCopied] = useState(false)
  const [activeTab, setActiveTab] = useState("FAQ") // State to manage the active tab

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
    <section className="h-full w-full">
      <div className="max-sm:w-full max-sm:p-4">
        <DashboardNav />
        <div className="paddings mt-32 flex h-auto w-full">
          <div className="primary-200 relative flex h-[408px] w-full overflow-hidden rounded-[15px] p-6">
            <div className="img-element-twenty-eight absolute right-0 top-0"></div>
            <div className="img-element-twenty-nine absolute left-0 top-10"></div>

            <div className="flex w-full flex-col justify-between py-10">
              <div className="flex max-w-[831px] flex-col gap-2 pl-20">
                <p className="text-start text-[45px] font-bold text-[#FFFFFF]">How can we help ?</p>
                <p className="text-[#FFFFFF]">Lets know how we can help you</p>
              </div>
              <div className="flex gap-2 pl-20">
                <div
                  className={`cursor-pointer rounded-full  px-5 py-2 ${
                    activeTab === "FAQ" ? "bg-[#05F29A] text-[#151E22]" : "border border-[#FFFFFF80] text-[#FFFFFF]"
                  }`}
                  onClick={() => setActiveTab("FAQ")}
                >
                  FAQ
                </div>
                <div
                  className={`cursor-pointer rounded-full border border-[#FFFFFF80] px-5 py-2 ${
                    activeTab === "GLOSSARY"
                      ? "bg-[#05F29A] text-[#151E22]"
                      : "border border-[#FFFFFF80] text-[#FFFFFF]"
                  }`}
                  onClick={() => setActiveTab("GLOSSARY")}
                >
                  GLOSSARY
                </div>
                <div
                  className={`cursor-pointer rounded-full border border-[#FFFFFF80] px-5 py-2 ${
                    activeTab === "GET IN TOUCH"
                      ? "bg-[#05F29A] text-[#151E22]"
                      : "border border-[#FFFFFF80] text-[#FFFFFF]"
                  }`}
                  onClick={() => setActiveTab("GET IN TOUCH")}
                >
                  GET IN TOUCH
                </div>
              </div>
            </div>
          </div>
        </div>
        {activeTab === "FAQ" && (
          <div>
            <section className="section-1 flex flex-col justify-center px-64 pt-10">
              <NgoFaqs />
            </section>
            <section className="paddings flex w-full flex-col px-64">
              <DonorFaqs />
            </section>
            <section className="paddings section-1 flex w-full flex-col px-64">
              <VendorFaqs />
            </section>
            <section className="paddings flex w-full flex-col px-64">
              <BeneficiaryFaqs />
            </section>
          </div>
        )}
        {activeTab === "GLOSSARY" && (
          <div>
            {/* Add Glossary content here */}
            <Glossary />
          </div>
        )}
        {activeTab === "GET IN TOUCH" && (
          <div>
            <GetInTouch />
          </div>
        )}
      </div>
      <Footer />
    </section>
  )
}
