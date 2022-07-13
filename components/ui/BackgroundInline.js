import BackgroundImg from "./BackgroundImg";

let BackgroundInline = ({
	className,
	bgImg,
	bgColor = "bg-ds-navy",
	foregroundColor = "text-ds-gray",
}) => {
	return (
		<div
			data-section="background"
			className={`hidden md:block  absolute top-0 left-0 -z-10 w-full h-full ${className}`}
		>
			<div className={`absolute right-0 z-20 w-1/2 bottom-1/4 ${foregroundColor}`}>
				<div className="h-4/6">
					<BackgroundImg bgImg={bgImg} />
				</div>
			</div>
			<div className={`absolute right-0 top-0 w-1/3 h-full z-10 ${bgColor}`}></div>
		</div>
	);
};

export default BackgroundInline;
