import { useTheme } from "@/src/context/themecontext";
import { Progress } from "antd";
import clsx from "clsx";
import { BsFire } from "react-icons/bs";
import { HiOutlineFire } from "react-icons/hi";

export default function StreakBoard() {
	const { isDark } = useTheme();
	return (
		<div className={clsx("course-status border border-gray-300 min-h-[100px]  rounded-sm mx-8 my-8 grid grid-cols-4 p-8 shadow-md",isDark && "bg-gray-900")}>
			<div className="col-span-2 flex flex-col items-start justify-center ml-2">
				<p className={clsx(
					"text-lg font-bold font-arvo",
					isDark && "text-white"
				)}>

					Start learning Today ! Start your streak</p>
				<p className={clsx(isDark && "text-white")}>Register new courses to reach your goals.</p>
			</div>
			<div className="col-span-1 flex flex-row items-center justify-start ml-4">
				<HiOutlineFire color="orange" size={30} />
				<div className="flex flex-col">
					<p className={clsx(isDark ? "text-white" : "text-md")}>18/100</p>
					<p className="text-sm text-gray-400">Current Streak</p>
				</div>
			</div>
			<div className="grid-cols-1 flex justify-start items-center ">
				<Progress
					type="circle"
					percent={60}
					steps={{ count: 8, gap: 2 }}
					trailColor="rgba(0, 0, 0, 0.06)"
					strokeWidth={20}
					size={70}
					strokeColor="#9810fa"
				/>
				<div className={clsx("ml-3 text-gray-700 text-sm font-medium",isDark && "text-white")}>
					<p className="">completed 5/30 courses</p>
					<p className="">4 cerificate earned</p>
				</div>
			</div>
		</div>
	)
}