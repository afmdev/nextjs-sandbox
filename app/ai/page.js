import Link from 'next/link'
import Image from 'next/image'
import { getPost, getPaidFree, getCategory, getTag } from "utils/API";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default async function AiTools() {
	const posts = await getPost();
	const paidFree = await getPaidFree();
	const category = await getCategory();
	const tag = await getTag();

	const blogPosts = posts.items
	const blogCoverImage = posts.includes.Asset
	const blogPaidFree = paidFree.items
	const blogCategory = category.items
	const blogTag = tag.items

	const handleSearch = () => {
		const searchQuery = searchInputRef.current.value.toLowerCase();
		const filteredBlogPosts = posts.items.filter((post) => {
		  return post.fields.title.toLowerCase().includes(searchQuery) ||
			post.fields.categories.some((category) => blogCategory.find((catName) => catName.sys.id === category.sys.id).fields.name.toLowerCase().includes(searchQuery)) ||
			post.fields.tagss.some((tag) => blogTag.find((tagName) => tagName.sys.id === tag.sys.id).fields.name.toLowerCase().includes(searchQuery));
		});
		setBlogPosts(filteredBlogPosts);
	  }


	return (
		<div className="relative isolate pt-10">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">
					{blogPosts.map((post) => (
						<div key={post.sys.id} className="group relative">
							<div className="card-content ring-0 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white transform duration-200 hover:shadow-gray-200 hover:shadow-md  z-0 relative shadow-2xl hover:scale-[101%]">
								<div className="card-image overflow-hidden rounded-lg">
									<Link href={`/ai/${post.fields.slug}`}>
										<img
											src={blogCoverImage.find((coverImage) => coverImage.sys.id === post.fields.coverImage.sys.id).fields.file.url}
											alt={post.fields.title}
											className="hover:scale-[103%] transform duration-200"
										/>
									</Link>
								</div>
								<div className="card-title text-lg font-bold pt-3">
									<Link
										href={`/ai/${post.fields.slug}`}>
										<h3>{post.fields.title}</h3>
									</Link>
									<span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 mt-2 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
										{post.fields.categories.map((category) => (
											<div key={category.sys.id}>
												{blogCategory.find((catName) => catName.sys.id === category.sys.id).fields.name}
											</div>
										))}
									</span>
								</div>
								<div className="card-description">
									<div className="overflow-hidden line-clamp-3 mt-2">
										{documentToReactComponents(post.fields.content)}
									</div>
									<div>
										{post.fields.tagss.map((tag) => (
											<div key={tag.sys.id} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-normal text-gray-600 ring-1 ring-inset ring-gray-500/10 mt-2 mr-2">
												#{blogTag.find((tagName) => tagName.sys.id === tag.sys.id).fields.name}
											</div>
										))}
									</div>
								</div>
								<div className="flex flex-wrap justify-between items-center border-t pt-2 flex-col md:flex-row">
									<div className="flex space-x-2">
										<div className="text-sm rounded-full px-4 p-2 capitalize bg-white text-gray-800 border border-gray-400">
											{blogPaidFree.find((paidFree) => paidFree.sys.id === post.fields.model.sys.id).fields.name}
										</div>
									</div>
									<div className="flex space-x-2 justify-between">
										<Link
											href={`${post.fields.link}`}
											target="_blank"
											className="border border-gray-300 rounded-full px-4 p-2 hover:bg-gray-100 hover:border-gray-200 hover:text-gray-900 cursor-pointer bg-white text-sm flex items-center ml-1 mt-1 space-x-2">
											<span>Visit</span>
										</Link>
										<Link
											href={`/ai/${post.fields.slug}`}
											className="border border-gray-300 rounded-full px-4 p-2 hover:bg-gray-100 hover:border-gray-200 hover:text-gray-900 cursor-pointer bg-white text-sm flex items-center ml-1 mt-1">
											<span>Details</span>
										</Link>
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
