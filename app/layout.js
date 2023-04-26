import { Navigation } from "./components/Navigation"

export default function RootLayout({ children }) {
	return (
		<html>
			<head>
				<title>My app with Next.js 13</title>
			</head>
			<body>
				<Navigation />
				{children}
			</body>
		</html>
	)
}
