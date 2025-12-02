"use client";
import { Divider } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { FaRegGrinStars } from "react-icons/fa";
import { IoArchiveOutline } from "react-icons/io5";
import { PiDotsThreeCircleVerticalFill } from "react-icons/pi";

export default function CardOptions() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const menuItems = [
    { id: 1, label: "Share", icon: <FiShare2 />, onClick: handleClose },
    { id: 2, label: "Create New List", icon: <GoPlus />, onClick: handleClose },
    { id: 3, label: "Add Favorite", icon: <FaRegGrinStars />, onClick: handleClose },
    { id: 4, label: "Archive", icon: <IoArchiveOutline />, onClick: handleClose },
  ];

  return (
    <div className="relative z-50">
      <button onClick={() => setOpen((prev) => !prev)}>
        <PiDotsThreeCircleVerticalFill
          color="white"
          size={28}
          className="hover:shadow-2xs!"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 bg-white border min-w-48 p-2 shadow-lg"
          >
            <div>
              <p className="text-sm font-bold">List</p>
              <p className="text-xs text-gray-500">(You have no list)</p>
            </div>
            <Divider />
            <ul>
              {menuItems.map(({ id, label, icon, onClick }) => (
                <li
                  key={id}
                  className="flex items-center gap-2 text-sm font-light m-2 cursor-pointer hover:text-blue-500"
                  onClick={onClick}
                >
                  {icon}
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}