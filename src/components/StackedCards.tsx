import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const cards = [
  { color: "blue" },
  { color: "green" },
  { color: "yellow" },
  { color: "red" },
]

export default function StackedCards() {
  const cardRefs = useRef<HTMLDivElement[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const cards = cardRefs.current

    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        pin: card,
        pinSpacing: false,
        markers: true,
        start: `${i * 10}% 10%`,
        scrub: 1,
      })
    })
  }, {})

  return (
    <div className="p-20" >
      <div className="relative" ref={containerRef}>
        {cards.map((card, i) => (
          <div
            ref={el => el && (cardRefs.current[i] = el)}
            className="  w-full h-[300px] border-black border-2"
            style={{ zIndex: i * 10, background: card.color }}
            key={i}
          />
        ))}
      </div>
      <div className="h-screen" />
    </div>
  )
}
