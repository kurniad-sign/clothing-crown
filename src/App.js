import React from 'react';
import { Route } from 'react-router-dom';

import { Homepage } from './pages/homepage/Homepage.component';
import './App.css';

export const HatsPage = () => {
	return <h1>This is Hats Page</h1>;
};

function App() {
	return (
		<div>
			<Route exact path="/" component={Homepage} />
			<Route path="/hats" component={HatsPage} />
		</div>
	);
}

export default App;
