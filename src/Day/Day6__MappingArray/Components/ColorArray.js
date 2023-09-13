import Cell from "./Cell";

const generateColor = (min = 0, max = 31) => {
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

const ColorArray = () => {
	const list_colors = generateColor();

	return (
		<section className="mt-4 flex flex-col items-center">
			<div className="font-mono text-[18px]">Hexadecimal colors</div>
			<div className="flex items-center justify-center mt-4 ">
				<div className="grid grid-cols-8 gap-px">
					{list_colors.map((item) => {
						return <Cell value={item.value} cellType={item.cellType}></Cell>;
					})}
				</div>
			</div>
		</section>
	);
};

export default ColorArray;
