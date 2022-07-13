import React from "react";
let IconRightAngle = ({color = "currentColor", className}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="10"
			height="20"
			viewBox="0 0 10 20"
			className={`w-auto h-full ${className}`}
		>
			<path fill={color} d="M10 0L10 20 0 10 10 0z"></path>
		</svg>
	);
};
export default IconRightAngle;
