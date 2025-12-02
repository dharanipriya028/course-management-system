import { Progress } from "antd";
import { BsFire } from "react-icons/bs";
import { HiOutlineFire } from "react-icons/hi";

export default function StreakBoard() {
	return (
		<div className="course-status border border-gray-300 min-h-[100px] rounded-sm mx-8 my-8 grid grid-cols-4 p-8 shadow-md">
			<div className="col-span-2 flex flex-col items-start justify-center ml-2">
				<p className={`text-lg font-bold font-arvo`}>
					Start learning Today ! Start your streak</p>
				<p className="" >Register new courses to reach your goals.</p>
			</div>
			<div className="col-span-1 flex flex-row items-center justify-start ml-4">
				<HiOutlineFire color="orange" size={30} />
				<div className="flex flex-col">
					<p className="text-md">18/100</p>
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
				<div className="ml-3 text-gray-500 text-sm font-medium">
					<p className="">completed 5/30 courses</p>
					<p className="">4 cerificate earned</p>
				</div>
			</div>
		</div>
	)
}