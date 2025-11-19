"use client";
import { List, Tabs, Typography } from "antd";

export default function PageHeader() {
	const data = ["hi", "hellio"];
	return (
		<section className="bg-gray-100 pt-3 pb-0 px-4 ">
			<div className="max-w-screen mx-auto">
				<Typography.Title level={2} className="mb-4 text-start  font-bold!">
					My Learning
				</Typography.Title>
				<Tabs
					items={data.map((e: any, i: number) => ({
						key: String(i),
						label: `Tab ${i + 1}`,
					}))}
					tabBarGutter={24}
					className="block! text-white! mb-0 pb-0 font-bold "
				/>
			</div>
		</section>
	);
}