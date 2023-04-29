import { getPost, getModel, getCategory } from '../utils/API';

export default async function HomePage() {

	const posts = await getPost();
	const model = await getModel();
	const category = await getCategory();

	const blogPosts = posts.items
	const blogCoverImage = posts.includes.Asset
	const blogModel = model.items
	const blogCategory = category.items

	return (
		<div div className="relative isolate pt-10">

			<div
				className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
			>
				<div
					className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}} />
			</div>
			<div className="mx-auto max-w-2xl pt-32 sm:pt-36 lg:pt-38">
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Data to enrich your online business
					</h1>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="#"
							className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
							Get started
						</a>
						<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
							Learn more <span aria-hidden="true">→</span>
						</a>
					</div>
				</div>
			</div>
			<div
				className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				aria-hidden="true">
				<div
					className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}} />
			</div>
			<div className="bg-white">
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

					<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">

						{blogPosts.map((post) => (
							<div key={post.sys.id} className="group relative">
								<div className="card-content ring-0 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white transform duration-200 hover:shadow-gray-200 hover:shadow-md  z-0 relative shadow-2xl hover:scale-[101%]">
									<div className="card-image overflow-hidden rounded-lg">
										<a href={`/ai/${post.fields.slug}`}>
											<img src={blogCoverImage.find(img => img.sys.id === post.fields.coverImage.sys.id).fields.file.url} alt="" className="hover:scale-[103%] transform duration-200" />
										</a>
									</div>
									<div className="card-title text-lg font-bold pt-3">
										<a href={`/ai/${post.fields.slug}`}>
											<h3>{post.fields.title}</h3>
										</a>
										<span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 mt-2 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
											YOYO
										</span>
									</div>
									<div className="card-description">
										<p className="overflow-hidden line-clamp-3 mt-2">{post.fields.content}</p>
									</div>
									<div className="flex flex-wrap justify-between items-center border-t pt-2 flex-col md:flex-row">
										<div className="flex space-x-2">
											<div className="text-sm rounded-full px-4 p-2 capitalize bg-white text-gray-800 border border-gray-400">


												{blogModel.find(model => model.sys.id === post.fields.model.sys.id).fields.name}


											</div>
										</div>
										<div className="flex space-x-2 justify-between">
											<a href={`${post.fields.link}`} target="_blank" className="border border-gray-300 rounded-full px-4 p-2 hover:bg-gray-100 hover:border-gray-200 hover:text-gray-900 cursor-pointer bg-white text-sm flex items-center ml-1 mt-1 space-x-2">
												<svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
													<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
													<path d="M13 11L21.2 2.80005" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
													<path d="M21.9999 6.83V2H17.1699" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
												</svg>
												<span className="">Visit</span>
											</a>
											<a href={`/ai/${post.fields.slug}`} className="border border-gray-300 rounded-full px-4 p-2 hover:bg-gray-100 hover:border-gray-200 hover:text-gray-900 cursor-pointer bg-white text-sm flex items-center ml-1 mt-1">
												<span className="">Details</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>

	);
}