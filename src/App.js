import AnimatedRoute from "./AnimatedRoute";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<AnimatedRoute></AnimatedRoute>
			</Router>
		</div>
	);
}

export default App;
