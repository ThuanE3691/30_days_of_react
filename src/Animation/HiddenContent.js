import right_arrow from "../Assets/play.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const iconVariants = {
	not_show: {
		rotate: 0,
	},
	show: {
		rotate: 90,
	},
};

const HiddenContent = ({ title, children }) => {
	const [showContent, setShowContent] = useState(false);
	return (
		<div className="justify-self-start" key={children}>
			<div>
				<div
					className="flex items-center justify-start gap-3 click__object"
					onClick={() => setShowContent((prev) => !prev)}
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
				</div>
				<AnimatePresence mode="wait">
					{showContent && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
							key={children}
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
