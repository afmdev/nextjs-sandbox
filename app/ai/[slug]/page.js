import Link from 'next/link'
import { getPaidFree, getCategory, getTag } from "utils/API";

const getPostSingle = async (slug) => {
  try {
    const response = await fetch(`https://cdn.contentful.com/spaces/39eo3nd1n1px/entries?access_token=Kg2zFy4PmKUAwMZKHN3vy7ZrB8AM1G3weQdFBSJkP0c&content_type=post&fields.slug=${slug}&limit=1`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default async function AiPageSingle({ params }) {
  const { slug } = params;
  const posts = await getPostSingle(slug);
  const paidFree = await getPaidFree();
  const category = await getCategory();
  const tag = await getTag();

  const blogPosts = posts.items;
  const blogCoverImage = posts.includes.Asset;
  const blogPaidFree = paidFree.items;
  const blogCategory = category.items;
  const blogTag = tag.items;

  return (
    <div div className="relative isolate pt-10">

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex space-x-2 mb-5 items-center">
          <Link href="/" className="text-gray-400 hover:text-gray-500">Home</Link>
        </div>


        {blogPosts.map((post) => (
          <div className="py-3 px-4 sm:px-0" key={post.sys.id}>
            <h1 class="text-2xl font-semibold block">{post.fields.title}</h1>
            <div className="flex flex-col md:flex-row md:space-x-10 mt-5">

              <div className="md:w-2/6">

                <img src={blogCoverImage.find((coverImage) => coverImage.sys.id === post.fields.coverImage.sys.id).fields.file.url} alt={post.fields.title} className="rounded-xl border hover:scale-[103%] transform duration-200" />
                <div className="flex items-center justify-between mt-6">
                  <div className="border border-gray-300 px-4 py-2 rounded-full bg-white">{blogPaidFree.find((paidFree) => paidFree.sys.id === post.fields.model.sys.id).fields.name}
                  </div>
                  <div className="flex items-center">
                    <Link href={`${post.fields.link}`} target="_blank" title={post.fields.title} className="border border-gray-300 rounded-full px-6 p-2 hover:bg-gray-100 hover:border-gray-200 hover:text-gray-900 cursor-pointer text-white bg-blue-500 text-lg flex items-center space-x-2">
                      <div className="">Visit</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-4/6 pt-6 md:pt-0">
                {post.fields.content}
                <div className="flex space-x-3 mt-6 flex-wrap">
                  <div>
                    <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 mr-2 mt-2 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                      {post.fields.categories.map((category) => (
                        <div key={category.sys.id}>{blogCategory.find((catName) => catName.sys.id === category.sys.id).fields.name}</div>
                      ))}
                    </span>
                    {post.fields.tagss.map((tag) => (
                      <div key={tag.sys.id} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-normal  text-gray-600 ring-1 ring-inset ring-gray-500/10 mt-2 mr-2">
                        #{blogTag.find((tagName) => tagName.sys.id === tag.sys.id).fields.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
