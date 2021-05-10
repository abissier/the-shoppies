import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav>
			<Link to="/" style={{ textDecoration: 'none' }}>
				<button className="button border">The Shoppies</button>
			</Link>

			<Link to="/saved" style={{ textDecoration: 'none' }}>
				<button className="button border">My top 5</button>
			</Link>
			<Link to="/search" style={{ textDecoration: 'none' }}>
				<button className="button border">Search Films</button>
			</Link>
		</nav>
	);
}

export default Navbar;
