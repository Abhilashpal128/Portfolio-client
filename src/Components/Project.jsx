import React from "react";
import CabImage from "/Images/cabProjectImage.avif";
import TiicTacToe from "/Images/TicTacToe.png";
import PizzaPool from "/Images/PizzaPool.png";
import WeatherApp from "/Images/WeatherApp.jpg";
import PortFolioImage from "/Images/Portfolio.avif";
import Todo from "/Images/TodoApp.avif";
import VotingApp from "/Images/VotingApp.png";

function Project() {
  const Projects = [
    {
      image: PizzaPool,
      name: "Pizza Pool",
      description:
        "Designed and implemented the front-end user interface for ordering pizzas, tracking orders,and managing user accounts. Admin add or remove categories and menu-items  ",
      Technology: "Next Js, Tailwind css, Mongodb",
      Github: "https://github.com/Abhilashpal128/pizza-pool",
    },
    {
      image: CabImage,
      name: "VAHAN",
      description:
        "A WebApp Where Customer Can know the Accurate Cab Rent Based On the Cabs Varients",
      Technology:
        "React Js (Frontend) , NodeJs (Backend) , MongoDB (DataBase).",
      Github: "https://github.com/Abhilashpal128/VAHAN-client",
      live: "https://vahan-client.vercel.app/",
    },
    {
      image: WeatherApp,
      name: "Weather App",
      description:
        "Live Weather Forecaste : Realtime Updates on Current weather conditions",
      Technology: "Next Js , External API",
      Github: "https://github.com/Abhilashpal128/Weather-App",
      live: "https://weather-app-sigma-eight-19.vercel.app/",
    },
    {
      image: VotingApp,
      name: "Voting App",
      description:
        "Voting App Session based authenticated voting app where user can give vote to candidate, admin can add candidate and Declare Results",
      Technology: "React Js, Node Js, Express Js, Tailwind css , Mongodb",
      Github: "https://github.com/Abhilashpal128/voting-app-client",
      live: "https://voting-app-client.vercel.app/",
    },
    {
      image: PortFolioImage,
      name: "Portfolio",
      description:
        " See my portfolio! Dive into a showcase of my diverse projects, From innovative solutions to impactful results, each project reflects my dedication to excellence in Web Development",
      Technology:
        "React JS , Vite Server, Tailwind css , Node JS,Express JS,MongoDB",
      Github: "https://github.com/Abhilashpal128/Portfolio-client",
      live: "https://portfolio-client-rose.vercel.app/",
    },
    {
      image: TiicTacToe,
      name: "Tic Tac Toe",
      description:
        " I developed a Tic-Tac-Toe game using React to enhance my logic-building skills and learn the fundamentals of React development. This project demonstrates my ability to implement game mechanics and utilize React's component-based architecture effectively. ",
      Technology: "React Js",
      Github: "https://github.com/Abhilashpal128/TicTacToe",
      live: "https://tic-tac-toe-alpha-mocha.vercel.app/",
    },
  ];

  return (
    <div className="py-16" id="project">
      <h1 className="text-4xl md:py-2 font-bold text-white text-center">
        Projects
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center gap-10 mx-10 md:px-12 pt-4">
        {Projects.map((data) => {
          return (
            <div
              key={Math.random()}
              className="h-[300px] group relative items-center shadow-lg shadow-[#06BF96] justify-center overflow-hidden cursor-pointer rounded-lg "
            >
              <img
                className="object-cover w-full h-full rounded-lg group-hover:scale-125 transition-transform duration-500"
                src={data.image}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-transparent group-hover:to-[#06BF96]  "></div>
              <div className=" absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-700">
                <h1 className="text-3xl font-bold text-gray-300">
                  {data?.name}
                </h1>
                <div className="text-sm italic text-black font-bold mb-3 opacity-0 group-hover:opacity-100  duration-1000">
                  <p>{data?.description}</p>

                  <p>Technology Used:- {data?.Technology}</p>
                </div>
                <div className="flex gap-10">
                  <a href={data.Github} target="_blank">
                    <button className="bg-white w-[100px] font-bold h-[35px] rounded-md">
                      GitHub
                    </button>
                  </a>
                  {data.live && (
                    <a href={data.live} target="_blank">
                      <button className="bg-white w-[100px] font-bold h-[35px] rounded-md">
                        Live
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
