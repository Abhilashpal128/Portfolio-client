import React from "react";
import {
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiCss3,
  SiBootstrap,
  SiExpress,
  SiGithub,
  SiMongodb,
  SiGit,
} from "react-icons/si";
import { DiNodejs, DiReact } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full sm:h-3 h-2 bg-gray-200 rounded  shadow-sm shadow-white ">
      <div
        className="h-full bg-[#06BF96] rounded  "
        style={{
          width: `${progress}% `,
        }}
      ></div>
    </div>
  );
};

function Skills() {
  const skills = [
    { icon: <SiHtml5 />, name: "HTML5", textColor: "red-500", progress: 80 },
    { icon: <SiCss3 />, name: "CSS", textColor: "blue-700", progress: 70 },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      textColor: "yellow-500",
      progress: 70,
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap",
      textColor: "purple-600",
      progress: 50,
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
      textColor: "sky-500",
      progress: 80,
    },
    {
      icon: <DiReact />,
      name: "React Js ",
      textColor: "sky-500",
      progress: 80,
    },
    {
      icon: <TbBrandNextjs />,
      name: "Next Js",
      textColor: "white",
      progress: 70,
    },
    {
      icon: <DiNodejs />,
      name: "Node Js",
      textColor: "green-500",
      progress: 80,
    },
    {
      icon: <SiExpress />,
      name: "Express Js",
      textColor: "gray-500",
      progress: 80,
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      textColor: "green-500",
      progress: 80,
    },
    { icon: <GrMysql />, name: "MySQL", textColor: "sky-400", progress: 70 },
    { icon: <SiGit />, name: "Git", textColor: "red-500", progress: 60 },
    { icon: <SiGithub />, name: "GitHub", textColor: "white", progress: 60 },
  ];

  return (
    <div className="lg:h-screen text-white sm:px-7 px-8 py-16 " id="skills">
      <div className="text-center py-6">
        <h1 className="text-4xl font-bold">Skills</h1>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-9 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className=" flex flex-col items-center bg-slate-900 justify-center border-2 border-white p-3 shadow-lg shadow-[#00FFFF] rounded-md gap-2 hover:scale-125 duration-500"
          >
            <div className={`text-${skill.textColor} text-5xl`}>
              {skill.icon}
            </div>
            <h1>{skill.name}</h1>
            <ProgressBar progress={skill.progress} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
