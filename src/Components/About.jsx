import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const TABS = [
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
];

const education = [
  {
    year: "2021–2023",
    title: "B.Sc. IT — Bachelor of Science in Information Technology",
    org: "Mumbai University",
    mark: "9.03 CGPA",
  },
  {
    year: "2020–2021",
    title: "HSC — Higher Secondary Certificate",
    org: "Maharashtra State Board",
    mark: "62.15%",
  },
  {
    year: "2017–2018",
    title: "SSC — Secondary School Certificate",
    org: "Maharashtra State Board",
    mark: "69.60%",
  },
];

const experience = [
  {
    role: "MERN Stack Developer",
    company: "Capritech Global Services Pvt. Ltd.",
    period: "July 2023 – March 2024",
    summary:
      "Built and shipped features for Classmoon, a live classroom management platform used by institutes and students.",
    points: [
      "Developed responsive React interfaces and REST APIs with Node.js, Express and MongoDB.",
      "Worked across the full request cycle — schema design, API integration, state handling and UI.",
      "Collaborated with designers and QA in a professional Agile environment, meeting release deadlines.",
    ],
    link: { label: "app.classmoon.in", href: "https://app.classmoon.in" },
  },
];

function Timeline({ items }) {
  return (
    <ol className="relative">
      {items.map((item, index) => (
        <li key={item.year} className="flex items-start gap-4">
          <div className="w-20 shrink-0 pt-0.5 text-right">
            <p className="text-white text-sm font-bold">{item.year}</p>
          </div>

          <div className="flex flex-col items-center shrink-0">
            <span className="w-4 h-4 rounded-full bg-[#00FFFF] shadow-sm shadow-[#00FFFF]" />
            {index !== items.length - 1 && (
              <span className="w-[2px] h-20 bg-[#00FFFF]/60" />
            )}
          </div>

          <div className="pb-8">
            <p className="text-white font-bold leading-snug">{item.title}</p>
            <p className="text-[#ababab] text-sm">{item.org}</p>
            <p className="text-[#00FFFF] text-sm font-semibold pt-1">
              Score: {item.mark}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function Experience({ items }) {
  return (
    <div className="flex flex-col gap-8">
      {items.map((job) => (
        <article key={job.company}>
          <h3 className="text-[#00FFFF] text-xl font-bold">{job.role}</h3>
          <p className="text-white font-semibold">{job.company}</p>
          <p className="text-[#06BF96] text-sm pb-3">{job.period}</p>

          <p className="text-[#ababab] font-serif text-sm md:text-base">
            {job.summary}
          </p>

          <ul className="list-disc pl-5 pt-3 flex flex-col gap-2 text-[#ababab] font-serif text-sm md:text-base">
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          {job.link && (
            <p className="pt-3 text-sm text-[#ababab]">
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
        </article>
      ))}
    </div>
  );
}

function About() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section className="md:min-h-screen sm:py-28 py-24" id="about">
      <header className="pb-8">
        <h1 className="text-5xl font-bold text-center text-[#00FFFF]">
          About Me!
        </h1>
        <div className="mx-auto mt-4 h-1 w-36 bg-[#00FFFF] shadow-sm shadow-[#00FFFF]" />
      </header>

      <div className="md:flex md:items-start gap-8 w-full max-w-6xl mx-auto px-6">
        {/* Left: intro */}
        <div className="md:w-1/2 text-white">
          <div className="py-5 md:text-lg text-sm text-[#ababab] font-Poppins font-serif flex flex-col gap-3">
            <p>
              <TypeAnimation
                sequence={["Hello, I'm Abhilash Pal "]}
                cursor={false}
                className="text-[#00FFFF] font-bold text-xl"
              />
              — a Full Stack Developer working primarily with the MERN stack. I
              hold a B.Sc. in Information Technology from Mumbai University and
              have professional experience building production applications end
              to end.
            </p>

            <p>
              On the front end I work with React, JavaScript and Tailwind CSS to
              build interfaces that stay fast and readable on any screen size.
              On the back end I use Node.js, Express and MongoDB to design APIs
              and data models that are straightforward to extend.
            </p>

            <p>
              I care about clean, maintainable code and about shipping — turning
              a rough requirement into something people can actually use. I keep
              up with new tools in the ecosystem, and I bring clear
              communication and a collaborative attitude to every team I join.
            </p>

            <p>
              <span className="text-[#00FFFF] text-2xl font-bold">
                Let's connect:
              </span>{" "}
              Reach out on LinkedIn or browse the projects below to see what
              I've been building.
            </p>
          </div>
        </div>

        {/* Right: tabs */}
        <div className="md:w-1/2 w-full">
          <div
            role="tablist"
            aria-label="Education and experience"
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
                className={`w-1/2 h-full font-bold text-xl md:text-2xl transition-colors ${
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
            {activeTab === "education" && (
              <div id="panel-education" role="tabpanel">
                <Timeline items={education} />
              </div>
            )}

            {activeTab === "experience" && (
              <div id="panel-experience" role="tabpanel">
                <Experience items={experience} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;