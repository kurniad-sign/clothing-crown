import React from 'react';
import { Route } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component';

import './App.css';

function App() {
	return (
		<div>
			<Route exact path="/" component={Homepage} />
			<Route path="/shop" component={ShopPage} />
		</div>
	);
}

export default App;
