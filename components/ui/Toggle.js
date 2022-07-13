let Toggle = ({value, setValue, label, className, toggle = ""}) => {
	return (
		<div className={`${className}`}>
			<div
				onClick={() => setValue(!value)}
				for="toggle"
				className="flex items-center space-x-2 cursor-pointer"
			>
				<div className="relative">
					<input
						type="checkbox"
						checked={value ? true : false}
						id="toggle"
						className="sr-only toggle"
					/>
					<div className="block h-8 rounded-full toggle-bg bg-ds-dkgray w-14"></div>
					<div className="absolute w-6 h-6 transition bg-white rounded-full dot left-1 top-1"></div>
				</div>
				<div className="">{label}</div>
			</div>
		</div>
	);
};

export default Toggle;
