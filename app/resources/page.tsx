"use client"

import DashboardNav from "components/Navbar/DashboardNav"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion" // Import framer-motion

const blogEntries = [
  {
    img: "/resources/Frame 1618874266.png",
    title: "Fresh Perspectives: Explore The Latest In Aid Innovation With CHATS...",
    date: "December 27, 2024",
    readTime: "21 mins read",
    tags: ["Blog"],
  },
  {
    img: "/resources/Frame 1618874266 (1).png",
    title: "Dive Into The Data: Key Trends Shaping Humanitarian Aid",
    date: "December 27, 2024",
    readTime: "21 mins read",
    tags: ["Insight Reports"],
  },
  {
    img: "/resources/Frame 1618874266 (2).png",
    title: "Explore Our Visual Stories And Moments",
    date: "December 27, 2024",
    readTime: "21 mins read",
    tags: ["Media Gallery"],
  },
  {
    img: "/resources/Frame 1618874266 (3).png",
    title: "The CHATS Brand Kit Is Your Go-To Resource",
    date: "December 27, 2024",
    readTime: "21 mins read",
    tags: ["Brand Kit"],
  },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Blog") // Set "Blog" as the default tab

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

  return (
    <section className="h-full w-full">
      <div className="max-sm:w-full max-sm:p-4">
        <DashboardNav />
        <div className="paddings mt-32 flex h-auto w-full">
          <div className="primary-400 relative flex h-[408px] w-full overflow-hidden rounded-[15px] p-6">
            <div className="img-element-thirty-one absolute left-0 top-0"></div>

            <div className="flex w-full py-10">
              <div className="w-[40%]"></div>
              <div className="flex max-w-[704px] flex-col items-start gap-2 pl-20">
                <ul className="flex gap-2">
                  <li>Blog</li>
                  <li className="list-inside list-disc">Published November 28, 2024</li>
                  <li className="list-inside list-disc">
                    <span className="primary-text-900">15 min read</span>
                  </li>
                </ul>
                <h2 className="text-start text-[32px] font-medium">
                  How CHATS is Revolutionizing Aid Distribution for Greater Impact
                </h2>
                <p className="paragraph">
                  In today’s fast-paced world, ensuring aid reaches those in need efficiently, transparently, and
                  securely is more important than ever. CHATS, a cutting-edge platform designed for seamless cash and
                  voucher aid distribution........
                </p>

                <button className="slide-button relative mt-2 flex overflow-hidden rounded-full border px-5 py-2 text-sm">
                  <div className="btn-img-element absolute bottom-0 left-0"></div>
                  <div className="btn-img-element-one absolute bottom-2 right-2"></div>
                  Continue Reading
                </button>
              </div>
            </div>
          </div>
        </div>
        <section className="primary-100 relative mt-10 h-[117px]">
          <div className="img-element absolute bottom-0 left-10"></div>
          <div className="img-element-two absolute bottom-0 right-10"></div>
          <div className="flex h-full items-center px-96">
            <p className="animate-text text-[32px] font-medium">Driving Aid with Innovation and Transparency</p>
            <div className="car-img flex h-[117px] w-full items-center"></div>
          </div>
        </section>

        <div className="paddings">
          <h2 className="text-4xl">Recent Articles</h2>

          <div className="mt-6 flex gap-2">
            <div
              className={`cursor-pointer rounded-full px-5 py-2 ${
                activeTab === "All" ? "bg-[#05F29A] text-[#151E22]" : "border-color border"
              }`}
              onClick={() => setActiveTab("All")}
            >
              All
            </div>
            <div
              className={`cursor-pointer rounded-full border border-[#FFFFFF80] px-5 py-2 ${
                activeTab === "Blog" ? "bg-[#05F29A] text-[#151E22]" : "border-color border"
              }`}
              onClick={() => setActiveTab("Blog")}
            >
              Blog
            </div>
            <div
              className={`cursor-pointer rounded-full border border-[#FFFFFF80] px-5 py-2 ${
                activeTab === "Insight Reports" ? "bg-[#05F29A] text-[#151E22]" : "border-color border"
              }`}
              onClick={() => setActiveTab("Insight Reports")}
            >
              Insight Reports
            </div>
            <div
              className={`cursor-pointer rounded-full border border-[#FFFFFF80] px-5 py-2 ${
                activeTab === "Media Gallery" ? "bg-[#05F29A] text-[#151E22]" : "border-color border"
              }`}
              onClick={() => setActiveTab("Media Gallery")}
            >
              Media Gallery
            </div>
            <div
              className={`cursor-pointer rounded-full border border-[#FFFFFF80] px-5 py-2 ${
                activeTab === "Brand Kit" ? "bg-[#05F29A] text-[#151E22]" : "border-color border"
              }`}
              onClick={() => setActiveTab("Brand Kit")}
            >
              Brand Kit
            </div>
          </div>

          {/* Animated Grid */}
          <motion.div
            className="mt-16 grid w-full grid-cols-3 gap-11"
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
      </div>
    </section>
  )
}
