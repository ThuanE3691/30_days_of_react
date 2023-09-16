import { tenHighestPopulation } from "../Data/topWPD";
import HiddenContent from "../../../Animation/HiddenContent";
import React from "react";

class Row extends React.Component {
	render() {
		const { country, length, population } = this.props.data;
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
	}
}

class WorldPopulation extends React.Component {
	calculateWidthPercentage = (max_width, target_width) => {
		return Math.floor((target_width / max_width) * 100);
	};

	render() {
		const width_factor = 5;
		tenHighestPopulation.forEach((item) => {
			item.length =
				this.calculateWidthPercentage(
					tenHighestPopulation[0].population,
					item.population
				) * width_factor;
		});

		return (
			<div className="flex flex-col justify-center">
				<HiddenContent title={"Exercise 3 - Plot World Population Ranked"}>
					<div className="flex flex-col items-center">
						<p className="text-[32px]">World Population</p>
						<p className="text-[12px]">Ten most populated countries</p>
						<div className="grid grid-cols-7 gap-2 items-start justify-items-start mt-6">
							{tenHighestPopulation.map((ranked) => {
								const data = { ...ranked };
								return <Row data={data}></Row>;
							})}
						</div>
					</div>
				</HiddenContent>
			</div>
		);
	}
}

export default WorldPopulation;
