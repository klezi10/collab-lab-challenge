export default function ImageDetailsPage({ image, goBack }) {
	return (
		<div className="ImageDetailsPage">
			<button onClick={goBack}>Back</button>
			<br />
			<img
				alt="chosen"
				src={`https://www.artic.edu/iiif/2/${image}/full/843,/0/default.jpg`}
			/>
		</div>
	);
}
