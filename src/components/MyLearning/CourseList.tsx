import { Pagination } from "antd";
import CourseCard from "./CourseCard";

export default function CourseList() {
	return (
		<div className="">
			<div className="grid grid-cols-4">
				{[...Array(5)].map((_, i) => (
					<CourseCard key={i} />
				))}
			</div>
			<Pagination className="m-6" align="center" defaultCurrent={1} total={50} />
		</div>
	)
}