export default function ImageDetailsPage({ image, altText, goBack }) {
	return (
		<div className="ImageDetailsPage">
			<button onClick={goBack}>Back</button>
			<br />
			<img
				alt={altText}
				src={`https://www.artic.edu/iiif/2/${image}/full/843,/0/default.jpg`}
			/>
		</div>
	);
}
