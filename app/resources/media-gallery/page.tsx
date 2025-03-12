"use client"
import { useTheme } from "next-themes"
import Footer from "components/Footer/Footer"
import DashboardNav from "components/Navbar/DashboardNav"
import { motion } from "framer-motion"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import MobileNav from "components/Navbar/MobileNav"

const blogEntries = [
  {
    img: "/resources/Frame 1618874266.webp",
    title: "Fresh Perspectives: Explore The Latest In Aid Innovation With CHATS...",
    date: "December 27, 2024",
    readTime: "21 mins read",
    tags: ["Blog"],
  },
  {
    img: "/resources/Frame 1618874266 (1).webp",
    title: "Dive Into The Data: Key Trends Shaping Humanitarian Aid",
    date: "December 27, 2024",
    readTime: "21 mins read",
    tags: ["Insight Reports"],
  },
  {
    img: "/resources/Frame 1618874266 (2).webp",
    title: "Explore Our Visual Stories And Moments",
    date: "December 27, 2024",
    readTime: "21 mins read",
    tags: ["Media Gallery"],
  },
  {
    img: "/resources/Frame 1618874266 (3).webp",
    title: "The CHATS Brand Kit Is Your Go-To Resource",
    date: "December 27, 2024",
    readTime: "21 mins read",
    tags: ["Brand Kit"],
  },
]
const MediaGallery = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const isDarkMode = theme === "dark"
  const [activeTab, setActiveTab] = useState("All")

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

  const filteredEntries =
    activeTab === "All" ? blogEntries : blogEntries.filter((entry) => entry.tags.includes(activeTab))

  // Animation variants for the grid container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between children animations
      },
    },
  }

  // Animation variants for each grid item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  // Animation variants for the grid container

  return (
    <div>
      <DashboardNav />
      <MobileNav />
      <div className="paddings xl:mt-32">
        <div className="xl:px-40">
          {/* Animated Grid */}
          <div className="w-full">
            <ul className="mb-[23px] flex gap-2">
              <li>Blog</li>
              <li className="list-inside list-disc">Published November 28, 2024</li>
              <li className="list-inside list-disc">
                <span className="primary-text-900">15 min read</span>
              </li>
            </ul>
            <h2 className="mb-5 text-3xl xl:w-[476px]">Explore Our Visual Stories and Moments</h2>

            <div className="content-section">
              <p className="paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen
              </p>
            </div>
          </div>
          <motion.div
            className=" mb-6 grid w-full grid-cols-3  justify-start gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="primary-900  flex flex-col gap-4 overflow-hidden " variants={itemVariants}>
              <img src="/media/Frame 1618874303 (1).png" alt="" className="rounded-[10px]" />
              <img src="/media/Frame 1618874303 (1).png" alt="" className="rounded-[10px]" />
            </motion.div>
            <motion.div className="primary-900  flex flex-col gap-4 overflow-hidden " variants={itemVariants}>
              <img src="/media/Frame 1618874304.png" alt="" className="h-full rounded-[10px]" />
            </motion.div>
            <motion.div className="primary-900  flex flex-col gap-4 overflow-hidden " variants={itemVariants}>
              <img src="/media/Frame 1618874303 (1).png" alt="" className="rounded-[10px]" />
              <img src="/media/Frame 1618874303 (1).png" alt="" className="rounded-[10px]" />
            </motion.div>
            <motion.div className="primary-900  flex flex-col gap-4 overflow-hidden " variants={itemVariants}>
              <img src="/media/Frame 1618874303 (1).png" alt="" className="rounded-[10px]" />
              <img src="/media/Frame 1618874303 (1).png" alt="" className="rounded-[10px]" />
            </motion.div>
            <motion.div className="primary-900  flex flex-col gap-4 overflow-hidden " variants={itemVariants}>
              <img src="/media/Frame 1618874304.png" alt="" className="h-full rounded-[10px]" />
            </motion.div>
            <motion.div className="primary-900  flex flex-col gap-4 overflow-hidden " variants={itemVariants}>
              <img src="/media/Frame 1618874303 (1).png" alt="" className="rounded-[10px]" />
              <img src="/media/Frame 1618874303 (1).png" alt="" className="rounded-[10px]" />
            </motion.div>
          </motion.div>
          <div className="content-section">
            <p className="paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen
            </p>
          </div>

          <div className="border-color-100 mb-10 flex w-full items-center justify-between border-b border-t py-3">
            <div className="flex items-center">
              <Image src="/resources/Frame 1618874298.png" width={57} height={57} alt="" />
              <div>
                <p>Chats Team</p>
                <ul className="flex gap-2 text-xs">
                  <li className="">December 27, 2024 </li>
                  <li className="list-inside list-disc">
                    <span className="primary-text-900">15 min read</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <img src="/resources/skill-icons_instagram.png" alt="" className="h-6 w-6" />
              <img src="/resources/devicon_linkedin.png" alt="" className="h-6 w-6" />
              <img src="/resources/prime_twitter.png" alt="" className="h-6 w-6" />
              <img src="/resources/link-2.png" alt="" className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="">
          <h2 className="mb-10 text-4xl">Read More</h2>
          {/* Animated Grid */}
          <motion.div
            className="grid w-full xl:mt-16 xl:grid-cols-3 xl:gap-11"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredEntries.map((entry, index) => (
              <motion.div
                key={index}
                className="primary-900 mb-6 overflow-hidden rounded-[10px]"
                variants={itemVariants}
              >
                <img src={entry.img} alt={entry.title} />
                <div className="p-6">
                  <p className="uppercase text-[#05F29A]">{entry.tags}</p>
                  <h3 className="mt-2 text-xl font-medium">{entry.title}</h3>
                  <div className="mt-10">
                    <p>Chats Team</p>
                    <p className="paragraph text-sm">
                      {entry.date} • {entry.readTime}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="primary-100 gridBackground  flex h-[371px] w-full flex-col items-center justify-center gap-4 rounded-[20px]">
          <Image src="/Frame 1618874069.png" alt=" " width={162.76} height={69} />

          <p className="faq-text-header text-xl">Still have questions?</p>
          <p className="faq-text-paragraph max-w-[598px] px-4 text-center">
            Didn&lsquo;t find what you were looking for? Our team is here to help. Reach out to us with your questions
            or concerns, and we&lsquo;ll get back to you promptly
          </p>
          <button className="faq-border rounded-md border px-5 py-2 text-sm">Get in touch</button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MediaGallery
