export default function Results({ id, name, title, showDetails }) {
	return (
		<button
			className="Results"
			onClick={() => {
				showDetails(id);
			}}
		>
			<h3>Art name: {title}</h3>
			<h3>Author name: {name}</h3>
		</button>
	);
}
