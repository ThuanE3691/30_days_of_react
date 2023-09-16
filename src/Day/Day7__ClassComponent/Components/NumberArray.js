import React from "react";
import HiddenContent from "../../../Animation/HiddenContent";
import Cell from "./Cell";

class NumberArray extends React.Component {
	isPrime = (value) => {
		if (value === 0 || value === 1) return false;
		for (let i = 2; i <= Math.sqrt(value); i++) {
			if (value % i === 0) return false;
		}

		return true;
	};

	getType = (value) => {
		if (this.isPrime(value)) return "primeCell";
		if (value % 2 === 0) return "evenCell";
		return "oddCell";
	};

	generateNumber = (min = 0, max = 31) => {
		let list_num = [];
		for (let i = min; i <= max; i++) {
			list_num.push({
				value: i,
				cellType: this.getType(i),
			});
		}

		return list_num;
	};
	render() {
		const list_num = this.generateNumber();

		return (
			<HiddenContent title={"Exercise 1 - Number Array"}>
				<main className="flex__center flex-col">
					<div className="font-mono text-[18px]">Number generator</div>
					<div className="flex items-center justify-center mt-4 ">
						<div className="grid grid-cols-8 gap-px">
							{list_num.map((item) => {
								const data = { ...item };
								return <Cell data={data} key={item.value}></Cell>;
							})}
						</div>
					</div>
				</main>
			</HiddenContent>
		);
	}
}

export default NumberArray;
