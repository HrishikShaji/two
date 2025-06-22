import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    index: "01",
    title: "It starts onchain",
    subtitle: "We’re bringing onchain capital to the insurance world. With our partners, we unlock greater capacity for risk coverage, matching assets with liabilities to create larger, more robust risk transfer programmes."
  },
  {
    index: "02",
    title: "A unified approach",
    subtitle: "Our complete risk management ecosystem bridges traditional insurance with web3. By partnering with legacy insurers and innovative blockchain companies, we provide products and experiences that are fit for the crypto space – native, intuitive, and fit for the future."
  },
  {
    index: "03",
    title: "Tackling all risks",
    subtitle: "In the world of web3, it’s easy to focus on onchain risks while overlooking offchain threats. At Native, we know how to manage all risks, and we help businesses do just that."
  },
  {
    index: "04",
    title: "Tech defines us",
    subtitle: "It’s our technology that makes this insurance for a new era. From executing policies via smart contracts to onchain claims processing, it’s the definition of seamless. Plus with crypto-denominated policies, you can insure your assets in the same currency you operate in."
  },
]

export default function StackedCards() {
  const cardRefs = useRef<HTMLDivElement[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const endRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const cards = cardRefs.current

    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        pin: card,
        pinSpacing: false,
        markers: true,
        start: `${i * 200}px 100px`,
        endTrigger: endRef.current,
        end: "top 80%",
        scrub: 1,
      })
    })
  }, {})

  return (
    <div className="p-20 bg-gray-50" >
      <div className="relative " ref={containerRef}>
        {cards.map((card, i) => (
          <div
            ref={el => el && (cardRefs.current[i] = el)}
            className="  w-full h-[300px] bg-gray-50 flex p-5 border-gray-300 border-t-[1px]"
            style={{ zIndex: i * 10 }}
            key={i}
          >
            <div className="flex-1/3 border-r-[1px] border-gray-300 h-full p-5">
              <p>{card.index}</p>
            </div>
            <div className="flex-2/3 border-r-[1px] border-gray-300 h-full flex flex-col justify-between p-5">
              <h1 className="text-5xl">{card.title}</h1>
              <p>{card.subtitle}</p>
            </div>
          </div>
        ))}
        <div ref={endRef} className="" />
      </div>
    </div>
  )
}
