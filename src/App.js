import AnimatedRoute from "./Animation/AnimatedRoute";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<div className="App bg-[#D6D9E0] overflow-auto">
			<Router>
				<AnimatedRoute></AnimatedRoute>
			</Router>
		</div>
	);
}

export default App;
