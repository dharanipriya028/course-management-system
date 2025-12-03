
"use client"
import AllCourses from "@/src/components/MyLearning/AllCourses";
import { useTheme } from "@/src/context/themecontext";
import { ConfigProvider, Tabs } from "antd";
import clsx from "clsx";
import { useEffect, useState } from "react";


export default function MyLearning() {
	const [activeTab, setActiveTab] = useState('0')
	const data = ["All Courses", "My List", "Payment Pending", "certification", "Learning Tools"];
	const onTabChange = (e: any) => {
		setActiveTab(e)
	}
	const { isDark } = useTheme();
	// useEffect(()=>{
	// 	const getUser
	// },[])
	return (
		<div className={clsx(" pt-8 pb-0 px-4 ", isDark ? "bg-gray-700" : "bg-gray-100")}>
			<section className={clsx(" pt-8 pb-0 px-4 ", isDark ? "bg-gray-800" : "bg-gray-100")}>
				<div className="max-w-screen mx-auto">
					<p className={clsx("font-bold text-3xl pb-6", isDark && "text-white")}>
						My Learning
					</p>
					<ConfigProvider
						theme={{
							token: {
								colorText: isDark ? "#fff" : "#000",
								colorBgContainer: isDark ? "#1f1f1f" : "#fff",
								colorPrimary: "#9333ea",
							},
						}}
					>
						<Tabs
							activeKey={activeTab}
							onChange={onTabChange}
							items={data.map((e: any, i: number) => ({
								key: String(i),
								label: data[i],
							}))}
							tabBarGutter={24}
							className=""
						/>
					</ConfigProvider>

				</div>
			</section>
			<div></div>
			{activeTab && activeTab == '0' ? (
				<AllCourses />
			) : (
				<div className="flex justify-center align">Working on it</div>
			)
			}
		</div>
	)
}