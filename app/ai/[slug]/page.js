export default function AiPageSingle({ params }) {

	const { slug } = params

	return (
		<div className="w-full dark:bg-gray-800 overflow-hidden">

			<div className="container mx-auto max-w-7xl">
				<div className="mt-22 px-4 sm:px-0">

					<div>
						<div className="flex space-x-2 mb-5 items-center">
							<a href="/">Home</a>

							<a href="/ai-sites/art">Art</a>

							<span>AI Backdrop</span>
						</div>
					</div>
					<div className="flex justify-between">
						<h1 className="text-2xl font-semibold block">AI Backdrop</h1>

					</div>
					<div className="flex flex-col md:flex-row md:space-x-10 mt-5">
						<div className="md:w-2/6">
							<img src="" alt="AI Backdrop" className="rounded-xl border" />
							<div className="flex items-center justify-between mt-6">
								<div className="border border-gray-300 px-4 py-2 rounded-full bg-white">free
								</div>
								<div className="flex items-center">
									<a href="#" target="_blank" title="AI Backdrop" className="border border-gray-300 rounded-full px-6 p-2 hover:bg-gray-100 hover:border-gray-200 hover:text-gray-900 cursor-pointer text-white bg-blue-500 text-lg flex items-center space-x-2">

										<div className="">Visit</div>
									</a>
								</div>
							</div>
						</div>
						<div className="md:w-4/6 pt-6 md:pt-0">
							<h2 className="block mb-5">Demo text</h2>
							<div className="flex space-x-3 mt-6 flex-wrap">
								<a href="/tag/ai" className="rounded-full border-gray-300 border px-4 text-sm py-1 mt-2 md:mt-0">
									AI
								</a>
								<a href="/tag/social-media" className="rounded-full border-gray-300 border px-4 text-sm py-1 mt-2 md:mt-0">
									Social media
								</a>
								<a href="/tag/marketing" className="rounded-full border-gray-300 border px-4 text-sm py-1 mt-2 md:mt-0">
									Marketing
								</a>
								<a href="/tag/product-photography" className="rounded-full border-gray-300 border px-4 text-sm py-1 mt-2 md:mt-0">
									Product photography
								</a>
								<a href="/tag/e-commerce" className="rounded-full border-gray-300 border px-4 text-sm py-1 mt-2 md:mt-0">
									E-commerce
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


	)
}