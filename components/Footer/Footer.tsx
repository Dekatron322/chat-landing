"use client"
import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <>
      <section id="contact" className="paddings footer-bg w-full max-sm:px-3 ">
        <div className="border-color-100 flex w-full border-b py-10">
          <div className=" flex w-full justify-between max-sm:grid">
            {/* Column 1 */}
            <div className="flex flex-col gap-3 max-sm:mb-7  xl:max-w-[361px]">
              <img src="/chats transparent 1 (1).png" alt="" className="h-[55px] w-[179.08px]" />
              <p className="paragraph">
                CHATS empowers humanitarian efforts with seamless, transparent, and secure cash and voucher aid
                distribution.
              </p>
              <p className="paragraph text-sm">Sign up to receive updates, stories, and news</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="placement"
                  placeholder="Email"
                  className="border-color rounded-md border bg-transparent p-2 text-sm outline-none focus:outline-none"
                  style={{ width: "100%" }}
                />
                <button className="primary-100 primary-text-200 flex items-center justify-center gap-2 rounded-lg px-4 text-sm font-normal uppercase max-sm:text-[10px]">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 max-sm:mb-7">
              <p className="font-bold xl:text-xl">Quick Link</p>
              <Link
                href="mailto:contact@smarthavensystems.com"
                className="text-sm transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
                Home
              </Link>
              <Link href="#" className="text-sm transition-all duration-300 ease-in-out hover:text-[#FF3B30]">
                Solutions
              </Link>
              <Link href="#" className="text-sm transition-all duration-300 ease-in-out hover:text-[#FF3B30]">
                FAQs
              </Link>
              <Link href="#" className="text-sm transition-all duration-300 ease-in-out hover:text-[#FF3B30]">
                Glossary
              </Link>
              <Link href="#" className="text-sm transition-all duration-300 ease-in-out hover:text-[#FF3B30]">
                Contact Us
              </Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 max-sm:mb-7">
              <p className="font-bold xl:text-xl">Resources</p>
              <Link
                href="mailto:contact@smarthavensystems.com"
                className="text-sm transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
                Insight Report
              </Link>
              <Link href="#" className="text-sm transition-all duration-300 ease-in-out hover:text-[#FF3B30]">
                Blog
              </Link>
              <Link href="#" className="text-sm transition-all duration-300 ease-in-out hover:text-[#FF3B30]">
                Media Gallery
              </Link>
              <Link href="#" className="text-sm transition-all duration-300 ease-in-out hover:text-[#FF3B30]">
                Brand Kit
              </Link>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-4 max-sm:mb-7">
              <p className="font-bold xl:text-xl">Legal</p>
              <Link
                href="mailto:contact@smarthavensystems.com"
                className="text-sm transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm transition-all duration-300 ease-in-out hover:text-[#FF3B30]">
                Disclaimer
              </Link>
              <Link href="#" className="text-sm transition-all duration-300 ease-in-out hover:text-[#FF3B30]">
                Terms of Use
              </Link>
              <Link href="#" className="text-sm transition-all duration-300 ease-in-out hover:text-[#FF3B30]">
                Cookie Policy
              </Link>
            </div>

            {/* Column 5 */}
            <div className="flex w-[207px] flex-col gap-4 max-sm:mb-7">
              <p className="font-bold">Contact Us</p>
              <p className="text-sm">123 Humanitarian Drive, Global City, World</p>
              <Link
                href="mailto:contact@smarthavensystems.com"
                className="text-sm transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
                +123 456 7890
              </Link>
              <div className="flex w-full gap-[15px]">
                <img src="/skill-icons_instagram.png" className="h-[23.53px] w-[23.53px]" />
                <img src="/devicon_linkedin.png" className="h-[23.53px] w-[23.53px]" />
                <img src="/Frame 1618874081 (1).png" className="h-[23.53px] w-[23.53px]" />
                <img src="/prime_twitter.png" className="h-[23.53px] w-[23.53px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center py-10">
          <p className="paragraph">© 2024 CHATS Platform. All rights reserved. Privacy Policy | Terms of Service</p>
        </div>
      </section>
    </>
  )
}

export default Footer
