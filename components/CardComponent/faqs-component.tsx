import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import React, { useState } from "react"
import { CgChevronDown } from "react-icons/cg"

const FAQsComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "What is CHATS, and how does it work",
      answer:
        "Lörem ipsum viagra benar nere däkygon heteromäsamma test pseudonar i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i ",
    },
    {
      question: "Who can use CHATS?",
      answer:
        "Lörem ipsum viagra benar nere däkygon heteromäsamma test pseudonar i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i ",
    },
    {
      question: "How secure is CHATS?",
      answer:
        "Lörem ipsum viagra benar nere däkygon heteromäsamma test pseudonar i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i ",
    },
    {
      question: "What disbursement options does CHATS offer?",
      answer:
        "Lörem ipsum viagra benar nere däkygon heteromäsamma test pseudonar i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i ",
    },
    {
      question: "How can I get started with CHATS?",
      answer:
        "Lörem ipsum viagra benar nere däkygon heteromäsamma test pseudonar i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i ",
    },
    {
      question: "Can donors track how their funds are used?",
      answer:
        "Lörem ipsum viagra benar nere däkygon heteromäsamma test pseudonar i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i ",
    },
    {
      question: "What regions does CHATS currently serve?",
      answer:
        "Lörem ipsum viagra benar nere däkygon heteromäsamma test pseudonar i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i någonstansare  feledes av dinas fett. i ",
    },
  ]

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="relative flex w-full max-sm:px-4">
      <div className="img-element-nineteen absolute left-[-123.21px] top-[175px]"></div>
      <div className="paddings w-full gap-6 max-md:flex-col max-md:px-0 md:mb-16">
        <div className="mt-14 flex w-full flex-col items-center justify-center gap-6 max-sm:mt-10">
          <div className="card flex items-center gap-2 rounded-full px-[20px] py-2">
            <Image width={28} height={28} src="/chats transparent 1.png" alt="" />
            <p className="text-sm"> FAQs</p>
          </div>
          <motion.h2
            className="h-full max-w-[558px] text-center text-[40px] font-medium max-sm:text-3xl md:leading-[32.4px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="paragraph max-w-[662px] max-sm:text-center">
            Have questions about CHATS? We’ve got you covered. Browse our frequently asked questions to find quick,
            clear answers about our platform, processes, and how you can get involved.
          </p>

          <div className="mt-8 w-full max-w-[809px]">
            {faqs.map((faq, index) => (
              <div key={index} className="hero-container mb-4 rounded-lg">
                <motion.div
                  className="cursor-pointer  p-4 "
                  onClick={() => toggleAccordion(index)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    <motion.span animate={{ rotate: activeIndex === index ? -180 : 0 }} transition={{ duration: 0.3 }}>
                      <CgChevronDown className="text-2xl" />
                    </motion.span>
                  </div>
                </motion.div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-grey-600 px-4 pb-4">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="primary-100 gridBackground  flex h-[371px] w-full flex-col items-center justify-center gap-4 rounded-[20px]">
            <Image src="/Frame 1618874069.png" alt=" " width={162.76} height={69} />
            <p className="faq-text-header text-xl">Still have questions?</p>
            <p className="faq-text-paragraph max-w-[598px] text-center max-sm:px-4">
              Didn&lsquo;t find what you were looking for? Our team is here to help. Reach out to us with your questions
              or concerns, and we&lsquo;ll get back to you promptly
            </p>
            <button className="faq-border rounded-md border px-5 py-2 text-sm">Get in touch</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQsComponent
