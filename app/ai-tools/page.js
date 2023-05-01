import { getPost, getPaidFree, getCategory, getTag } from 'utils/API';

export default async function AiTools() {

	const posts = await getPost();
	const paidFree = await getPaidFree();
	const category = await getCategory();
	const tag = await getTag()

	const blogPosts = posts.items
	const blogCoverImage = posts.includes.Asset
	const blogPaidFree = paidFree.items
	const blogCategory = category.items
	const blogTag = tag.items

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
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

				<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">

					{blogPosts.map((post, i) => (
						<div key={post.sys.id} className="group relative">
							<div className="card-content ring-0 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white transform duration-200 hover:shadow-gray-200 hover:shadow-md  z-0 relative shadow-2xl hover:scale-[101%]">
								<div className="card-image overflow-hidden rounded-lg">
									<a href={`/ai/${post.fields.slug}`}>
										<img src={blogCoverImage.find(coverImage => coverImage.sys.id === post.fields.coverImage.sys.id).fields.file.url} alt="" className="hover:scale-[103%] transform duration-200" />
									</a>

								</div>
								<div className="card-title text-lg font-bold pt-3">
									<a href={`/ai/${post.fields.slug}`}>
										<h3>{post.fields.title}</h3>
									</a>
									<span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 mt-2 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">

										{post.fields.categories.map((category) => (
											<div key={category.sys.id}>
												{blogCategory.find(catName => catName.sys.id === category.sys.id).fields.name}
											</div>
										))}
									</span>
								</div>
								<div className="card-description">
									<p className="overflow-hidden line-clamp-3 mt-2">{post.fields.content}</p>
									<div>
										{post.fields.tagss.map((tag) => (
											<div key={tag.sys.id} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-normal  text-gray-600 ring-1 ring-inset ring-gray-500/10 mt-2 mr-2">
												#{blogTag.find(tagName => tagName.sys.id === tag.sys.id).fields.name}
											</div>
										))}
									</div>
								</div>
								<div className="flex flex-wrap justify-between items-center border-t pt-2 flex-col md:flex-row">
									<div className="flex space-x-2">
										<div className="text-sm rounded-full px-4 p-2 capitalize bg-white text-gray-800 border border-gray-400">


											{blogPaidFree.find(paidFree => paidFree.sys.id === post.fields.model.sys.id).fields.name}


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
	);
}