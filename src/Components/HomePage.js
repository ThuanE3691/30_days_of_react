import Folder from "./Folder";
import { folders } from "../constants";
import { motion } from "framer-motion";

const homePageVariants = {
	enter: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
};

const HomePage = () => {
	return (
		<motion.main
			className="flex flex-col items-center h-screen"
			variants={homePageVariants}
			initial="enter"
			animate="animate"
			exit="exit"
		>
			<h1 className="font-bold font-inter text-4xl mt-4">30 Days Of React</h1>
			<div className=" self-start ml-14 mt-8">
				<h3 className="font-bold font-inter text-3xl">Folder</h3>
				<div className="mt-8 flex items-center gap-8 flex-wrap">
					{folders.map((folder) => {
						return <Folder day={folder.day} content={folder.content}></Folder>;
					})}
				</div>
			</div>
		</motion.main>
	);
};

export default HomePage;
