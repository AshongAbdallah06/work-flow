import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
	const [counter, setCounter] = useState(0);

	const Addition = () => {
		setCounter(counter + 1);
	};

	const Subtraction = () => {
		setCounter(counter - 1);
	};

	const Reseting = () => {
		setCounter(0);
	};

	return (
		<div className="App">
			<h1>{counter}</h1>

			<button onClick={Addition}>Addition</button>
			<button onClick={Subtraction}>Subtraction</button>
			<button onClick={Reseting}>Reseting</button>
		</div>
	);
}

export default App;
