import { useEffect, useRef } from "react"
import "./App.css"
import gsap from "gsap";


export default function Mask1() {

  const maskRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    window.addEventListener("mousemove", (e) => {
      console.log(e)

      const widthPercentage = (e.clientX / window.innerWidth) * 100
      const heightPercentage = (e.clientY / window.innerHeight) * 100

      const availabelWidthPercentage = 100 - widthPercentage
      const availableHeightPercentage = 100 - heightPercentage
      gsap.to(maskRef.current, {
        clipPath: `polygon(${widthPercentage}% ${heightPercentage}%, 100% 0%, ${availabelWidthPercentage}% ${availableHeightPercentage}%, 0% 100%)`
      })



    })

  }, [])

  return (
    <div className="h-screen w-full bg-neutral-500 relative">
      <div ref={maskRef} className="h-full w-full absolute z-10 bg-green-500"
      ></div>
    </div>
  )
}

