import {useState} from "react";
import gql from "graphql-tag";
import {useMutation} from "react-apollo";
import Error from "./ErrorMessage";
import Link from "next/link";
import {useRouter} from "next/router";
import {CURRENT_USER_QUERY} from "./wrappers/User";
import IconChevron from "./icons/IconChevron";
import Logo from "./svg/Logo";
import Background from "./ui/Background";

const SIGNIN_MUTATION = gql`
	mutation SIGNIN_MUTATION($email: String!, $password: String!) {
		signin(email: $email, password: $password) {
			id
			email
			name
		}
	}
`;

let SigninNew = () => {
	let router = useRouter();
	let [email, updateEmail] = useState("");
	let [password, updatePassword] = useState("");
	let [signin, {error, data, loading}] = useMutation(SIGNIN_MUTATION, {
		refetchQueries: [{query: CURRENT_USER_QUERY}],
		awaitRefetchQueries: true,
	});

	return (
		<div className="flex flex-col items-center justify-center w-full h-screen">
			<Background bgImg={1} bgColor="bg-ds-primary" />
			<div className="relative z-50 w-full max-w-5xl px-6 mx-auto">
				<div className="w-full max-w-2xl space-y-6 md:space-y-0 md:space-x-8 md:flex">
					<div className="pb-6 space-y-2 border-b md:py-6 md:justify-between md:flex md:flex-col md:space-y-2 md:border-b-0 md:w-1/3 md:text-right">
						<div>
							<div className="hidden h-6 mb-4 text-ds-primary md:block">
								<Logo className="md:ml-auto" />
							</div>
							<h1 className="ds-heading text-ds-primary">Sign In</h1>
							<p>
								<Link href={"/requestreset"}>
									<a className="text-sm text-gray-400 ">Forgot your password?</a>
								</Link>
							</p>
						</div>
						<div className="flex items-center mt-auto space-x-2 md:justify-end">
							<p className="text-sm">Need an account?</p>
							<a href="/signup" className="pill">
								Sign Up
							</a>
						</div>
					</div>
					<div className="md:w-2/3 md:border-l-2 md:border-ds-primary md:p-6">
						<form
							method="post"
							onSubmit={async (e) => {
								e.preventDefault();
								const res = await signin({variables: {email, password}});
								router.push("/");
							}}
						>
							<div data-section="sign-in" className="w-full">
								<fieldset className="space-y-4" disabled={loading} aria-busy={loading}>
									<div>
										<label htmlFor="email" className="mb-1 label">
											Email
										</label>
										<input
											type="email"
											name="email"
											placeholder="Your Email"
											value={email}
											className="w-full ds-input"
											onChange={(e) => updateEmail(e.target.value)}
										/>
									</div>
									<div>
										<label htmlFor="password" className="mb-1 label">
											Password
										</label>
										<input
											type="password"
											name="password"
											placeholder="Your Password"
											value={password}
											className="w-full ds-input"
											onChange={(e) => updatePassword(e.target.value)}
										/>
									</div>
									<div className="">
										<button className="button" type="submit">
											<span>Sign In</span>
											<span>
												<IconChevron />
											</span>
										</button>
									</div>
								</fieldset>
								<Error error={error} />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SigninNew;
