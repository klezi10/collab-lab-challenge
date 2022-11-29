export default function Results({ image, altText, name, title, showDetails }) {
	return (
		<button
			className="Results"
			onClick={() => {
				showDetails({ image, altText });
			}}
		>
			<h3>Art name: {title}</h3>
			<h3>Author name: {name}</h3>
		</button>
	);
}
