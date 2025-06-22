const cards = [
  {
    title: "Crypto-native",
    subtitle: "Means we’re ushering in a new era of insurance suited for the world of web3. Our bespoke products address the unique risks of digital assets and emerging tech. The more complex the challenge, the better. Our team thrives on this stuff."
  },
  {
    title: "Comprehensive",
    subtitle: "Means we’re building a risk management ecosystem that bridges native technologies with traditional insurance. By partnering with both major players and pioneers, we offer a complete range of expertise to meet ever-evolving needs. Innovation doesn’t stop, so why would we?"
  },
  {
    title: "Client-centric",
    subtitle: "Means we’re committed to making a positive impact through responsible, long-term decision-making. Always with the needs of our clients and the future of decentralised technologies in mind. Others might say it, we just get on with it."
  },
]

export default function Standards() {
  return (
    <div className="p-20 pt-40 bg-white text-black flex flex-col gap-20">
      <h1 className="text-4xl">Setting the new Standard</h1>
      <div className="grid grid-cols-3">
        {cards.map((card) => (
          <div className="flex flex-col justify-between items-start gap-40 p-6 border-l-[1px] border-gray-300">
            <h1 className="text-3xl ">{card.title}</h1>
            <p className="w-[90%] h-[200px]">{card.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
