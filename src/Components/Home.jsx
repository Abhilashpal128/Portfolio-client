import React from "react";
import {
  TiSocialFacebookCircular,
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";
import { TypeAnimation } from "react-type-animation";
function Home() {
  return (
    <>
      <div className="md:h-screen py-16" id="home">
        <div className="md:flex md:px-24 text-center md:text-left">
          <div className="md:w-[100%] flex flex-col justify-center  items-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold  pt-20 md:pt-36 ">
              <TypeAnimation
                sequence={["Hello ,I am Abhilash Pal "]}
                cursor={false}
              />
            </h1>
            <h1 className="text-[#00FFFF] font-bold text-xl md:text-2xl py-2 ">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Full-Stack MERN Developer",
                  1000,
                  "Front-End MERN Developer with React ",
                  1000,
                  "Back-End using Node.js and Express",
                  1000,
                  "Passionate MERN Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "20px", display: "inline-block" }}
                repeat={Infinity}
              />
            </h1>
            <p className="text-white sm:pb-5 pb-0  font-Poppins sm:w-[70%] text-center  font-serif md:text-lg text-sm  pt-2 ">
              I have a strong command over both front-end and back-end
              technologies, allowing me to build complete and scalable
              applications. I’m excited to be part of a team where I can
              contribute my full stack development skills and help create
              innovative and impactful applications
            </p>
            <div className="my-4 md:w-96 w-full  bg-[#00FFFF] shadow-sm shadow-[#00FFFF] h-1"></div>
            <div className="text-[#040D12] md:py-6  py-6 flex md:justify-start justify-center items-center ">
              <button className="bg-slate-900  text-white shadow-md shadow-[#00FFFF] md:rounded-xl rounded-lg md:h-11 h-9 md:w-44 w-36 hover:bg-slate-900">
                View My Resume
              </button>
            </div>
          </div>
          {/* <div className=" md:pt-24 pt-8 md:w-[40%]  grid place-items-center">
            <img
              className="md:h-auto md:w-auto w-80 h-52  "
              src="../../src/images/Homeimg1.png"
              alt="home"
            />
          </div> */}
        </div>
        <div className=" text-[#00FFFF] md:px-24  grid  place-items-center ">
          <div className="flex md:pt-7  pt-8">
            <h1>
              <a
                href="https://www.linkedin.com/in/abhilashpal8928/"
                target="_blank"
              >
                <TiSocialLinkedinCircular className="text-5xl" />
              </a>
            </h1>
            <h1>
              <a href="https://github.com/Abhilashpal128" target="_blank">
                <TiSocialGithubCircular className="text-5xl" />
              </a>
            </h1>
            <h1>
              <a href="https://twitter.com/?lang=en" target="_blank">
                <TiSocialTwitterCircular className="text-5xl" />
              </a>
            </h1>
          </div>
          <div className="my-1 w-36 bg-slate-400 h-0.5"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
