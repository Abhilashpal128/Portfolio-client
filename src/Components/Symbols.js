import React from "react";

function Symbols() {
  return (
    <div>
      <div className="flex ">
        <div className="md:px-10 px-3">
          <div className="text-red-500 text-5xl">
            <SiHtml5 />
          </div>
          <div>HTML5</div>
        </div>
        <div className="md:px-10 px-3">
          <div className="text-blue-700 text-5xl">
            <SiCss3 />
          </div>
          <div>CSS3</div>
        </div>
        <div className=" md:px-10 px-3">
          <div className="text-sky-400 text-5xl">
            <DiReact />
          </div>
          <div>React Js</div>
        </div>
        <div className="md:px-10 px-3">
          <div className="text-purple-600 text-5xl">
            <SiBootstrap />
          </div>
          <div>Bootstrap</div>
        </div>
      </div>

      <div className="flex ">
        <div className="md:px-10 px-3">
          <div className="text-sky-500 text-4xl">
            <SiTailwindcss />
          </div>
          <div>Tailw</div>
        </div>
        <div className="md:px-10 px-3">
          <div className="text-yellow-500 text-5xl">
            {" "}
            <SiJavascript />
          </div>
          <div>JavaScript</div>
        </div>
        <div className=" md:px-10 px-3">
          <div className="text-green-500 text-7xl">
            <DiNodejs />
          </div>
          <div>Node Js</div>
        </div>
        <div className="md:px-10 px-3">
          <div className="text-green-500 text-4xl flex">
            <SiExpress />
            <DiNodejsSmall />
          </div>
          <div>Express Js</div>
        </div>
      </div>

      <div className="flex">
        <div className="md:px-10 px-3">
          <div className="text-white text-5xl">
            <SiGithub />
          </div>
          <div>GitHub</div>
        </div>
      </div>
    </div>
  );
}

export default Symbols;
