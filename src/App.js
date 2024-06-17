import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
	const [counter, setCounter] = useState(0);

	const Add = () => {
		setCounter(counter + 1);
	};

	const Subtract = () => {
		setCounter(counter - 1);
	};

	const reset = () => {
		setCounter(0);
	};

	return (
		<div className="App">
			<h1>{counter}</h1>

			<button onClick={Add}>Add</button>
			<button onClick={Subtract}>Subtract</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
}

export default App;
