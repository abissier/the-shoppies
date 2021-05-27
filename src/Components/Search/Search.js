import { useState } from 'react';
import Card from '../Card/Card';
import API from '../../utils/API';

function Search() {
	const [ query, setQuery ] = useState('');
	const [ result, setResult ] = useState([]);

	// grab valid query from form and send to search movies function
	const handleFormSubmit = (event) => {
		event.preventDefault();
		if (query === '' || query.trim() === '') {
			alert('Please enter a valid movie title');
		} else {
			searchMovies(query);
		}
	};

	// send query to API
	const searchMovies = (query) => {
		API.search(query).then((res) => setResult([ ...result, res.data ]));
	};

	// delete item from results
	const handleDelete = (event) => {
		let movieName = event.target.attributes[3].value;
		let newResults = result.filter((item) => item.Title !== movieName);
		setResult([ ...newResults ]);
	};

	return (
		<main>
			<h1>- Search by movie title -</h1>
			<form>
				<input
					type="text"
					onChange={(e) => {
						setQuery(e.target.value);
					}}
					placeholder="Enter movie name"
				/>
				<button type="submit" className="search-btn" onClick={handleFormSubmit}>
					<img src="https://img.icons8.com/pastel-glyph/64/000000/clapperboard--v2.png" alt="clapboard" />
				</button>
			</form>
			<section className="movie-card-container">
				{result ? (
					result.map((item) => {
						return (
							<Card
								key={item.Title}
								poster={item.Poster}
								title={item.Title}
								releaseDate={item.Released}
								director={item.Director}
								actors={item.Actors}
								plot={item.Plot}
								result={result}
								handleDelete={handleDelete}
							/>
						);
					})
				) : (
					0
				)}
			</section>
		</main>
	);
}

export default Search;
