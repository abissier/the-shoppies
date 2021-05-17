import { useEffect, useState } from 'react';
import Card from '../Card/Card';

function Top() {
	const [ savedMovies, setSavedMovies ] = useState([]);

	useEffect(() => {
		for (var i = 0; i < localStorage.length; i++) {
			let localStorageMovies = [ localStorage.getItem(localStorage.key(i)) ];
			setSavedMovies((savedMovies) => [ ...savedMovies, JSON.parse(localStorageMovies) ]);
		}
	}, []);

	// delete film from local storage
	const handleDeleteSaved = (event) => {
		let movieName = event.target.attributes[3].value;
		localStorage.removeItem(movieName);
	};

	return (
		<main>
			<h1>- Final Cut -</h1>
			<section className="movie-card-container">
				{savedMovies.length > 0 ? (
					savedMovies.map((movie) => {
						return (
							<Card
								key={movie.title}
								poster={movie.poster}
								title={movie.title}
								releaseDate={movie.releaseDate}
								director={movie.director}
								actors={movie.actors}
								plot={movie.plot}
								handleDeleteSaved={handleDeleteSaved}
							/>
						);
					})
				) : (
					<h1>No films made the cut, search films to get started</h1>
				)}
			</section>
		</main>
	);
}

export default Top;
