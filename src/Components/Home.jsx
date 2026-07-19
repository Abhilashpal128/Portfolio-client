import React from "react";
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { TypeAnimation } from "react-type-animation";

const RESUME_URL =
  "https://drive.google.com/file/d/16FavR-QgyPuRIsRDlsuK30Qy5Cep22MD/view?usp=drive_link";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhilashpal8928/",
    Icon: TiSocialLinkedinCircular,
  },
  {
    label: "GitHub",
    href: "https://github.com/Abhilashpal128",
    Icon: TiSocialGithubCircular,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/",
    Icon: TiSocialTwitterCircular,
  },
];

const stack = [
  "React Native",
  "React.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Next.js",
];

function Home() {
  return (
    <section className="md:min-h-screen pb-16 pt-13" id="home">
      <div className="flex flex-col items-center text-center px-6 md:px-24">
        <p className="text-[#06BF96] text-xs md:text-sm uppercase tracking-[0.3em] pt-20 md:pt-32">
          Mumbai, India
        </p>

        <h1 className="text-white text-4xl md:text-5xl font-bold pt-4">
          <TypeAnimation sequence={["Hello, I'm Abhilash Pal"]} cursor={false} />
        </h1>

        <h2 className="text-[#00FFFF] font-bold text-xl md:text-2xl py-2 min-h-[2rem]">
          <TypeAnimation
            sequence={[
              "React Native Developer",
              1200,
              "Full-Stack MERN Developer",
              1200,
              "Mobile Apps with React Native",
              1200,
              "APIs with Node.js and Express",
              1200,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </h2>

        <p className="text-white font-Poppins font-serif md:text-lg text-sm pt-3 sm:w-[70%] leading-relaxed">
          I build production software for web and mobile — cross-platform apps
          in React Native, and full-stack applications on the MERN stack. I'm
          comfortable across the whole product: designing the API, building the
          screen that consumes it, and shipping the release.
        </p>

        <div className="flex flex-wrap justify-center gap-2 pt-6">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs md:text-sm text-[#00FFFF] border border-[#00FFFF]/40 rounded px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="my-6 md:w-96 w-full bg-[#00FFFF] shadow-sm shadow-[#00FFFF] h-1" />

        <div className="flex flex-wrap justify-center items-center gap-4 pb-2">
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            <button className="bg-slate-900 text-white shadow-md shadow-[#00FFFF] md:rounded-xl rounded-lg md:h-11 h-9 md:w-44 w-36 hover:bg-slate-800 transition-colors">
              View My Resume
            </button>
          </a>

          <a href="#contact">
            <button className="border-2 border-[#00FFFF] text-[#00FFFF] md:rounded-xl rounded-lg md:h-11 h-9 md:w-44 w-36 hover:bg-[#00FFFF] hover:text-[#0D0A0B] transition-colors">
              Get In Touch
            </button>
          </a>
        </div>

        <div className="grid place-items-center text-[#00FFFF] pt-8">
          <div className="flex">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:scale-110 transition-transform duration-300"
              >
                <Icon className="text-5xl" />
              </a>
            ))}
          </div>
          <div className="my-1 w-36 bg-slate-400 h-0.5" />
        </div>
      </div>
    </section>
  );
}

export default Home;