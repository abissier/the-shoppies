import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Saved from './Pages/Saved/Saved';
import Searchpage from './Pages/Searchpage/Searchpage';
import Navbar from './Components/Navbar/Navbar';

import './App.css';

function App() {
	return (
		<div className="container">
			<Router>
				<div>
					<Navbar />
					<Route exact path="/" component={Homepage} />
					<Route exact path="/search" component={Searchpage} />
					<Route exact path="/saved" component={Saved} />
				</div>
			</Router>
		</div>
	);
}

export default App;
