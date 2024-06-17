import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
	const [counter, setCounter] = useState(0);

	const increase = () => {
		setCounter(counter + 1);
	};

	const decrease = () => {
		setCounter(counter - 1);
	};

	const reset = () => {
		setCounter(0);
	};

	return (
		<div className="App">
			<h1>{counter}</h1>

			<button onClick={increase}>Increase</button>
			<button onClick={decrease}>Decrease</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
}

export default App;
