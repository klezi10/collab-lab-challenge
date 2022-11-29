export default function Results({ image, name, title, showDetails }) {
	return (
		<button
			className="Results"
			onClick={() => {
				showDetails(image);
			}}
		>
			<h3>Art name: {title}</h3>
			<h3>Author name: {name}</h3>
		</button>
	);
}
