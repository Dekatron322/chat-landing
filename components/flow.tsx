import React, { useEffect, useRef } from "react"
import lottie, { AnimationItem } from "lottie-web"

const Flow = () => {
  const container = useRef<HTMLDivElement>(null)
  const animationInstance = useRef<AnimationItem | null>(null) // Properly typed ref

  useEffect(() => {
    if (container.current && !animationInstance.current) {
      // Load the animation only if it hasn't been loaded already
      animationInstance.current = lottie.loadAnimation({
        container: container.current, // the DOM element that will contain the animation
        renderer: "svg", // the rendering method
        loop: true, // whether the animation should loop
        autoplay: true, // whether the animation should play as soon as it is ready
        animationData: require("/public/Flow 0.json"), // the path to your JSON file
      })
    }

    // Cleanup function to destroy the animation when the component unmounts
    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy() // Destroy the animation instance
        animationInstance.current = null // Reset the reference
      }
    }
  }, []) // Empty dependency array ensures this runs only once

  return <div ref={container} className="w-[722px]"></div>
}

export default Flow
