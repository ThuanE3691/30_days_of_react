import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
	enter: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const fadeVariants = {
	enter: { width: "0px", opacity: 0 },
	animate: { width: "1200px", opacity: 1 },
	exit: { width: "0px", opacity: 0 },
};

const AnimatedPage = ({ children }) => {
	return (
		<div className="flex__center bg-sub w-full h-full">
			<AnimatePresence>
				<motion.div
					layout
					className="bg-white px-8 h-full"
					variants={fadeVariants}
					initial="enter"
					animate="animate"
					exit="exit"
					transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
					key="page-fade"
				>
					<motion.div
						variants={pageVariants}
						initial="enter"
						animate="animate"
						exit="exit"
						transition={{ delay: 0.8, ease: "easeInOut", duration: 0.3 }}
					>
						<h1 className="main__title">30 Days Of React</h1>
						<h3 className="sub__title">Day 6 - Mapping Array</h3>
						{children}
					</motion.div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default AnimatedPage;
