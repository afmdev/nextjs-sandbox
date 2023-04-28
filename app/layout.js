import "../styles/globals.css"

import { Navigation } from "../components/navigation"
import { TopBar } from "../components/topBar"
import { Footer } from "../components/footer"

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
