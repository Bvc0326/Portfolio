import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';

import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
				<Route 
					component={Home}
					exact
					path="/"
				/>
				<Route 
					component={Contact}
					exact
					path="/contact"
				/>
				</Switch>
			</Router>
		</div>
  	)
}

export default App;
