import Cell from "./Cell";

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
		<section className="flex flex-col items-center justify-center">
			<h1 className="text-[30px] font-semibold font-mono">30 Days Of React</h1>
			<div className="font-mono text-[18px]">Number generator</div>
			<div className="flex items-center justify-center mt-4 ">
				<div className="grid grid-cols-8 gap-px">
					{list_num.map((item) => {
						return <Cell value={item.value} cellType={item.cellType}></Cell>;
					})}
				</div>
			</div>
		</section>
	);
};

export default NumberArray;
