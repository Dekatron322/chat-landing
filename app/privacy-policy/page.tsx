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
import MobileNav from "components/Navbar/MobileNav"

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
        <MobileNav />
        <div className="paddings flex h-auto w-full  md:mt-32">
          <div className="primary-200  relative   w-full overflow-hidden rounded-[15px] p-6 max-sm:pb-32 md:flex md:h-[408px]">
            <div className="img-element-twenty-four absolute right-40 top-32 max-sm:hidden"></div>
            <div className="img-element-twenty-four absolute bottom-[-80px] left-[-20px] md:hidden"></div>

            <div className="flex w-full items-center justify-between">
              <div className="flex max-w-[831px] flex-col gap-2 md:pl-20">
                <p className="text-start text-[45px] font-bold text-[#FFFFFF]">Privacy Policy</p>
                <p className="text-[#FFFFFF]">
                  Our privacy policy outlines how we collect, use, and safeguard your data, ensuring compliance with
                  global data protection regulations. Whether you&#39;re a donor, NGO, or beneficiary, your trust is
                  paramount, and we commit to using your information solely to enhance your experience on our platform.
                  For full details, please review our comprehensive policy document.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="mb-16 flex flex-col justify-center pt-20 md:px-64">
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
              industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">Lorem Ipsum is simply dummy text of the printing </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">Lorem Ipsum is simply dummy text of the printing </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industr&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-2xl">Lorem Ipsum is simply dummy text of the printing </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  )
}
