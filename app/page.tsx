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
import GlobeAnimation from "components/globeAnimation"
import Flow from "components/flow"

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
        <div className="backgroundImage mt-16  flex h-auto w-full ">
          <div className=" paddings   w-full gap-6 max-md:flex-col max-md:px-0 md:mb-16">
            <div className="mt-14 flex w-full flex-col items-center justify-center gap-3   max-sm:mt-10   ">
              <div className="card flex items-center gap-2 rounded-full px-[20px] py-2">
                <img src="/chats transparent 1.png" alt="" className="w-7" />
                <p className="text-sm">Convexity Humanitarian Aid Transfer Solution</p>
              </div>
              <motion.h2
                className=" h-full  max-w-[913px] text-center text-[64px] font-medium max-sm:text-3xl md:leading-[80px]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                Transforming Aid <span className="text-[#05F29A]">Distribution</span> with Transparency and Trust
              </motion.h2>

              <motion.p
                className="paragraph mt-2 max-w-[592px] text-center text-base font-normal"
                transition={{ ease: "easeIn", duration: 2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                CHATS transforms the future of humanitarian efforts with verifiable solutions for cash and voucher aid.
                Our platform enhances donor confidence and enables NGOs to deliver impactful, transparent campaign
              </motion.p>

              <button className="slide-button relative my-4 flex overflow-hidden rounded-full border px-5 py-2 text-sm">
                <div className="btn-img-element absolute bottom-0 left-0"></div>
                <div className="btn-img-element-one absolute bottom-2 right-2"></div>
                Get Started
              </button>

              <GlobeAnimation />
            </div>
          </div>
        </div>
        <section className="section-1 ">
          <div className="my-6 flex w-full  justify-between gap-7 ">
            <div className="card-lg flex w-1/2 flex-col gap-7 p-7 ">
              <div className="flex w-full justify-between gap-3">
                <div className="dark-green-bg flex items-center gap-2 rounded-full  px-4  py-2">
                  <img src="/chats transparent 1.png" alt="" className="w-7" />
                  <p className="text-sm">About Us</p>
                </div>

                <div className="grey-400 flex items-center gap-2 rounded-full px-4  py-2">
                  <p className="text-sm">Transforming Aid Distribution with Trust and Innovation</p>
                </div>
              </div>
              <p className="paragraph-1 text-base leading-[35px]">
                CHATS is a purpose-driven platform designed to simplify and enhance aid distribution for humanitarian
                organizations, donors, and beneficiaries. By combining cutting-edge technology with a commitment to
                transparency, we ensure that every donation is impactful and verifiable. Our ecosystem offers flexible
                disbursement methods, real-time reporting, and privacy-preserving tools, enabling NGOs and donors to
                collaborate seamlessly. At CHATS, we’re not just distributing aid; we’re building confidence, fostering
                trust, and driving meaningful change in communities worldwide
              </p>
              <div>
                <button className="slide-button relative flex overflow-hidden rounded-full border px-5 py-2 text-sm">
                  <div className="btn-img-element absolute bottom-0 left-0"></div>
                  <div className="btn-img-element-one absolute bottom-2 right-2"></div>
                  Get Started
                </button>
              </div>
            </div>
            <img src="/Frame 1618873303.png" className=" w-1/2" alt="" />
          </div>
        </section>

        <div className="section-img  h-[664px]"></div>
        <AboutComponent />
        <section className="section-1  flex  w-full">
          <div className="mt-6   w-full gap-4 max-md:flex-col max-md:px-0 md:mb-16">
            <div className="flex w-full flex-col items-center justify-center   max-sm:mt-10   ">
              <motion.h2
                className=" h-full  max-w-[913px] text-center text-5xl font-medium max-sm:text-3xl "
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                Our Impact at a Glance
              </motion.h2>

              <motion.p
                className="paragraph mt-2 max-w-[380px] text-center text-base font-normal"
                transition={{ ease: "easeIn", duration: 2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                A quick overview of the measurable outcomes CHATS has achieved.
              </motion.p>

              <div className="mt-6 grid w-full grid-cols-2 gap-7">
                <div className="card-lg flex h-[328px] flex-col justify-between p-7">
                  <div className="flex w-full justify-between gap-3">
                    <div className="dark-green-bg flex items-center gap-2 rounded-full px-4 py-2">
                      <img src="/chats transparent 1.png" alt="" className="w-7" />
                      <p className="text-sm">Beneficiaries Served</p>
                    </div>
                  </div>

                  {/* Add margin-top to create space */}
                  <div className="mt-4">
                    <h2 className="text-[85px] font-bold max-sm:text-3xl">2,500,000+</h2>
                    <p className="paragraph-1 text-base leading-[35px]">
                      Millions of lives improved through efficient aid distribution.
                    </p>
                  </div>
                </div>
                <div className="card-lg card-bg relative flex h-[328px] flex-col justify-between p-7">
                  {/* Top Section */}
                  <div className="flex w-full justify-between gap-3">
                    <div className="dark-green-bg flex items-center gap-2 rounded-full px-4 py-2">
                      <img src="/chats transparent 1.png" alt="" className="w-7" />
                      <p className="text-sm">Location Covered</p>
                    </div>
                  </div>

                  {/* Images at Different Positions */}
                  <div className="absolute right-32 top-20">
                    <img src="/Frame 1618873317.png" alt="" className="h-[34px]" />
                  </div>
                  <div className="absolute left-32 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                    <img src="/Frame 1618873318.png" alt="" className="h-[34px]" />
                  </div>
                  <div className="absolute bottom-20 right-1/3">
                    <img src="/Frame 1618873316.png" alt="" className="h-[34px]" />
                  </div>

                  {/* Bottom Section */}
                  <div className="mt-4">
                    <p className="paragraph-1 text-base leading-[35px]">
                      Millions of lives improved through efficient aid distribution.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-lg mt-7  flex h-[397px] w-full items-center justify-between     p-7">
                <div>
                  <div className="flex w-full  gap-3">
                    <div className="dark-green-bg flex items-center gap-2 rounded-full px-4 py-2">
                      <img src="/chats transparent 1.png" alt="" className="w-7" />
                      <p className="text-sm">Funds Disbursed</p>
                    </div>
                  </div>

                  {/* Add margin-top to create space */}
                  <div className="mt-4">
                    <p className="paragraph-1  text-2xl leading-[35px]">
                      Ensuring every dollar makes a measurable impact
                    </p>
                  </div>
                </div>
                <div className="image-container w-full"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="paddings mb-10 flex  w-full">
          <div className="flex w-full flex-col items-center justify-center   max-sm:mt-10   ">
            <div className=" mt-10  ">
              <img src="/Frame 1618873988.png" alt="" />
            </div>
          </div>
        </section>

        <section className="primary-100 relative h-[117px]">
          <div className="img-element absolute bottom-0 left-10"></div>
          <div className="img-element-two absolute bottom-0 right-10"></div>
          <div className="flex items-center px-96">
            <Flow />
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
        </section>
        <OurStory />
        <FAQsComponent />
      </div>
      <Footer />
    </section>
  )
}
