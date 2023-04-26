import "../styles/globals.css"

import { Navigation } from "../components/Navigation"
import { TopBar } from "../components/TopBar"

export default function RootLayout({ children }) {
	return (
		<html>
			<head>
				<title>My app with Next.js 13</title>
			</head>
			<body>
				<header>
					<TopBar />
					<nav>
						<Navigation />
					</nav>
				</header>

				{children}
			</body>
		</html>
	)
}
