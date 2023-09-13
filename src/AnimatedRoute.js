import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Components/HomePage";
import MappingArray from "./Day/Day6__MappingArray/Components/MappingArray";

const AnimatedRoute = () => {
	const location = useLocation();
	return (
		<Routes location={location} key={location.pathname}>
			<Route path="/" element={<HomePage />}></Route>
			<Route path="/day6" element={<MappingArray />}></Route>
		</Routes>
	);
};

export default AnimatedRoute;
