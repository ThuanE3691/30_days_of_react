import right_arrow from "../Assets/play.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

const iconVariants = {
	not_show: {
		rotate: 0,
	},
	show: {
		rotate: 90,
	},
};

const contentVariants = {
	initial: { opacity: 0, height: 0 },
	animate: {
		opacity: 1,
		height: "auto",
		transition: {
			height: {
				duration: 0.3,
			},
			opacity: {
				delay: 0.4,
				duration: 0.4,
			},
		},
	},
	exit: {
		opacity: 0,
		height: 0,
		transition: {
			opacity: {
				duration: 0.4,
			},
			height: {
				delay: 0.3,
				duration: 0.2,
			},
		},
	},
};

const HiddenContent = ({ title, children }) => {
	const posRef = useRef();
	if (posRef) if (posRef.current) console.log(posRef.current.offsetTop);
	const [showContent, setShowContent] = useState(false);
	return (
		<div className="justify-self-start" key={children}>
			<div>
				<motion.div
					className="flex items-center justify-start gap-3 click__object"
					onClick={() => setShowContent((prev) => !prev)}
					ref={posRef}
					animate={{
						y: posRef ? posRef.current : "" ? posRef.current.offsetTop : "",
					}}
					transition={{
						duration: 0.5,
						delay: 0.4,
					}}
				>
					<motion.img
						src={right_arrow}
						variants={iconVariants}
						animate={showContent ? "show" : "not_show"}
						transition={{ duration: 0.3 }}
						alt="show"
						className="w-4 h-4"
					/>
					<p className="bold__text">{title}</p>
				</motion.div>
				<AnimatePresence mode="wait">
					{showContent && (
						<motion.div
							variants={contentVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							key={children}
							layout
						>
							{children}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default HiddenContent;
