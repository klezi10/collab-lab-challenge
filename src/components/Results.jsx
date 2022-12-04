export default function Results({ image, altText, name, title, showDetails }) {
	return (
		<li className="Results">
			<p>Art name: {title}</p>
			<p>Author name: {name}</p>
			<button
				onClick={() => {
					showDetails({ image, altText });
				}}
			>
				Details
			</button>
		</li>
	);
}
