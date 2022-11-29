export default function ImageDetailsPage({ image }) {
	return (
		<div className="ImageDetailsPage">
			{/* <h1>{image}</h1> */}
			<img
				alt="chosen"
				src={`https://www.artic.edu/iiif/2/${image}/full/843,/0/default.jpg`}
			/>
		</div>
	);
}
