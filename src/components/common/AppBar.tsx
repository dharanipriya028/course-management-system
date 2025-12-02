"use client"
import { useTheme } from "@/src/context/themecontext";
import clsx from "clsx";
import React from "react";
import { BiSolidCategory } from "react-icons/bi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { IoNotifications, IoSunny } from "react-icons/io5";
import { MdEmojiEvents } from "react-icons/md";

export default function AppBar() {
	const { isDark, toggleTheme } = useTheme();
	return (
		<header className={clsx("border-b-gray-50 shadow-sm isDark", isDark ? "bg-gray-700" : "bg-white")}>
			<nav className="flex items-center justify-between px-6 py-4 max-w-screen mx-auto flex-wrap gap-4">
				<div className="flex items-center gap-2">
					<img
						src="/assets/caddcentre.svg"
						alt="CADD Centre Logo"
						className="w-24 h-auto"
					/>
				</div>
				<div className="flex items-center gap-6 grow justify-end">
					<span className={clsx("cursor-pointer hover:text-purple-600", isDark && "text-white")}><BiSolidCategory style={{ fontSize: "20px" }} /></span>
					<div className="w-64">
						<input
							type="text"
							placeholder="Search..."
							className={clsx("w-full border rounded-full p-1 outline-none transition    hover:border-purple-700 focus:border-purple-700",isDark && "border-white text-white")}
						/>
					</div>
					<span className={clsx("cursor-pointer hover:text-purple-600", isDark && "text-white")}><MdEmojiEvents style={{ fontSize: "20px" }} /></span>
					<span className={clsx("cursor-pointer hover:text-purple-600", isDark && "text-white")}><IoNotifications style={{ fontSize: "20px" }} /></span>
					<FaCartShopping className={clsx("cursor-pointer hover:text-purple-600", isDark && "text-white")} />
				</div>
				<button
					onClick={toggleTheme}
					className={`rounded-2xl border text-xs px-3 py-1 
    ${isDark ? "bg-gray-800 text-white" : "bg-amber-400 text-white"}`}
				>
					{isDark ? <BsFillMoonStarsFill /> : <IoSunny />}
				</button>
				<div className="flex items-center gap-4">
					<button className={clsx("px-4 py-2 text-sm font-semibold border rounded", isDark && "text-white")}>
						Login
					</button>
					<button className="px-4 py-2 text-sm font-semibold bg-purple-600 text-white rounded hover:bg-purple-700">
						Register
					</button>
				</div>
			</nav>
		</header>
	);
}