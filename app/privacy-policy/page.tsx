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
          <div className="primary-200  relative   flex h-[408px] w-full overflow-hidden rounded-[15px] p-6">
            <div className="img-element-twenty-four absolute right-40 top-32"></div>

            <div className="flex w-full items-center justify-between">
              <div className="flex max-w-[831px] flex-col gap-2 pl-20">
                <p className="text-start text-[45px] font-bold text-[#FFFFFF]">Privacy Policy</p>
                <p className="text-[#FFFFFF]">
                  Our privacy policy outlines how we collect, use, and safeguard your data, ensuring compliance with
                  global data protection regulations. Whether you're a donor, NGO, or beneficiary, your trust is
                  paramount, and we commit to using your information solely to enhance your experience on our platform.
                  For full details, please review our comprehensive policy document.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="mb-16 flex flex-col justify-center px-64 pt-20">
          <p className="paragraph pl-8">
            Updated November 28, 2024
            <b className="paragraph-2"> 15 min read</b>
          </p>
          <div className="mt-4 flex items-center gap-4">
            <Image alt="" src="/policy/messages-3.png" width={24} height={24} />
            <p className="paragraph underline" style={{ textDecorationColor: "#05F29A", textUnderlineOffset: "4px" }}>
              These outlined sections provide a clear summary to help you better understand the legal terms. Please note
              that these explanations are for informational purposes only and do not constitute a legally binding
              agreement.
            </p>
          </div>
          <div className="paragraph mt-10 flex flex-col gap-10 pl-8">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">Lorem Ipsum is simply dummy text of the printing </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">Lorem Ipsum is simply dummy text of the printing </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">Lorem Ipsum is simply dummy text of the printing </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  )
}
