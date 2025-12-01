import { Pagination } from "antd";
import CourseCard from "./CourseCard";

export default function CourseList() {
	return (
		<div className="grid grid-rows-4">
			<CourseCard />
			<Pagination className="m-6" align="center" defaultCurrent={1} total={50} />
		</div>
	)
}