import Pattern from "../svg/Pattern";

let BackgroundPattern = ({
	className,
	bgColor = "bg-ds-dkgray",
	foregroundColor = "text-ds-gray",
	width = "w-1/4",
}) => {
	return (
		<div
			data-section="background"
			className={`hidden md:block  fixed top-0 left-0 -z-10 w-full h-full ${className}`}
		>
			<div className={`absolute right-0 top-0 ${width} h-full z-10 ${bgColor}`}>
				<div className={`absolute right-0 w-full h-full bottom-0 ${foregroundColor}`}>
					<Pattern className={"min-h-full min-w-full"} />
				</div>
			</div>
		</div>
	);
};

export default BackgroundPattern;
