import Link from "next/link"

const links = [{
	label: 'Home',
	route: '/'
},
{
	label: 'About',
	route: '/about'
}]

export default function RootLayout({ children }) {
	return (
		<html>
			<head>
				<titlte>My app with Next.js 13</titlte>
			</head>
			<body>
				<header>
					<nav>
						<ul>
							{links.map(({ label, route }) => (
								<li key={route}>
									<Link href={route}>
										<a>{label}</a>
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</header>
				{children}
			</body>
		</html>
	)
}
