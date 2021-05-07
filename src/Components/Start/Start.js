import { Link } from 'react-router-dom';

function Start() {
	return (
		<Link to="/search">
			<button className="link-btn">Let's Go!</button>
		</Link>
	);
}

export default Start;
