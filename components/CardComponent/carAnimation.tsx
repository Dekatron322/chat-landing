import React from "react"

const CarAnimation = () => {
  return (
    <section className="primary-100 relative h-[117px]">
      <div className="img-element absolute bottom-0 left-10 max-sm:hidden"></div>
      <div className="img-element-two-sm absolute bottom-0 left-0 md:hidden"></div>
      <div className="img-element-sm absolute bottom-0 right-0 md:hidden"></div>
      <div className="img-element-two absolute bottom-0 right-10 max-sm:hidden"></div>
      <div className="flex items-center px-96"></div>
    </section>
  )
}

export default CarAnimation
