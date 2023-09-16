import React from "react";
import Cell from "./Cell";
import HiddenContent from "../../../Animation/HiddenContent";

class ColorArray extends React.Component {
	generateColor = (min = 0, max = 31) => {
		let list_colors = [];
		for (let i = min; i <= max; i++) {
			list_colors.push({
				value:
					"#" +
					Math.floor(Math.random() * 16777215)
						.toString(16)
						.padStart(6, "0")
						.toUpperCase(),
				cellType: "colorCell",
			});
		}
		return list_colors;
	};

	render() {
		const list_colors = this.generateColor();
		return (
			<HiddenContent title={"Exercise 2 - Hexadecimal Colors Generator"}>
				<div className="flex__center flex-col">
					<p className="flex-mono font-bold">Hexadecimal Colors</p>
					<div className="flex items-center justify-center mt-4 ">
						<div className="grid grid-cols-8 gap-px">
							{list_colors.map((item) => {
								const data = { ...item };
								return <Cell data={data} key={item.value}></Cell>;
							})}
						</div>
					</div>
				</div>
			</HiddenContent>
		);
	}
}

export default ColorArray;
