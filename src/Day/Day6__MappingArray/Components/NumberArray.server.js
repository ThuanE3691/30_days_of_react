import Cell from "./Cell";
import { Code } from "bright";

const isPrime = (value) => {
	if (value === 0 || value === 1) return false;
	for (let i = 2; i <= Math.sqrt(value); i++) {
		if (value % i === 0) return false;
	}

	return true;
};

const getType = (value) => {
	if (isPrime(value)) return "primeCell";
	if (value % 2 === 0) return "evenCell";
	return "oddCell";
};

const generateNumber = (min = 0, max = 31) => {
	let list_num = [];
	for (let i = min; i <= max; i++) {
		list_num.push({
			value: i,
			cellType: getType(i),
		});
	}

	return list_num;
};

const NumberArray = () => {
	const list_num = generateNumber();

	return (
		<section className="flex flex-col mt-4">
			<p className="bold__text">Exercise 1</p>
			<p className="nm__text mt-4">
				<p className="bold__text">Target </p> Render Number Generator Table
			</p>
			<p className="mt-4">
				<p className="bold__text">Solution </p>
			</p>

			<p className="mt-2 nm__text">Define cell types</p>
			<main className="flex__center flex-col">
				<div className="font-mono text-[18px]">Number generator</div>
				<div className="flex items-center justify-center mt-4 ">
					<div className="grid grid-cols-8 gap-px">
						{list_num.map((item) => {
							return <Cell value={item.value} cellType={item.cellType}></Cell>;
						})}
					</div>
				</div>
			</main>
		</section>
	);
};

export default NumberArray;
