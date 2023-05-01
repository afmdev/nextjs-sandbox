export default function AiToolsSlug({ params }) {

	const { slug } = params

	return (
		<div className="bg-white py-24 sm:py-32">
			<h1>Esto es un AI Profile con {slug}</h1>
		</div>
	)
}