import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const Glossary = () => {
  const [selectedLetter, setSelectedLetter] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  const glossaryItems = [
    {
      title: "Aid Distribution",
      description: "The process of delivering cash, vouchers, or other forms of assistance to beneficiaries in need.",
    },
    {
      title: "Anonymous Donation",
      description:
        "A donation made without revealing the identity of the donor, allowing private contributions to campaigns.",
    },
    {
      title: "Budget Management",
      description: "The process of planning, monitoring, and controlling financial resources for campaigns.",
    },
    {
      title: "Allocation",
      description: "The designated distribution of funds or resources for a specific campaign or purpose.",
    },
    {
      title: "Blockchain Integration",
      description:
        "The use of blockchain technology for secure and transparent tracking of donations and disbursements.",
    },
    {
      title: "Cryptocurrency Donation",
      description:
        "An option for donors to contribute funds using digital currencies, offering flexibility and global reach.",
    },
    {
      title: "Balance Overview",
      description: "A summary of remaining funds for a specific campaign or vendor, accessible in real time.",
    },
    {
      title: "Campaign Dashboard",
      description: "A centralized platform where NGOs and donors manage, monitor, and update their aid campaigns.",
    },
    {
      title: "Automated Reporting",
      description:
        "The generation of real-time or scheduled reports on campaign progress, donations, and disbursement outcomes.",
    },
  ]

  const filteredItems =
    selectedLetter === "All" ? glossaryItems : glossaryItems.filter((item) => item.title.startsWith(selectedLetter))

  // Pagination logic
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

  const handlePageChange = (page: any) => {
    setCurrentPage(page)
  }

  return (
    <div className="paddings mb-16 w-full px-16">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-3xl">CHATS Glossary</h2>
        <p className="paragraph max-w-[391px] text-center">
          Our glossary provides clear definitions of key terms and concepts used across CHATS.
        </p>
      </div>

      <div className="paragraph border-color-100 mt-20 flex w-full justify-between border-b pb-2">
        <motion.div
          className={`flex w-[40px] cursor-pointer items-center justify-center rounded-md ${
            selectedLetter === "All" ? "bg-[#151E22] text-[#05F29A]" : "bg-gray-200"
          }`}
          onClick={() => {
            setSelectedLetter("All")
            setCurrentPage(1) // Reset to the first page when "All" is selected
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          All
        </motion.div>
        {" | "}
        {[
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ].map((letter) => (
          <motion.div
            key={letter}
            className={`cursor-pointer ${selectedLetter === letter ? "text-[#05F29A]" : ""}`}
            onClick={() => {
              setSelectedLetter(letter)
              setCurrentPage(1) // Reset to the first page when a letter is selected
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {letter}
          </motion.div>
        ))}
      </div>

      <div className="terms mt-20 grid w-full grid-cols-3 gap-10">
        <AnimatePresence>
          {paginatedItems.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="border-color-100 flex h-[216px] flex-col gap-6 rounded-[10px] border p-6"
            >
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="paragraph">{item.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      <div className="mt-10 flex justify-end gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <motion.button
            key={index + 1}
            className={`flex h-[32px] w-[32px] items-center justify-center rounded-xl ${
              currentPage === index + 1 ? "bg-[#151E22] text-[#05F29A]" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {index + 1}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default Glossary
