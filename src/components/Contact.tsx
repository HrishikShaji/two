const company = ["Insurance Products", "Services", "Industries", "About"]
const legal = ["Cookie Policy", "Terms & Conditions", "Privacy Policy"]
const socials = ["Linkedin", "Github", "X"]

export default function Contact() {
	console.log(company, legal, socials)
	return (
		<div className="h-screen p-20 flex">
			<div className="flex-1 flex flex-col justify-between h-full">
				<div className="grid grid-cols-3 gap-2">
					<div className="flex"></div>
				</div>:q

				<div>
					<h1 className="text-8xl font-semibold">HRISHIK</h1>
				</div>
			</div>
			<div className="flex-1 flex flex-col gap-5">
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl">Subscribe to our newsletter</h1>
					<p>Insights and updates you actually care about.</p>
				</div>
				<div className="relative w-full flex items-center">
					<input className="bg-transparent w-full p-2 border-b-[1px]" placeholder="example@gmail.com" />
					<button className="absolute right-2 ">submit</button>
				</div>
			</div>
		</div>
	)
}
