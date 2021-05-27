import { useState } from 'react';

function Card({ poster, title, director, releaseDate, result, handleDelete, handleDeleteSaved }) {
	const [ results, setResults ] = useState(result);

	// set favorite movies to local storage if not already there and has not met top 5
	function handleSave(event) {
		let movieTitle = event.target.attributes[3].value;
		if (localStorage.getItem(movieTitle)) {
			alert('This movie has already been saved');
		} else if (localStorage.length >= 5) {
			alert("You've already saved 5 movies");
		} else {
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
			handleDelete(event);
			notifyUser(event);
		}
	}

	function notifyUser(event) {
		alert(event.target.attributes[3].value + ' was successfully saved!');
	}

	return (
		<div>
			<article className="movie-card">
				<div className="movie-info">
					<img src={poster} alt={title} />
					<h1>{title}</h1>
					<p>Released {releaseDate}</p>
					<p>Directed by: {director}</p>
				</div>
				<div className="movie-card-btns">
					<div className="tooltip">
						<button>
							<img
								src="https://img.icons8.com/dotty/80/000000/delete-ticket.png"
								alt="delete movie ticket"
								height="40px"
								value={title}
								onClick={handleDelete || handleDeleteSaved}
							/>
						</button>
						<span className="tooltiptext">Remove Film</span>
					</div>
					<div className="tooltip">
						<button className="save-btn">
							<img
								src="https://img.icons8.com/dotty/80/000000/add-ticket.png"
								alt="save movie ticket"
								height="40px"
								value={title}
								onClick={handleSave}
							/>{' '}
						</button>
						<span className="tooltiptext">Save Film</span>
					</div>
				</div>
			</article>
		</div>
	);
}

export default Card;
