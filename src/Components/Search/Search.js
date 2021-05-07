import { useState } from 'react';
import Card from '../Card/Card';
import API from '../../utils/API';

function Search() {
	const [ query, setQuery ] = useState('');
	const [ result, setResult ] = useState([]);

	const handleFormSubmit = (event) => {
		event.preventDefault();
		searchMovies(query);
	};

	const searchMovies = (query) => {
		API.search(query).then((res) => setResult([ ...result, res.data ])).catch((err) => console.log(err));
	};

	return (
		<div>
			<h1>Search by movie title</h1>
			<input
				type="text"
				onChange={(e) => {
					setQuery(e.target.value);
				}}
				placeholder="search by movie name"
			/>
			<button type="submit" onClick={handleFormSubmit}>
				Search
			</button>
			<section className="movie-card-container">
				{result.map((item) => {
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
							setResult={setResult}
						/>
					);
				})}
			</section>
		</div>
	);
}

export default Search;
