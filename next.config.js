/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
}

module.exports = {
	...nextConfig,
	env: {
		CONTENTFUL_SPACE_ID: "39eo3nd1n1px",
		CONTENTFUL_ACCESS_KEY: "Kg2zFy4PmKUAwMZKHN3vy7ZrB8AM1G3weQdFBSJkP0c"
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.ctfassets.net',
			},
		],
	},
}
