import React, { Component } from 'react';
import Nav from './components/nav'
import IndexNewsList from './containers/indexNewsList'






class App extends Component {
	render() {
		return (
			<div className="wrapper">
				<Nav />
				<div className="row wrapper-row">
					<IndexNewsList />
				</div>
				<footer>1123</footer>
			</div>
		);
	}
}

export default App;
