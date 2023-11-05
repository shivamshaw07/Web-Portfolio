import React from "react";
import pic from "../Assests/pic.jpeg";
import person from "../Assests/man.png";
import Tilt from "react-vanilla-tilt";
import './about.css'
const About = () => {
  return (
    <div
      id="About"
      className="h-auto py-20  w-full mx-auto flex flex-col justify-center items-center gap-[9vh]"
    >
      <div className="absolute -right-[60vh] w-[600px] h-[600px] rounded-full z-0 bg-[#FFD9D9]"></div>
      <div className="flex flex-col justify-center relative z-10 items-center gap-2 text-5xl font-bold">
        <div className="flex items-center gap-2">
          <img src={person} alt="admi" className="h-[7vh] w-auto" />
          About <span className="text-[#94c1eb]">Me</span>
        </div>
        <div className="w-[110%] h-[4px] bg-[#aacded] rounded-2xl">
          <div id="moving-div" className=" w-[8px] h-full rounded-full "></div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col  relative z-10  w-[85vw] justify-center items-center gap-[6vw]">
        <Tilt style={{borderRadius:"5%",padding:"20px",zIndex:0}}>
          <img src={pic} alt="bdj" className="rounded-full h-[40vh] w-auto" />
        </Tilt>

        <div className="flex flex-col justify-start lg:w-[50%] w-auto gap-5">
          <h1 className="text-4xl font-extrabold">I'm shivam</h1>
          <h2 className="text-[2.2vh] font-bold">
            Passionate Full Stack Developer | Compititive Programmer
          </h2>
          <p className="font-medium text-[#625f5f] text-[2vh]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sed
            repellendus iure officiis harum nesciunt voluptas asperiores,
            quisquam cum nobis dolorem autem placeat ut doloremque eos? Tempora,
            quis. Quas alias obcaecati beatae est incidunt e ad.
          </p>
          <p className="font-medium text-[#625f5f] text-[2vh]">
            Lorem ipsum dolor sit amet consectetur, adiptempore repellat! Vero
            fuga deserunt quia accusamus quibusdam hic, consectetur facere culpa
            vel consequuntur qu
          </p>
          <p className="font-medium text-[#625f5f] text-[2vh]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus quos
            unde soluta voluptatum neque deleniti atque voluptatem voluptas, nam
            doloribus dolores, nisi tenetur! Recusandae sed eum possimus
            reiciendis eveniet nobis!
          </p>
          <div className="flex flex-wrap text-sm gap-1">
            <div className="w-[48%] mb-2">
              <span className="text-[#1c7cdb]">Age</span> : 19
            </div>
            <div className="w-[48%] mb-2">
              <span className="text-[#1c7cdb]">Email</span> :
              shivamshaw9005@gamil.com
            </div>
            <div className="w-[48%] mb-2">
              <span className="text-[#1c7cdb]">College</span>: Asansol
              Engineering College
            </div>
            <div className="w-[48%] mb-2">
              <span className="text-[#1c7cdb]">Place</span> : Dhanbad,
              Jharkhand, India
            </div>
          </div>
        </div>
      </div>
      <button className="px-8 py-3 bg-[#4b97dd] rounded-full text-xl font-semibold hover:font-bold hover:scale-90 shadow-xl hover:shadow-2xl transition-all duration-500">
        Resume <span>&gt;</span>
      </button>
    </div>
  );
};

export default About;