import { Divider } from "antd";
import { MdOutlineThumbUpOffAlt } from "react-icons/md";

const sections = [
  {
    title: "In-demand Careers",
    items: [
      "Data Scientist",
      "Full Stack Web Developer",
      "Cloud Engineer",
      "Project Manager",
      "Game Developer",
      "All Career Accelerators",
    ],
  },
  {
    title: "IT - Certification",
    items: [
      "Full Stack Web Developer",
      "Cloud Engineer",
      "Project Manager",
      "Game Developer",
      "All Career Accelerators",
    ],
  },
  {
    title: "Communication",
    items: ["Data Scientist", "Full Stack Web Developer", "Cloud Engineer"],
  },
];

function SkillSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="m-5">
      <p className="font-medium">{title}</p>
      <ul className="mt-2 font-thin text-sm">
        {items.map((item, idx) => (
          <li key={idx} className="py-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-purple-900 text-white p-2 mt-5">
      <div className="flex flex-row justify-between p-3">
        <div className="flex flex-col">
          <p className="font-bold text-lg font-arvo">Get In Touch</p>
          <p className="font-thin">
            Join as Trainer / Partner with our wonderful tech
          </p>
        </div>
        <button className="border border-white px-3 py-1 flex flex-row items-center gap-2">
          <MdOutlineThumbUpOffAlt /> Join Us
        </button>
      </div>

      <Divider className="border-white!" />
      <div>
        <p className="font-bold text-xl font-arvo">
          Explore top skills and certifications
        </p>
        <div className="grid grid-cols-3">
          {sections.map((section, idx) => (
            <SkillSection key={idx} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
}