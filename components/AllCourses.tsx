"use client"
import { ImAlarm } from "react-icons/im";
import StreakBoard from "./StreakBoard";
import FilterAction from "./FilterAction";
import { useState } from "react";

export default function AllCourses() {
	const [isCancel, setIsCancel] = useState(false)
	return (
		<div>
			<StreakBoard />
			{!isCancel &&
				<div className="border border-gray-300 min-h-[180px] mx-8 rounded-2xl flex flex-row justify-center items-center">
					<ImAlarm size={30} color="gray" className="m-6" />
					<div className="">
						{/* <button className="mr-0 text-gray-500 hover:text-gray-700">
       X
      </button> */}
						<p className="font-semibold">Schedule Learning Time</p>
						<p className="text-sm text-gray-500">Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.</p>
						<div className="py-4">
							<button className="border border-purple-700 rounded-md text-purple-700 p-2 text-sm font-bold">
								Get Started
							</button>
							<button className="text-purple-700 text-sm font-bold ml-3">
								Dismiss
							</button>
						</div>
					</div>
				</div>
			}
			<FilterAction />
		</div>
	)
}