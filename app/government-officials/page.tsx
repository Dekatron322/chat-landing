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
import HowItWorks from "components/CardComponent/how-it-works"
import TestimonialSection from "components/CardComponent/testimonials-section"
import Slider from "components/CardComponent/slider"
import FeaturesDonors from "components/CardComponent/features-donors"
import Image from "next/image"
import AllInOne from "components/CardComponent/all-in-one"
import WhyChats from "components/CardComponent/why-chats"

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
      <div className="   max-sm:w-full ">
        <DashboardNav />
        <div className="paddings mt-24 flex h-auto w-full justify-between max-sm:mb-10 xl:mt-32">
          <div className="flex w-full max-md:flex-col max-md:px-0 max-sm:gap-4 md:mb-16 xl:gap-24">
            <div className="flex w-full flex-col items-start justify-center gap-4">
              <div className="card flex items-center gap-2 rounded-full px-[20px] py-2">
                <img src="/chats transparent 1.png" alt="" className="w-7" />
                <p className="text-sm">Government agencies</p>
              </div>
              <motion.h2
                className="max-w-[703px] text-4xl font-medium max-sm:text-3xl md:leading-[50px]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                Take Control of Aid Delivery: Streamline <span className="text-[#05F29A]">Disbursement</span> & Track
                Impact
              </motion.h2>

              <motion.p
                className="paragraph mt-2 max-w-[583px] text-base font-normal"
                transition={{ ease: "easeIn", duration: 2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Support causes that align with your values through a platform built for transparency and impact. Whether
                you choose to donate publicly or anonymously, the donor dashboard gives you full control, real-time
                updates, and detailed insights into how your contributions are making a difference
              </motion.p>

              <button className="slide-button relative mt-4 flex overflow-hidden rounded-full border px-5 py-2 text-sm">
                <div className="btn-img-element absolute bottom-0 left-0"></div>
                <div className="btn-img-element-one absolute bottom-2 right-2"></div>
                Signup
              </button>
            </div>

            {/* Wrapper for the image and overlay */}
            <div className="relative">
              {/* Overlay Image */}
              <div className="absolute right-52 top-[50%] z-10 h-[50%] w-full max-sm:hidden">
                <Image
                  src="/gov/image 47.png" // Replace with your overlay image path
                  alt="Overlay"
                  height={221} // 50% of the original image height
                  width={445} // Same as the original image width
                  className="object-cover"
                />
              </div>

              {/* Overlay Image - Positioned at the bottom on mobile */}
              <div className="absolute bottom-[-60px] left-10 z-10 w-[80%] max-md:right-auto max-md:top-auto max-md:h-[30%] xl:hidden">
                <Image
                  src="/gov/image 47.png" // Replace with your overlay image path
                  alt="Overlay"
                  height={221} // 50% of the original image height
                  width={445} // Same as the original image width
                  className="object-cover"
                />
              </div>

              <div className="absolute right-14 top-0 z-10 h-[50%] w-full xl:top-[10%]">
                <Image
                  src="/gov/Vector.png" // Replace with your overlay image path
                  alt="Overlay"
                  height={109.17} // 50% of the original image height
                  width={111} // Same as the original image width
                  className="object-cover"
                />
              </div>

              {/* Original Image */}
              <Image src="/gov/Frame 1618874207.png" alt="" height={442} width={600} />
            </div>
          </div>
        </div>
        <Slider />
        <AllInOne />
        <WhyChats />
        <TestimonialSection />
        <section className="primary-100 relative h-[117px]">
          <div className="img-element absolute bottom-0 left-10"></div>
          <div className="img-element-two absolute bottom-0 right-10"></div>
          <div className="flex h-full items-center xl:px-96">
            <p className="animate-text text-[32px] font-medium max-sm:hidden">
              Driving Aid with Innovation and Transparency
            </p>
            <div className="car-img flex h-[117px] w-full items-center "></div>
          </div>
        </section>

        <FAQsComponent />
      </div>
      <Footer />
    </section>
  )
}
