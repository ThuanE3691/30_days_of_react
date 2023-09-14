import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

const pageVariants = {
	enter: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const AnimatedPage = ({ children }) => {
	const [ref, { height }] = useMeasure();

	return (
		<div className=" overflow-auto relative flex items-start justify-center bg-main__bg w-full h-screen">
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
				}}
				exit={{ width: 0, opacity: 0, height: 0 }}
				transition={{
					duration: 0.5,
					delay: 0,
					opacity: {
						delay: 0.2,
						duration: 0.4,
					},
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
					<h3 className="sub__title">Day 6 - Mapping Array</h3>
					<div className="w-full h-[1px] bg-black rounded-sm mt-4"></div>
					<AnimatePresence mode="popLayout">{children}</AnimatePresence>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default AnimatedPage;
