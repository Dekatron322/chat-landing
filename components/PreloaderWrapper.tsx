"use client"

import { useEffect, useState } from "react"
import Preloader from "./Preloader"

export default function PreloaderWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000) // Adjust time as needed

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <Preloader />}
      {children}
    </>
  )
}
