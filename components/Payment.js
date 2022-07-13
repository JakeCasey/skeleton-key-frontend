import gql from "graphql-tag";
import {endpoint, prodEndPoint} from "../config";
import {useState, useEffect} from "react";
import {plans, testPlans} from "../lib/helpers";
import Logo from "./svg/Logo";
import Toggle from "./ui/Toggle";
import IconChevron from "./icons/IconChevron";
import Background from "./ui/Background";
import Link from "next/link";
import BackgroundInline from "./ui/BackgroundInline";
import BackgroundPattern from "./ui/BackgroundPattern";
import PlanIcon from "./ui/PlanIcon";

let endpointUrl = process.env.NODE_ENV === "development" ? endpoint : prodEndPoint;

let selectedPlans = process.env.NODE_ENV === "development" ? testPlans : plans;

let Checkout = () => {
	const [annual, setAnnual] = useState(true);
	return (
		<div className="relative items-center justify-center h-screen overflow-scroll md:flex border-ds-primary">
			<BackgroundPattern
				className={`opacity-20`}
				width={`w-full`}
				bgColor={`bg-gradient-to-r from-ds-gray to-ds-dkgray`}
			/>
			<div className="bottom-0 right-0 z-10 p-6 md:fixed">
				<div className="h-10 ml-2 -mb-10 md:ml-0 md:mb-2 md:h-8 md:mb-0 text-ds-primary">
					<Logo />
				</div>
			</div>
			<div data-section="subscribe" className="relative z-05">
				<div className="w-full max-w-6xl px-8 py-8 mx-auto space-y-8 lg:py-10">
					<div className="flex flex-col space-y-6 md:space-y-0 border-ds-primary md:flex-row md:justify-between md:items-center">
						<div>
							<h1 className="ds-heading">Subscribe</h1>
							<p className="text-ds-primary">Enjoy a 60-day Money Back Guarantee</p>
						</div>
						<div>
							<Toggle value={annual} setValue={setAnnual} label="Pay Annually" className="" />
						</div>
					</div>
					<div className="">
						<DirigiblePlans annual={annual} selectedPlans={selectedPlans} />
					</div>
					<div className="flex items-center justify-center">
						<Link href={"https://getdirigible.com/pricing/"}>
							<span className="cursor-pointer pill">Compare Plans</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

let DirigiblePlans = ({annual, selectedPlans}) => {
	return (
		<div className="space-y-4 md:flex md:space-x-4 md:space-y-0">
			{selectedPlans &&
				Object.keys(selectedPlans.dirigible).map((plan) => (
					<Plan annual={annual} plan={selectedPlans.dirigible[plan]} planName={plan} />
				))}
		</div>
	);
};

let BBIPlans = ({annual, selectedPlans}) => {
	return (
		<div className="space-y-4 md:flex md:space-x-4 md:space-y-0">
			{selectedPlans && (
				<div className="flex justify-between max-w-4xl mt-6">
					{Object.keys(selectedPlans.bbi).map((plan) => (
						<BBIPlan plan={selectedPlans.bbi[plan]} planName={plan} annual={annual} />
					))}
				</div>
			)}
		</div>
	);
};

let BBIPlan = ({plan, planName, annual}) => {
	return (
		<div key={planName} className={`w-full md:w-1/3 ${plan.copy.featured ? "" : "md:pt-6"}`}>
			{/* Yearly with calculated per month and actual price*/}
			<div
				className={`bg-white relative border-t-8 ${
					plan.copy.featured ? "border-bbi-primary" : "border-ds-dkgray"
				} `}
			>
				<BackgroundInline
					bgImg={plan.copy.bgImg}
					//	bgColor="bg-gradient-to-r from-white to-ds-dkgray"
					bgColor="bg-bbi-secondar opacity-0"
					foregroundColor="text-white"
				/>

				<div data-section="content" className="relative z-20">
					{plan.copy.featured && (
						<div className="w-full pt-2 pb-4 text-white bg-bbi-primary">
							<p className="text-sm text-center strong">Most Popular</p>
						</div>
					)}
					<div className="p-6 space-y-4 text-center border-b">
						<div className="space-y-1">
							<PlanIcon
								icon={plan.copy.icon}
								className={`mx-auto text-bbi-primary ${plan.copy.featured ? "h-14" : "h-8"}`}
							/>
							<h2 className="md:text-3xl ds-subheading">
								<span>{plan.copy.name}</span>
							</h2>
						</div>

						<div className="space-y-2 ">
							<div className="flex items-center justify-center space-x-1 text-bbi-primary">
								<p className="flex items-center space-x-1">
									<span className="text-sm">$</span>
									<span className="text-4xl">
										{annual ? plan.yearly.perMonth : plan.monthly.perMonth}
									</span>
								</p>
								<p className="text-xs opacity-60">/mo</p>
							</div>
							{annual && <p className="text-xs">${plan.yearly.billedAt} Billed Yearly</p>}
						</div>
					</div>
					<div className="p-6 space-y-2 text-center">
						<h3 className="text-lg leading-tight">{plan.copy.headline}</h3>
					</div>
					<div className="p-6 space-y-2 text-center border-t">
						<p className="text-sm">{plan.copy.subheadline}</p>
					</div>
					<div className="p-4 pt-0">
						{planName == "altitude" ? (
							<div>
								<Link href={"https://mydirigible.com/e-commerce-websites/"}>
									<button
										className={
											plan.copy.featured
												? "flex items-center justify-center w-full px-4 py-4 text-white bg-ds-primary group"
												: "flex items-center justify-center w-full px-4 py-4 border-2 border-ds-primary text-ds-primary group"
										}
										type="submit"
									>
										<span className="relative">
											<span className="group-hover:pr-6">Talk to Us</span>
											<span className="absolute right-0 h-8 -translate-y-1/2 opacity-0 top-1/2 group-hover:opacity-100">
												<IconChevron />
											</span>
										</span>
									</button>
								</Link>
							</div>
						) : (
							<div>
								{annual && <CheckoutButton priceId={plan.yearly.priceId} copy={plan.copy} />}
								{!annual && <CheckoutButton priceId={plan.monthly.priceId} copy={plan.copy} />}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

let Plan = ({plan, planName, annual}) => {
	return (
		<div key={planName} className={`w-full md:w-1/3 ${plan.copy.featured ? "" : "md:pt-6"}`}>
			{/* Yearly with calculated per month and actual price*/}
			<div
				className={`bg-white relative border-t-8 ${
					plan.copy.featured ? "border-ds-primary" : "border-ds-dkgray"
				} `}
			>
				<BackgroundInline
					bgImg={plan.copy.bgImg}
					//	bgColor="bg-gradient-to-r from-white to-ds-dkgray"
					bgColor="bg-ds-yellow opacity-0"
					foregroundColor="text-white"
				/>

				<div data-section="content" className="relative z-20">
					{plan.copy.featured && (
						<div className="w-full pt-2 pb-4 text-white bg-ds-primary">
							<p className="text-sm text-center strong">Most Popular</p>
						</div>
					)}
					<div className="p-6 space-y-4 text-center border-b">
						<div className="space-y-1">
							<PlanIcon
								icon={plan.copy.icon}
								className={`mx-auto text-ds-primary ${plan.copy.featured ? "h-14" : "h-8"}`}
							/>
							<h2 className="md:text-3xl ds-subheading">
								<span>{plan.copy.name}</span>
							</h2>
						</div>

						<div className="space-y-2 ">
							<div className="flex items-center justify-center space-x-1 text-ds-primary">
								<p className="flex items-center space-x-1">
									<span className="text-sm">$</span>
									<span className="text-4xl">
										{annual ? plan.yearly.perMonth : plan.monthly.perMonth}
									</span>
								</p>
								<p className="text-xs opacity-60">/mo</p>
							</div>
							{annual && <p className="text-xs">${plan.yearly.billedAt} Billed Yearly</p>}
						</div>
					</div>
					<div className="p-6 space-y-2 text-center">
						<h3 className="text-lg leading-tight">{plan.copy.headline}</h3>
					</div>
					<div className="p-6 space-y-2 text-center border-t">
						<p className="text-sm">{plan.copy.subheadline}</p>
					</div>
					<div className="p-4 pt-0">
						{planName == "altitude" ? (
							<div>
								<Link href={"https://mydirigible.com/e-commerce-websites/"}>
									<button
										className={
											plan.copy.featured
												? "flex items-center justify-center w-full px-4 py-4 text-white bg-ds-primary group"
												: "flex items-center justify-center w-full px-4 py-4 border-2 border-ds-primary text-ds-primary group"
										}
										type="submit"
									>
										<span className="relative">
											<span className="group-hover:pr-6">Talk to Us</span>
											<span className="absolute right-0 h-8 -translate-y-1/2 opacity-0 top-1/2 group-hover:opacity-100">
												<IconChevron />
											</span>
										</span>
									</button>
								</Link>
							</div>
						) : (
							<div>
								{annual && <CheckoutButton priceId={plan.yearly.priceId} copy={plan.copy} />}
								{!annual && <CheckoutButton priceId={plan.monthly.priceId} copy={plan.copy} />}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

let CheckoutButton = ({priceId, copy}) => {
	return (
		<form action={`${endpointUrl}/create-checkout-session`} method="POST">
			<input type="hidden" name="priceId" value={`${priceId}`} />
			<button
				className={
					copy.featured
						? "flex items-center justify-center w-full px-4 py-4 text-white bg-ds-primary group"
						: "flex items-center justify-center w-full px-4 py-4 border-2 border-ds-primary text-ds-primary group"
				}
				type="submit"
			>
				<span className="relative">
					<span className="group-hover:pr-6">{copy.buttonText}</span>
					<span className="absolute right-0 h-8 -translate-y-1/2 opacity-0 top-1/2 group-hover:opacity-100">
						<IconChevron />
					</span>
				</span>
			</button>
		</form>
	);
};

export default Checkout;
