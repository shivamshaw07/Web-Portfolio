import React from "react";
import "./skills.css";
import "../about.css";
import react from "../../Assests/icons/react-svgrepo-com.svg";
import node from "../../Assests/icons/node-js-svgrepo-com.svg";
import express from "../../Assests/icons/node-js-svgrepo-com (1).svg";
import redux from "../../Assests/icons/redux-svgrepo-com.svg";
import DSA from "../../Assests/icons/code-svgrepo-com.svg";
import Mongo from "../../Assests/icons/mongo-svgrepo-com.svg";
import html from "../../Assests/icons/html-5-svgrepo-com.svg";
import css from "../../Assests/icons/css-3-svgrepo-com.svg";
import python from "../../Assests/icons/python-svgrepo-com.svg";
import js from "../../Assests/icons/js-official-svgrepo-com.svg";
import cpp from "../../Assests/icons/c-.png";
import c from "../../Assests/icons/letter-c.png";
import net from "../../Assests/icons/netlify-svgrepo-com.svg";
import git from "../../Assests/icons/git-svgrepo-com.svg";
import github from "../../Assests/icons/github-142-svgrepo-com.svg";
import team from "../../Assests/icons/team-work-svgrepo-com.svg";

const Skills = () => {
  return (
    <div
      id="Skill"
      className="h-[auto] py-20 w-[85vw] flex flex-col gap-6 mx-auto items-center"
    >
      <div className="absolute -left-[60vh] w-[600px] h-[600px] rounded-full z-0 bg-[#D9F0E0]"></div>
      <div className="flex flex-col items-center">
        <h1 className=" lg:text-[7vh] md:text-[7vh] text-3xl font-bold tracking-wide mb-2">
          Skills & <span className="text-[#68a9e4]">Experience</span>
        </h1>
        <div className="w-[110%] h-[4px] bg-[#aacded] rounded-2xl ">
          <div id="moving-div" className=" w-[8px] h-full rounded-full "></div>
        </div>
      </div>
      <div className="flex md:flex-row lg:flex-row flex-col justify-center lg:gap-20 gap-8 w-[85vw] relative z-10">
        <div className="grid grid-cols-4 w-auto justify-center items-center py-6 ">
          <div className="animate flex flex-col mt-4 text-[1.4vh] font-semibold justify-center items-center py-2 px-6 h-[87px] w-[87px] rounded-full bg-[#d4e3ea6d] hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src={react} alt="react" />
            <div>ReactJs</div>
          </div>
          <div className="animate flex flex-col mt-4 text-[1.4vh] font-semibold justify-center items-center py-2 px-6 h-[87px] w-[87px] rounded-full bg-[#d4e3ea6d] hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src={express} alt="express" />
            <div>NodeJs</div>
          </div>
          <div className="animate flex flex-col mt-4 text-[1.4vh] font-semibold justify-center items-center py-2 px-6 h-[87px] w-[87px] rounded-full bg-[#d4e3ea6d] hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src={node} alt="node" />
            <div>ExpressJs</div>
          </div>
          <div className="animate flex flex-col mt-4 text-[1.4vh] font-semibold justify-center items-center py-2 px-6 h-[87px] w-[87px] rounded-full bg-[#d4e3ea6d] hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src={redux} alt="Redux" />
            <div>Redux</div>
          </div>
          <div className="animate flex flex-col mt-4 text-[1.4vh] font-semibold justify-center items-center py-2 px-6 h-[87px] w-[87px] rounded-full bg-[#d4e3ea6d] hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src={DSA} alt="DSA" />
            <div>DSA</div>
          </div>
          <div className="animate flex flex-col mt-4 text-[1.4vh] font-semibold justify-center items-center py-2 px-6 h-[87px] w-[87px] rounded-full bg-[#d4e3ea6d] hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src={Mongo} alt="Mongo" />
            <div>MongoDb</div>
          </div>
          <div className="animate flex flex-col mt-4 text-[1.4vh] font-semibold justify-center items-center py-2 px-6 h-[5.5rem] w-[5.5rem] rounded-full bg-[#d4e3ea6d] hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src={html} alt="html" />
            <div>HTML</div>
          </div>
          <div className="animate flex flex-col mt-4 text-[1.4vh] font-semibold justify-center items-center py-2 px-6 h-[87px] w-[87px] rounded-full bg-[#d4e3ea6d] hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src={css} alt="css3" />
            <div>CSS3</div>
          </div>
          <div className="animate flex flex-col mt-4 text-[1.4vh] font-semibold justify-center items-center py-2 px-6 h-[87px] w-[87px] rounded-full bg-[#d4e3ea6d] hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src={python} alt="Python" />
            <div>Python</div>
          </div>
          <div className="animate flex flex-col mt-4 text-[1.4vh] font-semibold justify-center items-center py-2 px-6 h-[87px] w-[87px] rounded-full bg-[#d4e3ea6d] hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src={js} alt="js" />
            <div>JavaScript</div>
          </div>
          <div className="animate flex flex-col mt-4 text-[1.4vh] font-semibold justify-center items-center py-2 px-6 h-[87px] w-[87px] rounded-full bg-[#d4e3ea6d] hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src={cpp} alt="cpp" />
            <div>CPP</div>
          </div>
          <div className="animate flex flex-col mt-4 text-[1.4vh] font-semibold justify-center items-center py-2 px-6 h-[87px] w-[87px]  rounded-full bg-[#d4e3ea6d] hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src={c} alt="c" />
            <div>C</div>
          </div>
          <div className="animate flex flex-col mt-4 text-[1.4vh] font-semibold justify-center items-center py-2 px-6 h-[87px] w-[87px] rounded-full bg-[#d4e3ea6d] hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src={net} alt="net" />
            <div>Netlify</div>
          </div>
          <div className="animate flex flex-col mt-4 text-[1.4vh] font-semibold justify-center items-center py-2 px-6 h-[87px] w-[87px] rounded-full bg-[#d4e3ea6d] hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src={git} alt="git" />
            <div>Git</div>
          </div>
          <div className="animate flex flex-col mt-4 text-[1.4vh] font-semibold justify-center items-center py-2 px-6 h-[87px] w-[87px]  rounded-full bg-[#d4e3ea6d] hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src={github} alt="github" />
            <div>GitHub</div>
          </div>
          <div className="animate flex flex-col mt-4 text-[1.4vh] font-semibold justify-center items-center py-2 px-6 h-[87px] w-[87px] rounded-full bg-[#d4e3ea6d] hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src={team} alt="team" />
            <div>Team work</div>
          </div>
        </div>
        <div className="right w-auto flex flex-col text-sm gap-16 justify-evenly h-full py-12">
          <div className="flex gap-4 items-baseline">
            <div>
              2022
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur 
              </p>
              <p>
                Lorem, ipsum.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-baseline">
            <div>
              2022
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur
              </p>
              <p>
                Lorem, ipsum.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-baseline">
            <div>
              2022
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur
              </p>
              <p>
                Lorem, ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;