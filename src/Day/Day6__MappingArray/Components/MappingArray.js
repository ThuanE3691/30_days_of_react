import ColorArray from "./ColorArray";
import NumberArray from "./NumberArray";
import WorldPopulation from "./WorldPopulation";

const MappingArray = () => {
	return (
		<main className="flex flex-col justify-center items-center">
			<NumberArray></NumberArray>
			<ColorArray></ColorArray>
			<WorldPopulation></WorldPopulation>
		</main>
	);
};

export default MappingArray;
