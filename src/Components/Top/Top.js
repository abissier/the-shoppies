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

	return (
		<div>
			<h1>Your top 5</h1>
			<section className="movie-card-container">
				{savedMovies.map((movie) => {
					return (
						<Card
							key={movie.title}
							poster={movie.poster}
							title={movie.title}
							releaseDate={movie.released}
							director={movie.director}
							actors={movie.actors}
							plot={movie.plot}
						/>
					);
				})}
			</section>
		</div>
	);
}

export default Top;
