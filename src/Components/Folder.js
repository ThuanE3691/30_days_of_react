import folder from "../Assets/folder.png";
import { Link } from "react-router-dom";

const Folder = ({ day, content }) => {
	return (
		<Link to={`/day${day}`} key={content}>
			<div className="flex w-[260px] gap-x-2 bg-white px-4 py-4 rounded-md hover:opacity-60 transition-all duration-300 cursor-pointer">
				<img src={folder} alt="folder" className="w-8 h-8" />
				<div>
					<p className="font-inter text-sm font-semibold">Day {day}</p>
					<p className="font-inter text-xs font-medium text-[#ABB3C1] ">
						{content}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Folder;
