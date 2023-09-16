import ColorArray from "./ColorArray";
import NumberArray from "./NumberArray.js";
import WorldPopulation from "./WorldPopulation";

const MappingArray = () => {
	return (
		<main className="flex flex-col ">
			<NumberArray></NumberArray>
			<ColorArray></ColorArray>
			<WorldPopulation></WorldPopulation>
		</main>
	);
};

export default MappingArray;
