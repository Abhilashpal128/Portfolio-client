import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const TABS = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

const experience = [
  {
    role: "Software Developer",
    company: "Prosares Solution Pvt. Ltd.",
    period: "Oct 2024 – Present",
    current: true,
    points: [
      "Build cross-platform mobile apps in React Native, integrating REST APIs and third-party SDKs for payments and push notifications.",
      "Ship production releases on Agile sprints, working with product and design and reviewing peers' code.",
    ],
    stack: ["React Native", "REST APIs", "Agile"],
  },
  {
    role: "React Native Developer",
    company: "Terado Engineering Pvt. Ltd.",
    period: "May 2024 – Sep 2024",
    points: [
      "Developed mobile applications with state managed through Redux Toolkit and Context API, cutting redundant API calls and improving stability.",
      "Integrated REST APIs and third-party libraries across multiple client projects.",
    ],
    stack: ["React Native", "Redux Toolkit", "Context API"],
  },
  {
    role: "Software Developer",
    company: "Capritech Global Services Pvt. Ltd.",
    period: "Oct 2023 – Apr 2024",
    points: [
      "Built full-stack web applications on the MERN stack with Next.js SSR, improving page load speed and overall performance.",
    ],
    stack: ["MERN", "Next.js", "SSR"],
    link: { label: "app.classmoon.in", href: "https://app.classmoon.in" },
  },
  {
    role: "Software Developer Intern",
    company: "Capritech Global Services Pvt. Ltd.",
    period: "Apr 2023 – Sep 2023",
    points: [
      "Contributed to web feature development in React.js and Node.js, gaining hands-on MERN experience in a live production codebase.",
    ],
    stack: ["React.js", "Node.js"],
  },
];

const education = [
  {
    title: "B.Sc. IT — Bachelor of Science in Information Technology",
    org: "Mumbai University",
    period: "2021 – 2023",
    mark: "9.03 CGPA",
  },
  {
    title: "HSC — Higher Secondary Certificate",
    org: "Maharashtra State Board",
    period: "2020 – 2021",
    mark: "62.15%",
  },
  {
    title: "SSC — Secondary School Certificate",
    org: "Maharashtra State Board",
    period: "2017 – 2018",
    mark: "69.60%",
  },
];

function Marker({ isLast, active }) {
  return (
    <div className="flex flex-col items-center shrink-0">
      <span
        className={`w-3.5 h-3.5 rounded-full shrink-0 ${
          active
            ? "bg-[#00FFFF] shadow-[0_0_10px_#00FFFF]"
            : "bg-[#0D0A0B] border-2 border-[#00FFFF]"
        }`}
      />
      {!isLast && <span className="w-[2px] flex-1 bg-[#00FFFF]/40 mt-1" />}
    </div>
  );
}

function ExperienceList({ items }) {
  return (
    <ol className="flex flex-col">
      {items.map((job, i) => (
        <li
          key={`${job.company}-${job.period}`}
          className="flex gap-4 min-h-[64px]"
        >
          <Marker isLast={i === items.length - 1} active={job.current} />

          <div className={i === items.length - 1 ? "pb-0" : "pb-7"}>
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="text-white font-bold leading-tight">{job.role}</h3>
              {job.current && (
                <span className="text-[10px] uppercase tracking-widest text-[#0D0A0B] bg-[#00FFFF] px-2 py-0.5 rounded-sm font-bold">
                  Now
                </span>
              )}
            </div>

            <p className="text-[#00FFFF] text-sm font-semibold">
              {job.company}
            </p>
            <p className="text-[#06BF96] text-xs pb-2">{job.period}</p>

            <ul className="flex flex-col gap-1.5 text-[#ababab] font-serif text-sm">
              {job.points.map((point) => (
                <li key={point} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>

            {job.link && (
              <p className="pt-2 text-xs text-[#ababab]">
                Live at{" "}
                <a
                  href={job.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00FFFF] underline underline-offset-4 hover:opacity-80"
                >
                  {job.link.label}
                </a>
              </p>
            )}

            {job.stack && (
              <div className="flex flex-wrap gap-2 pt-3">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] text-[#00FFFF] border border-[#00FFFF]/40 rounded px-2 py-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

function EducationList({ items }) {
  return (
    <ol className="flex flex-col">
      {items.map((item, i) => (
        <li key={item.title} className="flex gap-4 min-h-[64px]">
          <Marker isLast={i === items.length - 1} />

          <div className={i === items.length - 1 ? "pb-0" : "pb-7"}>
            <h3 className="text-white font-bold leading-tight">{item.title}</h3>
            <p className="text-[#00FFFF] text-sm font-semibold">{item.org}</p>
            <p className="text-[#06BF96] text-xs">{item.period}</p>
            <p className="text-[#ababab] font-serif text-sm pt-1">
              Score: {item.mark}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function About() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section className="sm:py-28 py-24" id="about">
      <header className="pb-10">
        <h1 className="text-5xl font-bold text-center text-[#00FFFF]">
          About Me!
        </h1>
        <div className="mx-auto mt-4 h-1 w-36 bg-[#00FFFF] shadow-sm shadow-[#00FFFF]" />
      </header>

      <div className="md:flex md:items-start gap-10 w-full max-w-6xl mx-auto px-6">
        {/* Left: intro */}
        <div className="md:w-[42%]">
          <div className="text-sm md:text-base text-[#ababab] font-Poppins font-serif flex flex-col gap-3">
            <p>
              <TypeAnimation
                sequence={["Hello, I'm Abhilash Pal "]}
                cursor={false}
                className="text-[#00FFFF] font-bold text-xl"
              />
              — a Software Developer based in Mumbai, building for both web and
              mobile. I hold a B.Sc. in Information Technology from Mumbai
              University and have been shipping production software since 2023.
            </p>

            <p>
              I started on the MERN stack, building full-stack web applications
              with React, Node.js, Express and MongoDB, including Next.js SSR
              work focused on load performance. Since 2024 my work has centred
              on <span className="text-white font-semibold">React Native</span>{" "}
              — cross-platform mobile apps with REST API integration, payment
              and push-notification SDKs, and state handled through Redux
              Toolkit.
            </p>

            <p>
              That mix means I can move across the whole product: design an API,
              build the screen that consumes it, and get the release out. I work
              well in Agile teams, review code carefully, and care about
              shipping things people can actually use.
            </p>

            <p>
              <span className="text-[#00FFFF] text-xl font-bold">
                Let's connect:
              </span>{" "}
              Reach out on LinkedIn, or scroll down to see what I've been
              building.
            </p>
          </div>

          <div className="flex gap-8 pt-7 border-t border-[#00FFFF]/20 mt-7">
            <div>
              <p className="text-[#00FFFF] text-3xl font-bold">3+</p>
              <p className="text-[#ababab] text-xs uppercase tracking-wider">
                Years building
              </p>
            </div>
            <div>
              <p className="text-[#00FFFF] text-3xl font-bold">Web</p>
              <p className="text-[#ababab] text-xs uppercase tracking-wider">
                &amp; Mobile
              </p>
            </div>
          </div>
        </div>

        {/* Right: tabs */}
        <div className="md:w-[58%] w-full pt-12 md:pt-0">
          <div
            role="tablist"
            aria-label="Experience and education"
            className="flex items-center h-[44px] border-2 border-[#00FFFF]"
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`w-1/2 h-full font-bold text-lg md:text-xl transition-colors ${
                  activeTab === tab.id
                    ? "text-[#0D0A0B] bg-[#00FFFF]"
                    : "text-white hover:text-[#00FFFF]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="pt-8">
            {activeTab === "experience" && (
              <div id="panel-experience" role="tabpanel">
                <ExperienceList items={experience} />
              </div>
            )}

            {activeTab === "education" && (
              <div id="panel-education" role="tabpanel">
                <EducationList items={education} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;