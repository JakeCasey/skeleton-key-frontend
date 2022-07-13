import Capitol from "./backgrounds/Capitol";
import Cloud from "./backgrounds/Cloud";
import Flamingo from "./backgrounds/Flamingo";

let BackgroundImg = ({className, bgImg}) => {
	let SVG = <Cloud className={className} />;
	const bg = bgImg ? bgImg : Math.floor(Math.random() * 3);
	switch (bg) {
		case 0:
			SVG = <Capitol className={className} />;
			break;
		case 1:
			SVG = <Flamingo className={className} />;
	}
	return SVG;
};

export default BackgroundImg;
