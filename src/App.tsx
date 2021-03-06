import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Row from "./layout/flexRow";
import Inline from "./layout/inline";

const App: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<Row width="100%" mb="4">
					<Row flex="2" bg="pink">
						<img src={logo} className="App-logo" alt="logo" />
					</Row>
					<Row flex="1" bg="green">
						<img src={logo} className="App-logo" alt="logo" />
					</Row>
					<Row flex={1 / 2}>Half Size</Row>
				</Row>
				<Row mb="5">
					<Inline color="blue">
						Edit <code>src/App.tsx</code> and save to reload.
					</Inline>
				</Row>
				<Row color="pink">
					<Inline mr="3">Click here</Inline>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</Row>
			</header>
		</div>
	);
};

export default App;
