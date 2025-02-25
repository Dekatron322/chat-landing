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
          <div className="primary-200  relative   flex h-[408px] w-full overflow-hidden rounded-[15px] p-6">
            <div className="img-element-twenty-five absolute right-0 top-0"></div>

            <div className="flex w-full items-center justify-between">
              <div className="flex max-w-[831px] flex-col gap-2 pl-20">
                <div className="flex max-w-[105px] items-center gap-2 rounded-full bg-[#304342] px-[20px] py-2">
                  <img src="/chats transparent 1.png" alt="" className="w-7" />
                  <p className="text-sm text-white">FAQs</p>
                </div>
                <p className="text-start text-[45px] font-bold text-[#FFFFFF]">Frequently Asked Question</p>
                <p className="text-[#FFFFFF]">
                  We&apos;ve got answers! Our FAQ section is designed to address common inquiries about CHATS, from
                  platform features and dashboards to disbursement options and account setup.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="section-1  flex flex-col justify-center  px-64 pt-10">
          <NgoFaqs />
        </section>
        <section className="paddings flex w-full flex-col   px-64 ">
          <DonorFaqs />
        </section>
        <section className="paddings section-1 flex w-full flex-col   px-64 ">
          <VendorFaqs />
        </section>
        <section className="paddings flex w-full flex-col   px-64 ">
          <BeneficiaryFaqs />
        </section>
      </div>
      <Footer />
    </section>
  )
}
