import React from "react";

import "./Signin.css";
export default function Signin() {
	return (
		<div className="login-warpper text-xl p-4">
			<p className="flex justify-between  mb-4">
				<span>Identification</span>
			</p>
			<div className="">
				<p className="mb-4">I already have an account</p>
				<from className="w-full login-form">
					<label className="w-full" htmlFor="email">
						Login
					</label>
					<input className="mb-4" type="email" name="email" id="email" />
					<label className="w-full" htmlFor="password">
						password
					</label>
					<input
						className="mb-4"
						type="password"
						name="password"
						id="password"
					/>
					<p className="underline mb-4">Forgot your password</p>
					<button type="submit" className="w-full bg-black text-white">
						Sing in
					</button>
					<p className="mb-4">I don't have an account</p>
					<p className="mb-4">
						Enjoy added benefits and a richer experience by creating a personal
						account
					</p>
					<button type="submit" className="w-full border-black">
						Create My Account
					</button>
				</from>
			</div>
		</div>
	);
}
