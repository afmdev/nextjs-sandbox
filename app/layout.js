import "../styles/globals.css"

import { Navigation } from "../components/Navigation"
import { TopBar } from "../components/TopBar"
import { Footer } from "../components/Footer"

export default function RootLayout({ children }) {
	return (
		<html>
			<head>
				<title>Next.js 13 + Contentful</title>
			</head>
			<body>
				<header>
					<div>
						<TopBar />
					</div>
					<Navigation />
				</header>

				{children}

				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	)
}
