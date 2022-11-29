import { useState } from 'react';
import './App.css';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import Results from './Results';
import ImageDetailsPage from './ImageDetailsPage';

export function App() {
	const [results, setResults] = useState();
	const [hide, setHide] = useState(false);
	const [photoResult, setPhotoResult] = useState();

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/uitls/api.js
		searchArtworks(query).then((json) => {
			setResults(json.data);
		});
	}

	function showDetails({ image, altText }) {
		setHide(true);
		setPhotoResult({
			image: image,
			altText: altText,
		});
	}

	function goBack() {
		setHide(false);
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>

			{!hide ? (
				<>
					<SearchForm onSearchSubmit={onSearchSubmit} />
					{results?.map((result) => {
						return (
							<Results
								key={result.id}
								altText={result.thumbnail.alt_text}
								id={result.id}
								image={result.image_id}
								name={result.artist_title}
								showDetails={showDetails}
								title={result.title}
							/>
						);
					})}
				</>
			) : (
				<ImageDetailsPage
					altText={photoResult.altText}
					goBack={goBack}
					image={photoResult.image}
				/>
			)}
			<Footer />
		</div>
	);
}
