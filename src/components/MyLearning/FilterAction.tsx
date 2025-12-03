import { useTheme } from "@/src/context/themecontext";
import { Dropdown, MenuProps } from "antd";
import clsx from "clsx";

export default function FilterAction() {
	const sortItems = [{ id: 1, items: ["Recently Accessed ", "Recently Entrolled", "Title:A-to-Z", "Title:Z-to-A"] }]
	const {isDark} = useTheme();
	return (
		<div>
			<div>
				{sortItems &&
					sortItems.map((e, i) => {
						const menuItems: MenuProps['items'] = e.items.map(item => ({ label: item, key: item }));
						return (
							<div key={e.id} className="flex flex-row gap-8">
								<div className={clsx("flex flex-col justify-start gap-2",isDark && "text-white")}>
									<p>Sort by</p>
									<Dropdown key={1} menu={{ items: menuItems }} placement="bottomLeft" className="w-[150]">
										<button className="border border-purple-600 text-purple-600 p-2 rounded-sm hover:bg-purple-300 text-sm font-bold">{menuItems[0]?.key || "Choose"}</button>
									</Dropdown>
								</div>
								<div className={clsx("flex flex-col justify-start gap-2",isDark && "text-white")}>
									<p>Filter by</p>
									<div className="flex flex-row gap-1">
										<Dropdown key={1} menu={{ items: menuItems }} placement="bottomLeft" className="w-[150]">
											<button className="border border-purple-600 text-purple-600 p-2 rounded-sm hover:bg-purple-300 text-sm font-bold">{menuItems[0]?.key || "Choose"}</button>
										</Dropdown>
										<Dropdown key={2} menu={{ items: menuItems }} placement="bottomLeft" className="w-[150]">
											<button className="border border-purple-600 text-purple-600 p-2 rounded-sm hover:bg-purple-300 text-sm font-bold">{menuItems[0]?.key || "Choose"}</button>
										</Dropdown>
										<Dropdown key={3} menu={{ items: menuItems }} placement="bottomLeft" className="w-[150]">
											<button className="border border-purple-600 text-purple-600 p-2 rounded-sm hover:bg-purple-300 text-sm font-bold">{menuItems[0]?.key || "Choose"}</button>
										</Dropdown>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	)
}