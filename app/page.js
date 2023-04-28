import { createClient } from "contentful"

export default function HomePage(props) {
	return (
		<div>
			<h1>This is my App</h1>
			{console.log("Posts", props.posts)}
		</div>
	)

}

//Exporting the function cgetStaticProps will pre-render the page at build time using the props returned from the function
export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY
	})

	const res = await client.getEntries({ content_type: 'Post' })

	return {
		props: {
			posts: res
		}
	}
}