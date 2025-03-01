"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import { useState } from "react"
import { motion } from "framer-motion"
import Footer from "components/Footer/Footer"
import FAQsComponent from "components/CardComponent/faqs-component"
import HowItWorks from "components/CardComponent/how-it-works"
import TestimonialSection from "components/CardComponent/testimonials-section"
import Slider from "components/CardComponent/slider"
import FeaturesDonors from "components/CardComponent/features-donors"

export default function Dashboard() {
  return (
    <section className="   h-full w-full">
      <div className="   max-sm:w-full">
        <DashboardNav />
        <div className=" paddings  mt-32 flex  h-auto w-full justify-between">
          <div className="  flex w-full items-start  gap-4  max-md:flex-col  max-md:px-0 xl:gap-24 ">
            <div className=" flex w-full flex-col items-start justify-center  gap-4      ">
              <div className="card flex items-center gap-2 rounded-full px-[20px] py-2">
                <img src="/chats transparent 1.png" alt="" className="w-7" />
                <p className="text-sm">Donor</p>
              </div>
              <motion.h2
                className="     text-4xl font-medium max-sm:text-3xl md:leading-[50px]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                Empower Change with Your Contributions: <span className="text-[#05F29A]">Donate</span> Seamlessly to
                Campaigns That Matter
              </motion.h2>

              <motion.p
                className="paragraph mt-2  text-base font-normal"
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
            <div className="donorImage absolute right-0 top-36 flex h-[628px] w-2/3 justify-center max-sm:hidden"></div>
            <img src="/donors/Graphite.png" alt="" className=" z-10 w-[722px]" />
          </div>
        </div>
        <Slider />

        <FeaturesDonors />

        <HowItWorks />
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
