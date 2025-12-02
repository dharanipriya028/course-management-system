"use client"
import { ImAlarm } from "react-icons/im";
import { useState } from "react";
import StreakBoard from "./StreakBoard";
import FilterAction from "./FilterAction";
import CourseList from "./CourseList";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { useTheme } from "@/src/context/themecontext";

export default function AllCourses() {
	const [isCancel, setIsCancel] = useState(false)
	const {isDark} = useTheme();
	return (
		<div className={clsx("mx-2" , isDark && "bg-gray-700")}>
			<StreakBoard />
			<AnimatePresence>
				{!isCancel &&
					<motion.div
						key="learning-scheduler"
						initial={{ opacity: 0, scaleY: 0 }}
						animate={{ opacity: 1, scaleY: 1 }}
						exit={{ opacity: 0, scaleY: 0 }}
						transition={{ duration: 0.2 }}
					>

						<div className="border border-gray-300 min-h-[100px] mx-8 rounded-2xl flex flex-row justify-center items-center">
							<ImAlarm size={30} color="gray" className="m-6" />
							<div className="relative">
								<button className="absolute right-6 top-0 text-gray-500 hover:text-gray-700" onClick={() => { setIsCancel(true) }}>X</button>
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
					</motion.div>

				}
			</AnimatePresence>
			<div className="mx-4 mt-6">
				<FilterAction />
			</div>
			<div className="course-list">
				<CourseList />
			</div>
		</div>
	)
}