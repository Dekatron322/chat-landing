import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"

const AboutComponent = () => {
  return (
    <div className="paddings my-10 grid w-full grid-cols-3 justify-between gap-10">
      <motion.div
        className="our-mission-img group relative flex h-[529px] w-full flex-col items-center justify-between rounded-[20px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/001.jpeg")' }}
        whileHover="hover" // Trigger animation on container hover
        initial="initial" // Initial state
      >
        {/* Overlay */}
        <div className="absolute inset-0 rounded-[20px] bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-between p-8 text-white">
          {/* Title Container */}
          <div className="title-container rounded-full bg-[#ffffff] px-5 py-[10px] text-[#7D7D7D] transition-all duration-300 ease-in-out group-hover:bg-[#151E22] group-hover:text-[#05F29A]">
            <p className="text-sm">Our Mission Statement</p>
          </div>

          {/* Description */}
          <motion.p
            className="mt-4 w-[336px] text-center text-lg"
            variants={{
              initial: { y: 0 }, // Initial position
              hover: { y: -10 }, // Move up by 20px on container hover
            }}
            transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
          >
            To revolutionize humanitarian aid by providing a transparent, efficient platform that empowers donors, NGOs,
            and beneficiaries for impactful change
          </motion.p>

          {/* Hover-Only Section with Framer Motion Slide-Up Animation */}
          <motion.div
            className="flex flex-col items-center gap-3"
            variants={{
              initial: { opacity: 0, y: 50 }, // Hidden initially, positioned 50px below
              hover: { opacity: 1, y: 0 }, // Slide up and fade in on container hover
            }}
            transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
          >
            <img src="/Union.png" alt="" className="h-14 w-[31px]" />
            <Link className="text-[#05F29A] underline" href="">
              Get Started
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="our-mission-img group relative flex h-[529px] w-full flex-col items-center justify-between rounded-[20px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/002.jpeg")' }}
        whileHover="hover" // Trigger animation on container hover
        initial="initial" // Initial state
      >
        {/* Overlay */}
        <div className="absolute inset-0 rounded-[20px] bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-between p-8 text-white">
          {/* Title Container */}
          <div className="title-container rounded-full bg-[#ffffff] px-5 py-[10px] text-[#7D7D7D] transition-all duration-300 ease-in-out group-hover:bg-[#151E22] group-hover:text-[#05F29A]">
            <p className="text-sm">Our Core Value</p>
          </div>

          {/* Description */}
          <motion.p
            className="mt-4 w-[336px] text-center text-lg"
            variants={{
              initial: { y: 0 }, // Initial position
              hover: { y: -10 }, // Move up by 20px on container hover
            }}
            transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
          >
            Transparency, innovation, trust, empowerment, and impact guide everything we do, ensuring effective and
            accountable aid distribution
          </motion.p>

          {/* Hover-Only Section with Framer Motion Slide-Up Animation */}
          <motion.div
            className="flex flex-col items-center gap-3"
            variants={{
              initial: { opacity: 0, y: 50 }, // Hidden initially, positioned 50px below
              hover: { opacity: 1, y: 0 }, // Slide up and fade in on container hover
            }}
            transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
          >
            <img src="/Union.png" alt="" className="h-14 w-[31px]" />
            <Link className="text-[#05F29A] underline" href="">
              Get Started
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="our-mission-img group relative flex h-[529px] w-full flex-col items-center justify-between rounded-[20px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/003.jpeg")' }}
        whileHover="hover" // Trigger animation on container hover
        initial="initial" // Initial state
      >
        {/* Overlay */}
        <div className="absolute inset-0 rounded-[20px] bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-between p-8 text-white">
          {/* Title Container */}
          <div className="title-container rounded-full bg-[#ffffff] px-5 py-[10px] text-[#7D7D7D] transition-all duration-300 ease-in-out group-hover:bg-[#151E22] group-hover:text-[#05F29A]">
            <p className="text-sm">Our Vision For The Future</p>
          </div>

          {/* Description */}
          <motion.p
            className="mt-4 w-[336px] text-center text-lg"
            variants={{
              initial: { y: 0 }, // Initial position
              hover: { y: -10 }, // Move up by 20px on container hover
            }}
            transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
          >
            We aim to expand globally, leveraging technology to enhance transparency, scalability, and efficiency in aid
            distribution
          </motion.p>

          {/* Hover-Only Section with Framer Motion Slide-Up Animation */}
          <motion.div
            className="flex flex-col items-center gap-3"
            variants={{
              initial: { opacity: 0, y: 50 }, // Hidden initially, positioned 50px below
              hover: { opacity: 1, y: 0 }, // Slide up and fade in on container hover
            }}
            transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
          >
            <img src="/Union.png" alt="" className="h-14 w-[31px]" />
            <Link className="text-[#05F29A] underline" href="">
              Get Started
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutComponent
