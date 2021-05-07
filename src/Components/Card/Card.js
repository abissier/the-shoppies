import { useState } from 'react';

function Card({ poster, title, plot, director, actors, releaseDate, result, setResult }) {
	const [ results, setResults ] = useState(result);

	// delete item from results
	const handleDelete = (event) => {
		let movieName = event.target.value;
		let newResults = results.filter((item) => item.Title !== movieName);
		setResult([ ...newResults ]);
	};

	// set favorite movies to local storage if not already there
	const handleSave = (event) => {
		let movieTitle = event.target.value;
		if (!localStorage.getItem(movieTitle)) {
			let movieObject = results.filter((result) => result.Title === movieTitle);
			let storeMovie = {
				poster: movieObject[0].Poster,
				actors: movieObject[0].Actors,
				title: movieObject[0].Title,
				plot: movieObject[0].Plot,
				director: movieObject[0].Director,
				releaseDate: movieObject[0].Released
			};
			localStorage.setItem(movieTitle, JSON.stringify(storeMovie));
		} else {
			console.log('already saved');
		}
	};

	return (
		<article className="movie-card">
			<div className="movie-card-btns">
				<button value={title} onClick={handleDelete}>
					X
				</button>
				<button value={title} onClick={handleSave}>
					Heart
				</button>
			</div>
			<div className="movie-info">
				<img src={poster} alt={title} />
				<h1>{title}</h1>
				<p>{releaseDate}</p>
				<p>{director}</p>
				<p>{actors}</p>
				<p>{plot}</p>
			</div>
		</article>
	);
}

export default Card;
