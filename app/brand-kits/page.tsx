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
          <div className="primary-400  relative   flex h-[423px] w-full overflow-hidden rounded-[15px] p-6">
            <div className="img-element-twenty-six absolute bottom-10 left-0"></div>
            <div className="img-element-twenty-seven absolute bottom-10 right-0"></div>

            <div className="flex w-full items-center justify-between pl-80">
              <div className=" flex max-w-[834px] flex-col">
                <p className="text-start text-[32px] font-bold ">CHATS Brand Kit</p>
                <p className="paragraph">Published November 28, 2024</p>
                <p className="paragraph mt-4">
                  The CHATS Brand Kit is your go-to resource for maintaining a consistent and professional
                  representation of our platform. It includes our{" "}
                  <span className="primary-800 font-medium">
                    official logos, color palette, typography, and guidelines
                  </span>{" "}
                  for their use across various media. Whether you&apos;re creating presentations, social media posts, or
                  marketing materials, the Brand Kit ensures every touchpoint reflects the CHATS identity with clarity
                  and impact.
                </p>
                <button className="border-color-100 mt-4 max-w-[152px] rounded-md border px-5 py-2 text-sm">
                  Download All
                </button>
              </div>
            </div>
          </div>
        </div>
        <section className="paddings my-16 flex flex-col justify-center ">
          <div className="primary-100 gridBackground  flex h-[371px] w-full flex-col items-center justify-center gap-4 rounded-[20px]">
            <Image src="/Frame 1618874069.png" alt=" " width={162.76} height={69} />
            <p className="faq-text-header text-xl">Still have questions?</p>
            <p className="faq-text-paragraph max-w-[598px] text-center">
              Didn&lsquo;t find what you were looking for? Our team is here to help. Reach out to us with your questions
              or concerns, and we&lsquo;ll get back to you promptly
            </p>
            <button className="faq-border rounded-md border px-5 py-2 text-sm">Get in touch</button>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  )
}
