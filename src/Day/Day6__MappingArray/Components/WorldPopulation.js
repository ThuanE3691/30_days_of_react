import { tenHighestPopulation } from "../Data/topWPD";

const calculateWidthPercentage = (max_width, target_width) => {
	return Math.floor((target_width / max_width) * 100);
};

const Row = ({ country, length, population }) => {
	return (
		<>
			<p className="font-mono font-semibold text-[16px]">
				{country.toUpperCase()}
			</p>
			<div
				className={`h-[24px] bg-[#FFA500] col-span-5 rounded-sm`}
				style={{ width: length + "px" }}
			></div>
			<p className="font-mono font-semibold text-[16px]">
				{population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
			</p>
		</>
	);
};

const WorldPopulation = () => {
	const width_factor = 5;
	tenHighestPopulation.forEach((item) => {
		item.length =
			calculateWidthPercentage(
				tenHighestPopulation[0].population,
				item.population
			) * width_factor;
	});

	return (
		<div className="mt-4 flex flex-col items-center justify-center mb-10">
			<p className="text-[32px]">World Population</p>
			<p className="text-[12px]">Ten most populated countries</p>
			<div className="grid grid-cols-7 gap-2 items-start justify-items-start mt-6">
				{tenHighestPopulation.map((ranked) => {
					return (
						<Row
							country={ranked.country}
							length={ranked.length}
							population={ranked.population}
						></Row>
					);
				})}
			</div>
		</div>
	);
};

export default WorldPopulation;