"use client"
import React from "react";
import { FaLock } from "react-icons/fa";
import { PiFinnTheHumanFill } from "react-icons/pi";


export default function LoginPage() {
	const [isLoginSucess, setLoginSucess] = React.useState(false);
	function handlelogin() {
		setLoginSucess(true)

	}
	return (
		<div className="h-screen flex items-center justify-center">
			<div className="border-2 h-[70%] w-[70%] grid grid-cols-3 items-stretch">
				<div className={`${isLoginSucess ? "custom-slide" : "translate-x-0"} text-[20px] h-full col-span-2 row-span-2 bg-[#9448b8] flex flex-col items-center justify-center p-4`}>
					<p className="text-3xl font-bold text-white">Welcome! Please login to continue.</p>
					<p className="text-base text-white p-4">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ipsam inventore placeat fuga exercitationem voluptatibus possimus velit hic iusto vero?
					</p>
				</div>
				<div className="flex justify-center items-center flex-col p-4">
					<p className="text-md font-semibold text-[#9448b8] mb-4">USER LOGIN</p>
					<div className="flex flex-col justify-center items-center w-full gap-4">
						<div className="relative w-full px-6">
							<span className="absolute top-1/2 left-8 transform -translate-y-1/2">
								<PiFinnTheHumanFill color="#5b316e" size={20} />
							</span>
							<input
								className="bg-[#f1d2ff] pl-10 pr-4 py-2 focus:border-2 focus:outline-none rounded-full w-full"
								type="text"
								placeholder="Username"
							/>
						</div>
						<div className="relative w-full px-6">
							<span className="absolute top-1/2 left-8 transform -translate-y-1/2">
								<FaLock color="#5b316e" size={19} />
							</span>
							<input
								className="bg-[#f1d2ff] pl-10 pr-4 py-2 focus:border-2 focus:outline-none rounded-full w-full"
								type="password"
								placeholder="Password"
							/>
						</div>
						<button onClick={() => handlelogin()} className="bg-[#5b316e] text-white rounded-full py-2 mt-6 w-[40%]">
							Login
						</button>
						<p>Don't Have an account <a href="/#" className="text-[#5b316e] underline-offset-1">Signup</a> </p>
					</div>
				</div>
				
				<div></div>
			</div>
		</div>

	)
}