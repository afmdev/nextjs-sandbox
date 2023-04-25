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
							{}
						</ul>
					</nav>
				</header>
				{children}
			</body>
		</html>
	)
}
