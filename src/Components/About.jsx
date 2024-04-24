import React from "react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full h-2  bg-gray-200 rounded  shadow-sm shadow-white ">
      <div
        className="h-full bg-[#00FFFF] rounded  "
        style={{
          width: `${progress}% `,
        }}
      ></div>
    </div>
  );
};

function About() {
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTab = (id) => {
    setActiveTab(id);
  };

  const events = [
    {
      year: "2022-2023",
      mark: "Score : 9.03 CGPA",
      description: "BscIT (Bachlor of Science in Information And Technology)",
    },
    {
      year: "2020-2021",
      mark: "Score : 62.15%",
      description: "HSC (Higher Secondary Certification)",
    },
    {
      year: "2017-2018",
      mark: "Score : 69.60%",
      description: "SSC (Secondary School Certification)",
    },
    // Add more events as needed
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="md:h-screen sm:py-28 py-24  " id="about">
      <div className="pb-5">
        <h1 className="text-5xl  font-bold text-center text-[#00FFFF]">
          About Me!
        </h1>
      </div>
      <div className="md:flex items-center gap-5 w-full">
        <div className="md:w-[50%]   text-white mx-auto">
          <div className=" py-5 md:text-lg text-[#ababab] font-Poppins  font-serif text-sm mx-6 md:mx-0 flex flex-col gap-2">
            <p className="">
              {/* {" "}
              <span className="text-red-500 font-bold">
                {" "}
                Hello! I'm Abhilash Pal
              </span>{" "} */}
              <TypeAnimation
                sequence={["Hello I'am Abhilash Pal "]}
                cursor={false}
                className="text-[#00FFFF] font-bold  text-xl"
              />
              , A passionate Full Stack Developer with a keen interest in
              MERN-STACK. I hold a degree Of BscIT (Bachlor Of Science in
              Information In Technology) from Mumbai University, and I've been
              doing Internship in classMoon for 5 Months.
            </p>
            <p>
              I'm particularly passionate about Development, and I love
              exploring new trends and innovations in Web Development. In
              addition to my technical skills, I bring strong communication and
              collaboration skills to every project
            </p>
            <p>
              <span className="text-[#00FFFF] text-2xl font-bold">
                Networking :
              </span>{" "}
              Feel free to connect with me on Linked In, or explore my portfolio
              to see some of my recent projects
            </p>
          </div>
        </div>
        <div className="md:w-[40%] px-6 h-[500px]  ">
          <div className="w-[100%] h-[40px]  flex items-center border-2 border-[#00FFFF] ">
            <button
              className={`w-[50%] font-bold text-2xl ${
                activeTab === "Tab1" ? "text-[#00FFFF]" : "text-white"
              }`}
              onClick={() => handleTabClick("Tab1")}
            >
              Education
            </button>
            <button
              className={`w-[50%] font-bold text-2xl ${
                activeTab === "Tab2" ? "text-[#00FFFF]" : "text-white"
              }`}
              onClick={() => handleTabClick("Tab2")}
            >
              Experience
            </button>
          </div>
          <div>
            {activeTab === "Tab1" && (
              <div className="container my-8 relative pt-4 ">
                <div className="flex flex-col md:flex-row md:space-x-6">
                  <div className=" w-[100%] relative ">
                    {events.map((event, index) => (
                      <div
                        key={index}
                        className="flex items-start justify-center  "
                      >
                        <div className="w-16 text-right mr-4">
                          <p className="text-white font-bold">{event.year}</p>
                        </div>
                        <div className="flex flex-col items-center mr-4 ">
                          <div className="w-4 h-4 bg-[#00FFFF] rounded-full "></div>
                          <div className=" w-[2px] h-24 border-2 border-[#00FFFF]"></div>
                        </div>
                        <div className="w-[70%] ">
                          <p className="text-white font-bold">
                            {event.description}
                          </p>
                          <p className="text-white">{event.mark}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Tab2" && (
              <div className="pt-4 lg:text-lg md:text-md text-[#ababab] font-Poppins  font-serif text-sm lg:mx-6  ">
                <p>
                  {" "}
                  <p className="flex flex-col">
                    <span className="text-[#00FFFF] py-1 text-xl  font-bold">
                      Capritech Global Services Private Limited :
                    </span>
                    <span className="text-[#06BF96] pb-2">
                      (From 27th July 2023 to 31st march 2024 )
                    </span>
                  </p>
                  <span>
                    Currently had worked at Capritech Private Limited as a MERN
                    stack developer, focusing on the application 'Classmoon'.
                  </span>
                </p>
                <ul className="list-disc pl-2">
                  <li className="pt-2">
                    {" "}
                    Gained hands-on experience in MERN stack development.
                  </li>
                  <li className="py-2">
                    Demonstrated ability to work in a professional environment
                    and meet project deadlines.
                  </li>
                  <li>
                    {" "}
                    Application 'Classmoon' is live and accessible via{" "}
                    <a href="https://app.classmoon.in" target="_blank">
                      https://app.classmoon.in
                    </a>
                  </li>
                  <li className="py-2">
                    Currently seeking further opportunities to apply and expand
                    my skills in the field of full-stack development
                  </li>
                </ul>
                {/* <p className="py-1">
                  Gained hands-on experience in MERN stack development.
                </p>
                <p className="py-1">
                  Demonstrated ability to work in a professional environment and
                  meet project deadlines.
                </p>
                <p className="py-1">
                  Application 'Classmoon' is live and accessible via{" "}
                  <a href="https://app.classmoon.in" target="_blank">
                    https://app.classmoon.in
                  </a>
                </p>
                <p className="py-1">
                  Currently seeking further opportunities to apply and expand my
                  skills in the field of full-stack development
                </p> */}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <div className="md:flex md:w-[50%]">
        <div className="md:w-[50%]">
          <div className="text-center py-4 text-3xl font-bold text-[#E63946]">
            Education
          </div>
          <div className="container my-8 relative ">
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className=" w-[100%] relative ">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-center  "
                  >
                    <div className="w-16 text-right mr-4">
                      <p className="text-white font-bold">{event.year}</p>
                    </div>
                    <div className="flex flex-col items-center mr-4 ">
                      <div className="w-4 h-4 bg-[#E63946] rounded-full "></div>
                      <div className=" w-[2px] h-24 border-2 border-red-700"></div>
                    </div>
                    <div className="w-[70%] ">
                      <p className="text-white font-bold">
                        {event.description}
                      </p>
                      <p className="text-white">{event.mark}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[50%]">
          <div className="text-center py-4 text-3xl font-bold text-[#E63946]">
            Exprience
          </div>
          <div>
            <p> Currnently I am Working as Full stack developer In classMoon</p>
            <p> </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default About;
