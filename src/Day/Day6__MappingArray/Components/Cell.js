const Cell = ({ value, cellType }) => {
	const base_styles =
		"text-center text-white font-mono w-[96px] h-[96px] text-[20px] flex items-center justify-center";
	const cellBackground = {
		evenCell: "#21BF73",
		oddCell: "#FDDB3A",
		primeCell: "#FD5E5A",
		colorCell: ` ${value}`,
	};

	return (
		<div
			key={value}
			className={base_styles}
			style={{ backgroundColor: cellBackground[cellType] }}
		>
			{value}
		</div>
	);
};

export default Cell;
