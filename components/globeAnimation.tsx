import React from "react"
import Lottie from "lottie-react"
import dynamic from "next/dynamic"

const GlobeAnimation = () => {
  const animationData = require("../public/Globe (1).json")

  return (
    <div className="w-[722px]">
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  )
}

export default GlobeAnimation
