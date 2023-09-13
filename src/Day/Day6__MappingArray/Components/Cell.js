const Cell = ({ value, cellType }) => {
	const base_styles =
		"text-center text-white font-mono w-[64px] h-[64px] text-[20px] flex items-center justify-center";
	const cellStyles = {
		evenCell: " bg-[#21BF73]",
		oddCell: " bg-[#FDDB3A]",
		primeCell: " bg-[#FD5E5A]",
	};

	return <div className={base_styles + cellStyles[cellType]}>{value}</div>;
};

export default Cell;
