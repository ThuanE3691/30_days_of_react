import ColorArray from "./ColorArray";
import NumberArray from "./NumberArray";
import WorldPopulation from "./WorldPopulation";

const ClassComponent = () => {
	return (
		<main className="flex flex-col mt-4 mb-8 gap-y-4">
			<NumberArray></NumberArray>
			<ColorArray></ColorArray>
			<WorldPopulation></WorldPopulation>
		</main>
	);
};

export default ClassComponent;
