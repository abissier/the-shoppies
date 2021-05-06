import { BrowserRouter as Router, Route } from 'react-router-dom';
import Title from './Components/Title/Title';
import Navbar from './Components/Navbar/Navbar';
import AboutCard from './Components/AboutCard/AboutCard';
import Start from './Components/Start/Start';
import Search from './Components/Search/Search';
import Top from './Components/Top/Top';

import './App.css';

function App() {
	return (
		<div className="container">
			<Router>
				<nav className="navbar">
					<Navbar />
				</nav>
				<Route exact path="/">
					<div className="title">
						<Title />
					</div>
					<div className="about-card">
						<AboutCard />
					</div>
					<div className="start-btn">
						<Start />
					</div>
				</Route>
				<Route exact path="/search">
					<Search />
				</Route>
				<Route exact path="/top5">
					<Top />
				</Route>
			</Router>
		</div>
	);
}

export default App;
