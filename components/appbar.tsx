"use client"
import React from "react";
import { BiSolidCategory } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { MdEmojiEvents } from "react-icons/md";

export default function AppBar() {
	const [isDarkMode, setIsDarkMode] = React.useState(false);
	return (
		<header className="border-b-gray-50 shadow-sm bg-white">
			<nav className="flex items-center justify-between px-6 py-4 max-w-screen mx-auto flex-wrap gap-4">
				<div className="flex items-center gap-2">
					<img
						src="/assets/caddcentre.svg"
						alt="CADD Centre Logo"
						className="w-24 h-auto"
					/>
				</div>
				<div className="flex items-center gap-6 grow justify-end">
					<span className="cursor-pointer  hover:text-purple-600"><BiSolidCategory style={{ fontSize: "20px" }} /></span>
					<div className="w-64">
						<input
							type="text"
							placeholder="Search..."
							className="w-full border rounded-full p-1 outline-none transition 
               hover:border-purple-700 focus:border-purple-700"
						/>
					</div>
					<span className="cursor-pointer  hover:text-purple-600"><MdEmojiEvents style={{ fontSize: "20px" }} /></span>
					<span className="cursor-pointer  hover:text-purple-600"><IoNotifications style={{ fontSize: "20px" }} /></span>
					<FaCartShopping className="text-xl cursor-pointer hover:text-purple-600" />
				</div>
				<div className="flex items-center gap-4">
					<button className="px-4 py-2 text-sm font-semibold border rounded hover:bg-gray-100">
						Login
					</button>
					<button className="px-4 py-2 text-sm font-semibold bg-purple-600 text-white rounded hover:bg-purple-700">
						Register
					</button>
					<button className="rounded-2xl border text-xs px-3 py-1" onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? "Dark" : "Light"}</button>
				</div>
			</nav>
		</header>
	);
}