import React from "react";
import Altitude from "./backgrounds/Altitude";
import Takeoff from "./backgrounds/Takeoff";
import Passport from "./backgrounds/Passport";
import BetterBreeder from "./backgrounds/BetterBreeder";

let PlanIcon = ({className, icon}) => {
	let SVG = null;
	switch (icon) {
		case "takeoff":
			SVG = <Takeoff className={className} />;
			break;
		case "altitude":
			SVG = <Altitude className={className} />;
			break;
		case "passport":
			SVG = <Passport className={className} />;
			break;
		case "bbi":
			SVG = <BetterBreeder className={className} />;
			break;
	}
	return SVG;
};

export default PlanIcon;
