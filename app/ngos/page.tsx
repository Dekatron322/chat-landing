"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Footer from "components/Footer/Footer"
import FAQsComponent from "components/CardComponent/faqs-component"
import Features from "components/CardComponent/features"
import Seamless from "components/CardComponent/seamless"
import HowItWorks from "components/CardComponent/how-it-works"

import TestimonialSection from "components/CardComponent/testimonials-section"
import { useTheme } from "next-themes"

export default function Dashboard() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDarkMode = theme === "dark"

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (systemTheme && !mounted) {
      setTheme(systemTheme)
    }
  }, [systemTheme, setTheme, mounted])

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
      <div className="   max-sm:w-full">
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
                Testimonials Showcasing Trust
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

        <section className="primary-500 relative flex w-full items-center xl:h-[191px]">
          <div className="img-element-twenty absolute bottom-0 left-10 max-sm:hidden"></div>

          <div className="flex h-full w-full items-center justify-between max-sm:flex-col max-sm:p-4 xl:px-64">
            <div>
              <p className=" text-2xl font-bold max-sm:text-lg">
                Total Number of <span className="text-[#05F29A]">campaigns</span> managed:
              </p>
              <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            {isDarkMode ? (
              <img src="/Component 241.png" alt="" className="mt-4 xl:hidden" />
            ) : (
              <img src="/Component 192.png" alt="" className="mt-4 xl:hidden" />
            )}

            <div className="img-element-twenty-one max-sm:hidden"></div>
          </div>
        </section>
        <Features />
        <Seamless />
        <HowItWorks />
        <TestimonialSection />

        <section className="primary-100 relative h-[117px]">
          <div className="img-element absolute bottom-0 left-10"></div>
          <div className="img-element-two absolute bottom-0 right-10"></div>
          <div className="xl;px-96 flex h-full items-center">
            <p className="animate-text text-[32px] font-medium max-sm:hidden">
              Driving Aid with Innovation and Transparency
            </p>
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
