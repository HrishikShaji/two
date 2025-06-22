import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const slides = [
  { name: "Healthcare" },
  { name: "Finance" },
  { name: "Technology" },
  { name: "Manufacturing" },
  { name: "Artificial Intelligence" },
  { name: "Quantum computing" },
  { name: "Robotics" },
  { name: "Agriculture" },
]

export const VerticalSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const firstRef = useRef<HTMLDivElement>(null)
  const secondRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Set initial positions
    gsap.set(secondRef.current, { yPercent: 100 })

    const tl = gsap.timeline({
      repeat: -1, // Infinite repeat
      ease: "none"
    })

    // Animate both sets together for seamless loop
    tl.to([firstRef.current, secondRef.current], {
      yPercent: "-=100",
      duration: 8, // Slower for better readability
      ease: "none"
    })
      .set([firstRef.current, secondRef.current], {
        yPercent: (i) => i === 0 ? 0 : 100 // Reset positions
      })
  }, { scope: containerRef })

  return (
    <div className="flex p-20 min-h-screen ">
      <div className="flex flex-col gap-10 pt-20 flex-1">
        <h1 className="text-4xl font-bold text-gray-800">Industries we work with</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          From DAO to DEX, we team up with the best insurers around the world to solve
          the digital world's most complex risks. Experts across industries trust our expertise.
        </p>
      </div>

      {/* SLIDER */}
      <div className="flex-1 p-10 flex items-center justify-center">
        <div
          className="relative w-full h-[70vh] overflow-hidden  flex flex-col gap-2 "
          ref={containerRef}
        >
          <div className="absolute w-full flex pt-2 flex-col justify-start gap-2" ref={firstRef}>
            {slides.map((slide, i) => (
              <div
                key={i}
                className="flex-shrink-0 p-4 rounded-md border-[1px] border-gray-300 "
              >
                <div className="text-lg font-semibold">{slide.name}</div>
              </div>
            ))}
          </div>
          <div className="absolute pt-2 w-full flex flex-col justify-start gap-2" ref={secondRef}>
            {slides.map((slide, i) => (
              <div
                key={i}
                className="flex-shrink-0 p-4 rounded-md border-[1px] border-gray-300 "
              >
                <div className="text-lg font-semibold">{slide.name}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default VerticalSlider
