import { Card, Pagination, Progress } from "antd";
import React from "react";
import { PiDotsThreeCircleVerticalFill, PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { TiStarOutline } from "react-icons/ti";
import CardOptions from "./CardOptions";
import clsx from "clsx";
import { useTheme } from "@/src/context/themecontext";

export default function CourseCard() {
  const [rating, setRating] = React.useState(0);
  const { isDark } = useTheme();
  return (
    <>
        <div className={clsx(" max-w-2xs min-h-60 my-8 mx-4 p-3", isDark && "bg-gray-600")}>
          <div>
            <div className="relative">
              <img className="w-full max-h-40" src="/assets/python.jpg" alt="course" />
              <span className="absolute top-2 right-2 ">
                <CardOptions />
              </span>
            </div>
            <div className={clsx("m-1", isDark && "text-white")}>
              <p className={clsx("uppercase font-bold w-full text-sm")}>Full Stack Python Course (Free Contant)</p>
              <p className="font-light w-full text-xs text-gray-400 mt-1">Coding Cakrea</p>
              <Progress strokeLinecap="butt" className="max-h-0.5!" strokeColor="#601499"
                showInfo={false} percent={80} size="small" status="active" />
              <div className="flex items-center justify-between">
                <p className="font-extralight text-xs">100% Completed</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => setRating(star)}
                      className={`cursor-pointer ${star <= rating ? "text-yellow-400" : "text-gray-500"}`}>
                      <TiStarOutline size={14} />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}