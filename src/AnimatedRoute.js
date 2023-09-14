import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Components/HomePage";
import MappingArray from "./Day/Day6__MappingArray/Components/MappingArray";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "./Components/AnimatedPage";

const AnimatedRoute = () => {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<HomePage />}></Route>
				<Route
					path="/day6"
					element={<AnimatedPage children={<MappingArray />} />}
				></Route>
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoute;
