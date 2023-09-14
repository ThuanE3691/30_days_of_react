import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

const pageVariants = {
	enter: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: 0.6,
			ease: "easeInOut",
		},
	},
	exit: { opacity: 0 },
};

const animateTransition = {
	duration: 1,
	opacity: {
		delay: 0.2,
		duration: 0.6,
	},
	ease: "easeInOut",
	type: "tween",
};

const exitTransition = {
	duration: 1,
	opacity: {
		duration: 0.4,
		delay: 0.2,
	},
	ease: "anticipate",
	type: "tween",
};

const AnimatedPage = ({ day, title, children }) => {
	const [ref, { height }] = useMeasure();

	return (
		<div className=" overflow-auto relative flex items-start justify-center w-full h-screen">
			<motion.div
				layout
				className={`${
					height ? "relative" : "relative"
				}  bg-white px-8 py-5 overflow-hidden mt-8 rounded-md shadow-2xl`}
				initial={{ width: 0, opacity: 0, height: 0 }}
				animate={{
					width: "1200px",
					opacity: 1,
					height: height,
					transition: animateTransition,
				}}
				exit={{
					width: 0,
					opacity: 0,
					height: 0,
					transition: exitTransition,
				}}
				key={children}
			>
				<motion.div
					variants={pageVariants}
					initial="enter"
					animate="animate"
					exit="exit"
					className="overflow-hidden"
					key="content-children"
					ref={ref}
				>
					<h1 className="main__title">30 Days Of React</h1>
					<h3 className="sub__title">
						Day {day} - {title}
					</h3>
					<div className="w-full h-[1px] bg-black rounded-sm mt-4"></div>
					<AnimatePresence mode="popLayout">{children}</AnimatePresence>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default AnimatedPage;
