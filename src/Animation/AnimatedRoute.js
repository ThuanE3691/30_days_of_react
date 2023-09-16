import "../App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../Components/HomePage";
import { folders } from "../constants";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "./AnimatedPage";

const AnimatedRoute = () => {
	const location = useLocation();
	return (
		<div className="bg-main__bg">
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<HomePage />}></Route>
					{folders.map((folder) => {
						return (
							<Route
								path={`/day${folder.day}`}
								element={
									<AnimatedPage title={folder.content} day={folder.day}>
										{folder.component}
									</AnimatedPage>
								}
								key={folder.day}
							></Route>
						);
					})}
				</Routes>
			</AnimatePresence>
		</div>
	);
};

export default AnimatedRoute;
