import ColorArray from "./ColorArray";
import NumberArray from "./NumberArray";
import WorldPopulation from "./WorldPopulation";

const MappingArray = () => {
	return (
		<main className="flex flex-col justify-center items-center bg-[#D6D9E0]">
			<NumberArray></NumberArray>
			<ColorArray></ColorArray>
			<WorldPopulation></WorldPopulation>
		</main>
	);
};

export default MappingArray;
