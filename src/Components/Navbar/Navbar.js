import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div>
			<Link to="/top5">
				<button className="link-btn">See my top 5</button>
			</Link>
			<Link to="/search">
				<button className="link-btn">Search Films</button>
			</Link>
		</div>
	);
}

export default Navbar;
