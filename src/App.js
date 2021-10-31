import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MySkills from './components/MySkills/MySkills';

function App() {
  	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route 
						component={Home}
						exact
						path="/Portfolio/"
					/>
					<Route 
						component={About}
						exact
						path="/Portfolio/About"
					/>
					<Route 
						component={MySkills}
						exact
						path="/Portfolio/MySkills"
					/>
					<Route 
						component={Contact}
						exact
						path="/Portfolio/Contact"
					/>
				</Switch>
			</Router>
		</div>
  	)
}

export default App;
