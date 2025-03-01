import Image from "next/image"
import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"
import WbSunnyIcon from "@mui/icons-material/WbSunny"
import { GoArrowRight, GoMoon } from "react-icons/go"
import { AnimatePresence, motion } from "framer-motion"
import { CgChevronDown, CgMenu } from "react-icons/cg"
import ChatsEcosystemListItems from "./ChatsEcosystemListItems"
import ForDonorsListItem from "./ForDonorListItem"
import ForGovOfficialsListItem from "./ForGovOfficialsListItem"
import SeeItInActionListItem from "./SeeItInActionListItem"
import FieldAgentApp from "./FieldAgentApp"
import NgoDashboard from "./NgoDashboard"
import BeneficiaryApp from "./BeneficiaryApp"
import DonorDashboard from "./DonorDashboard"
import Link from "next/link"

const DashboardNav = () => {
  const [loading, setLoading] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDarkMode = theme === "dark"
  const [openPopover, setOpenPopover] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  if (!mounted) {
    return null
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-NG", {
      timeZone: "Africa/Lagos",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
  }

  const handlePopover = (item: any) => {
    setOpenPopover(openPopover === item ? null : item)
  }

  const renderPopoverContent = (item: string) => {
    switch (item) {
      case "Chats Ecosystem":
        return (
          <ul className="grid gap-4 xl:grid-cols-4">
            <li className="py-1">
              <ChatsEcosystemListItems />
            </li>
            <li className="py-1">
              <ForDonorsListItem />
            </li>
            <li className="py-1">
              <ForGovOfficialsListItem />
            </li>
            <li className="py-1">
              <SeeItInActionListItem />
            </li>
          </ul>
        )
      case "Solutions":
        return (
          <div className="flex w-full flex-col">
            <ul className="grid gap-4 xl:grid-cols-4">
              <li className="py-1">
                <FieldAgentApp />
              </li>
              <li className="py-1">
                <NgoDashboard />
              </li>
              <li className="py-1">
                <BeneficiaryApp />
              </li>
              <li className="py-1">
                <DonorDashboard />
              </li>
            </ul>
            <Link
              href="/solutions"
              className="group relative mt-4 flex h-10 w-full items-center justify-center gap-1 overflow-hidden rounded-lg bg-[#05F29A] text-[#000000] transition-colors duration-300 hover:bg-[#05F29A]/90"
            >
              <div className="img-elementx absolute bottom-0 left-10"></div>
              <p className="text-sm">Find the Perfect Solution and Get Onboarded!</p>
              <div className="relative overflow-hidden">
                <GoArrowRight className="size-5 transform transition-transform duration-200 group-hover:scale-150" />
              </div>
            </Link>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="z-150 paddings fixed left-0 right-0 top-0 z-20 flex justify-center pt-7 backdrop-blur"
    >
      <div className="hero-container z-50 flex w-full items-center justify-between p-4 backdrop-blur max-sm:flex-col-reverse max-sm:gap-3 max-sm:rounded-xl max-sm:px-3 xl:rounded-full">
        <div className="flex items-center gap-10 max-sm:w-full max-sm:justify-between">
          <Link href="/">
            <img src="/chats transparent 1 (1).png" alt="" className="h-10" />
          </Link>
          <button className="sm:hidden" onClick={toggleMobileMenu}>
            <CgMenu className="h-6 w-6" />
          </button>
        </div>

        <div
          className={`flex items-center gap-10 max-sm:w-full max-sm:flex-col max-sm:items-start ${
            isMobileMenuOpen ? "max-sm:flex" : "max-sm:hidden"
          }`}
        >
          <ul className="flex gap-10 max-sm:flex-col max-sm:gap-4">
            {["Chats Ecosystem", "Solutions", "Resource", "Contact Us"].map((item) => (
              <li
                key={item}
                className="link-items relative flex cursor-pointer items-center gap-2"
                onMouseEnter={() => handlePopover(item)}
                onMouseLeave={() => handlePopover(null)}
              >
                {item === "Contact Us" ? (
                  <Link href="/contact-us">{item}</Link>
                ) : item === "Resource" ? (
                  <Link href="/resources">{item}</Link>
                ) : (
                  <>
                    {item}
                    {(item === "Chats Ecosystem" || item === "Solutions") && (
                      <motion.div
                        animate={{
                          rotate: openPopover === item ? -180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <CgChevronDown />
                      </motion.div>
                    )}

                    {(item === "Chats Ecosystem" || item === "Solutions") && (
                      <AnimatePresence>
                        {openPopover === item && (
                          <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="nav-list-item fixed left-0 right-0 top-full mt-5 cursor-pointer shadow-lg dark:bg-gray-800"
                            style={{ width: "100%" }}
                          >
                            <div className="container mx-auto p-4">{renderPopoverContent(item)}</div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5 max-sm:w-full max-sm:justify-between">
            <div
              className="containerbg flex w-full cursor-pointer items-center justify-between gap-2 rounded-full p-1 transition duration-300"
              onClick={toggleTheme}
              style={{
                position: "relative",
                width: "80px",
                height: "35.43px",
                borderRadius: "25px",
                backgroundColor: isDarkMode ? "#151E22" : "#ffffff",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="/Frame 45114.png" alt="Light Mode" style={{ width: "30px", height: "30px" }} />
              </div>

              <div
                style={{
                  position: "absolute",
                  right: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="/Frame 45113 (1).png" alt="Dark Mode" style={{ width: "30px", height: "30px" }} />
              </div>

              <div
                style={{
                  position: "absolute",
                  left: isDarkMode ? "calc(100% - 35px)" : "2px",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: isDarkMode ? "#000" : "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "left 0.5s ease",
                }}
              >
                {isDarkMode ? (
                  <img src="/Frame 45113.png" alt="" style={{ color: "#000", fontSize: "24px" }} />
                ) : (
                  <img src="/Frame 45112.png" style={{ color: "#fff", fontSize: "24px" }} alt="" />
                )}
              </div>
            </div>
            <button className="slide-button relative flex overflow-hidden rounded-full border px-5 py-2 text-sm">
              <div className="btn-img-element absolute bottom-0 left-0"></div>
              <div className="btn-img-element-one absolute bottom-2 right-2"></div>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default DashboardNav
