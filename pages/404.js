import Background from "../components/ui/Background";

export default function Custom404() {
	return (
		<div className="relative w-screen h-screen">
			<Background bgImg={1} />
			<div className="flex items-center justify-between w-full h-full">
				<div className="w-full max-w-3xl px-6 mx-auto">
					<div className="max-w-lg">
						<div className="space-y-2 text-ds-navy">
							<h1 className="ds-heading text-ds-navy">
								<span className="animate-blink blink-4">P</span>ag
								<span className="animate-blink blink-5">e</span>{" "}
								<span className="animate-blink">N</span>ot F
								<span className="animate-blink blink-2">o</span>u
								<span className="animate-blink blink-1">n</span>d
							</h1>
							<h2 className="ds-subheading">
								<span className="animate-blink blink-2">4</span>
								<span className="animate-blink">0</span>
								<span className="animate-blink blink-5">4</span> Error
							</h2>
							<p>
								Looks like we couldn't find the page you're looking for. Wanna check that URL again?
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
