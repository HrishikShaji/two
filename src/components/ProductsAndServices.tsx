export default function ProductsAndServices() {
  return (
    <div className="bg-gray-50 pt-40 p-20 flex flex-col gap-20">
      <h1 className="text-4xl">The right fit,<br />whatever the risk</h1>
      <div className="grid grid-cols-2 gap-3">
        <div className="p-7 rounded-md bg-white flex flex-col justify-between h-[60vh]">
          <h1 className="text-6xl font-semibold">Products</h1>
          <p className="w-[70%]">We use traditional and onchain insurance solutions, both regulated and blockchain-native, for even the most unique and complex risks.</p>
        </div>
        <div className="p-7 rounded-md bg-white flex flex-col justify-between h-[60vh]">
          <h1 className="text-6xl font-semibold">Services</h1>
          <p className="w-[70%]">Along with insurance, we offer risk management and consulting through our growing ecosystem of partners, making us the place for all things crypto-risk.</p>
        </div>
      </div>
    </div>
  )
}
