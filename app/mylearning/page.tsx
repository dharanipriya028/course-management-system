
"use client"
import AllCourses from "@/components/MyLearning/AllCourses";
import { Tabs } from "antd";
import { useState } from "react";


export default function MyLearning() {
	const [activeTab, setActiveTab] = useState('0')
	const data = ["All Courses", "My List", "Payment Pending", "certification", "Learning Tools"];
	const onTabChange = (e: any) => {
		setActiveTab(e)
	}
	return (
		<>
			<section className="bg-gray-100 pt-8 pb-0 px-4 ">
				<div className="max-w-screen mx-auto">
					<p className="font-bold text-3xl pb-6">
						My Learning
					</p>
					<Tabs
						activeKey={activeTab}
						onChange={onTabChange}
						items={data.map((e: any, i: number) => ({
							key: String(i),
							label: data[i],
						}))}
						tabBarGutter={24}
						className="block! text-white! mb-0 pb-0 font-bold"
					/>
				</div>
			</section>
			{activeTab && activeTab == '0' ? (
				<AllCourses />
			) : (
				<div className="flex justify-center align">Working on it</div>
			)
			}
		</>
	)
}