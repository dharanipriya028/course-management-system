import Search from "antd/es/input/Search";
import { BiSolidCategory } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { MdEmojiEvents } from "react-icons/md";

export default function AppBar() {
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
				<div className="flex items-center gap-6 grow justify-center">
					<span className="cursor-pointer  hover:text-blue-600"><BiSolidCategory style={{ fontSize: "20px" }} /></span>
					<Search
						placeholder="Search courses, topics..."
						size="large"
						className="max-w-md w-full"
					/>
					<span className="cursor-pointer  hover:text-blue-600"><MdEmojiEvents style={{ fontSize: "20px" }} /></span>
					<span className="cursor-pointer  hover:text-blue-600"><IoNotifications style={{ fontSize: "20px" }} /></span>
					<FaCartShopping className="text-xl cursor-pointer hover:text-blue-600" />
				</div>
				<div className="flex items-center gap-4">
					<button className="px-4 py-2 text-sm font-semibold border rounded hover:bg-gray-100">
						Login
					</button>
					<button className="px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded hover:bg-blue-700">
						Register
					</button>
				</div>
			</nav>
		</header>
	);
}