"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import { motion } from "framer-motion"
import CardComponent from "components/CardComponent/card-component"
import HowBeneficiariesCanRecieve from "components/CardComponent/how-beneficiaries-can-recieve"
import Footer from "components/Footer/Footer"
import OurStory from "components/CardComponent/our-story"
import FAQsComponent from "components/CardComponent/faqs-component"
import AboutComponent from "components/CardComponent/about-component"
import GlobeAnimation from "components/globeAnimation"
import MobileNav from "components/Navbar/MobileNav"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import CarAnimation from "components/CardComponent/carAnimation"
import ChangingLives from "components/CardComponent/changing-lives"
import Link from "next/link"

export default function Dashboard() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const isDarkMode = theme === "dark"

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (systemTheme && !mounted) {
      setTheme(systemTheme)
    }
  }, [systemTheme, setTheme, mounted])

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }
  return (
    <section className="h-full w-full">
      <div className="max-sm:w-full">
        <DashboardNav />
        <MobileNav />

        <div className="backgroundImage mt-16  flex h-auto w-full ">
          <div className=" paddings   w-full gap-6 max-md:flex-col max-md:px-0 md:mb-16">
            <div className="mt-14 flex w-full flex-col items-center justify-center gap-3   max-sm:mt-10   ">
              <div className="card flex items-center gap-2 rounded-full px-2 py-2 xl:px-[20px]">
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
                className="paragraph mt-2 text-center text-base font-normal max-sm:px-4 xl:max-w-[592px]"
                transition={{ ease: "easeIn", duration: 2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                CHATS transforms the future of humanitarian efforts with verifiable solutions for cash and voucher aid.
                Our platform enhances donor confidence and enables NGOs to deliver impactful, transparent campaign
              </motion.p>

              <Link
                href="https://calendly.com/convexitytech/chats"
                target="_blank"
                className="slide-button relative my-4 flex overflow-hidden rounded-full border px-5 py-2 text-sm"
              >
                <div className="btn-img-element absolute bottom-0 left-0"></div>
                <div className="btn-img-element-one absolute bottom-2 right-2"></div>
                Get Started
              </Link>

              <GlobeAnimation />
            </div>
          </div>
        </div>
        <section className="section-1 px-4">
          <div className="my-6 flex w-full justify-between gap-7 max-xl:flex-col">
            {/* Card Content */}
            <div className="card-lg flex flex-col gap-7 p-4 xl:p-7 2xl:w-1/2">
              <div className="flex w-full items-start justify-between gap-3 max-2xl:flex-col max-xl:flex-col">
                <div className="dark-green-bg flex items-center gap-2 rounded-full px-4 py-2">
                  <img src="/chats transparent 1.png" alt="" className="w-7" />
                  <p className="text-sm">About Us</p>
                </div>
                <div className="grey-400 flex items-center gap-2 rounded-full px-4 py-2">
                  <p className="text-sm">Transforming Aid Distribution with Trust and Innovation</p>
                </div>
              </div>
              <p className="paragraph-1 text-base max-xl:text-sm max-sm:leading-7 lg:leading-7 2xl:leading-[35px]">
                CHATS is a purpose-driven platform designed to simplify and enhance aid distribution for humanitarian
                organizations, donors, and beneficiaries. By combining cutting-edge technology with a commitment to
                transparency, we ensure that every donation is impactful and verifiable. Our ecosystem offers flexible
                disbursement methods, real-time reporting, and privacy-preserving tools, enabling NGOs and donors to
                collaborate seamlessly. At CHATS, we’re not just distributing aid; we’re building confidence, fostering
                trust, and driving meaningful change in communities worldwide
              </p>
              <div>
                <Link
                  href="https://calendly.com/convexitytech/chats"
                  target="_blank"
                  className="slide-button relative flex overflow-hidden rounded-full border px-5 py-2 text-sm"
                >
                  <div className="btn-img-element absolute bottom-0 left-0"></div>
                  <div className="btn-img-element-one absolute bottom-2 right-2"></div>
                  Get Started
                </Link>
              </div>
            </div>

            {/* Image */}
            <img src="/Frame 1618873303.svg" className="flex h-full " alt="" />
          </div>
        </section>
        {isDarkMode ? (
          <img src="/MacBook Pro 14_ - 7 (5).webp" className="flex " />
        ) : (
          <img src="/Frame 1618874455.webp" className="flex " alt="" />
        )}

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

              <div className="mt-6 grid w-full gap-7 xl:grid-cols-2">
                <div className="card-lg flex flex-col justify-between p-7 xl:h-[328px]">
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
                <div className="card-lg card-bg relative flex  flex-col justify-between p-7 max-xl:h-[328px] max-xs:h-auto md:h-[328px]">
                  {/* Top Section */}
                  <div className="flex w-full justify-between gap-3">
                    <div className="dark-green-bg flex items-center gap-2 rounded-full px-4 py-2">
                      <img src="/chats transparent 1.png" alt="" className="w-7" />
                      <p className="text-sm">Location Covered</p>
                    </div>
                  </div>

                  {/* Images at Different Positions */}
                  <div className="absolute right-32 top-20 max-sm:right-6">
                    <img src="/Frame 1618873317.png" alt="" className="h-[34px] max-sm:h-5" />
                  </div>
                  <div className="absolute left-32 top-1/2 -translate-x-1/2 -translate-y-1/2 transform max-sm:bottom-4 max-sm:left-14">
                    <img src="/Frame 1618873318.png" alt="" className="h-[34px] max-sm:h-5" />
                  </div>
                  <div className="absolute bottom-10   right-1/3 xl:bottom-20">
                    <img src="/Frame 1618873316.png" alt="" className="h-[34px] max-sm:h-5" />
                  </div>

                  {/* Bottom Section */}
                  <div className="mt-4">
                    <p className="paragraph-1 text-base leading-[35px]">
                      Millions of lives improved through efficient aid distribution.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-lg mt-7 w-full items-center justify-between max-xl:p-7 xl:flex  xl:h-[397px]  xl:gap-10   xl:p-7">
                <div>
                  <div className="flex w-full  gap-3">
                    <div className="dark-green-bg flex items-center gap-2 rounded-full px-4 py-2">
                      <img src="/chats transparent 1.png" alt="" className="w-7" />
                      <p className="text-sm">Funds Disbursed</p>
                    </div>
                  </div>

                  {/* Add margin-top to create space */}
                  <div className="mt-4 max-sm:my-2">
                    <p className="paragraph-1 text-2xl leading-[35px] max-sm:text-xl">
                      Ensuring every dollar makes a measurable impact
                    </p>
                  </div>
                </div>
                <div className="image-container w-full max-sm:hidden"></div>
                {isDarkMode ? (
                  <img src="/Frame 1618873977 (2).png" alt="" className="sm:hidden " />
                ) : (
                  <img src="/Frame 1618873977 (1) copy.svg" alt="" className="sm:hidden" />
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="paddings my-10 flex w-full">
          <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-lg max-sm:mt-10">
            <div className=" w-full" style={{ aspectRatio: "16/6" }}>
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/c38lplJETZw?si=VhMOo1sImsX6JRzc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <CarAnimation />
        <CardComponent />

        <HowBeneficiariesCanRecieve />
        <ChangingLives />
        <OurStory />
        <FAQsComponent />
      </div>
      <Footer />
    </section>
  )
}
