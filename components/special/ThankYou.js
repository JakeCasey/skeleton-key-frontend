import Link from "next/link";
import {useWindowSize} from "react-use";
import Confetti from "react-confetti";
import Background from "../ui/Background";
import IconChevron from "../icons/IconChevron";

let ThankYou = () => {
	const {width, height} = useWindowSize();

	return (
		<div className="w-screen h-screen">
			<Background bgColor="bg-ds-yellow" />
			<div className="flex items-center justify-between w-full h-full">
				{height != Infinity && width !== Infinity && (
					<Confetti
						width={width}
						height={height}
						colors={[
							"#7f221d",
							"#aa2c26",
							"#ffd024",
							"#244e4c",
							"#449996",
							"#62c6c5",
							"#284181",
							"#52679a",
							"#191345",
							"#fbae48",
						]}
					/>
				)}
				<div className="w-full max-w-3xl px-6 mx-auto">
					<div className="max-w-lg">
						<div className="space-y-2 text-ds-navy">
							<h1 className="ds-heading text-ds-navy">Thank You!</h1>
							<h2 className="ds-subheading">Let's dive right in, shall we?</h2>
							<p>
								We hope you're as excited to get creating as we are to have you on board. Go ahead
								and click that button below and let's get to it.
							</p>
							<div className="relative z-50 inline-block pt-2">
								<Link href={"/"}>
									<a className="button">
										<span>Create Site</span>
										<IconChevron />
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThankYou;
