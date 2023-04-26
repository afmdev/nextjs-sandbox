import "../styles/globals.css"

import { Navigation } from "../components/Navigation"
import { TopBar } from "../components/TopBar"
import { Footer } from "../components/Footer"

export default function RootLayout({ children }) {
	return (
		<html>
			<head>
				<title>My app with Next.js 13</title>
			</head>
			<body>
				<header>
					<div className="my-0">
						<TopBar />
					</div>
					<nav>
						<Navigation />
					</nav>
				</header>
				
				{children}

				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	)
}
