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
			console.log(json.data);
			setResults(json.data);
		});
	}

	function showDetails(event) {
		console.log(event);
		setHide(true);
		setPhotoResult(event);
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			{!hide ? (
				results?.map((result) => {
					return (
						<Results
							key={result.id}
							id={result.id}
							image={result.image_id}
							name={result.artist_title}
							showDetails={showDetails}
							title={result.title}
						/>
					);
				})
			) : (
				<ImageDetailsPage image={photoResult} />
			)}
			<Footer />
		</div>
	);
}
