import { useEffect, useRef } from "react"
import "./App.css"
import gsap from "gsap";


export default function Mask2() {

  const maskRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    window.addEventListener("mousemove", (e) => {
      console.log(e)

      const widthPercentage = (e.clientX / window.innerWidth) * 100
      const heightPercentage = (e.clientY / window.innerHeight) * 100

      gsap.to(maskRef.current, {
        clipPath: `circle(10% at ${widthPercentage}% ${heightPercentage}%)`,
        duration: 1,
        ease: 'power4.Out'
      })



    })

  }, [])

  return (
    <div className="h-screen w-full flex justify-center items-center bg-neutral-900 relative">
      <img
        className="h-full w-full"
        src="https://images.pexels.com/photos/1350197/pexels-photo-1350197.jpeg"
      />
      <div className="size-full absolute z-10 bg-white"
        ref={maskRef}
        style={{
          clipPath: "circle(10% at 40% 50%)",
          background: "url('https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%"
        }}
      ></div>
    </div>
  )
}

