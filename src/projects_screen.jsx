import React, { useRef, useState } from "react";
import AxtraImg from "./assets/axtra.png";
import ChatImg from "./assets/Chat app.png";
import EnwoodImg from "./assets/enwood.png";
import LionImg from "./assets/lion club.png";
import TeleImg from "./assets/telemedi.png";

const ProjectScreen = ({ projectRef }) => {
  const projectList = [
    {
      title: "Chat Messaging",
      description:
        "A cutting-edge chat messaging app crafted with Node.js, ReactJS, and WebSockets. Experience secure authentication, real-time chat, and collaborative group messaging. Immerse yourself in the seamless fusion of technology, design, and innovation, redefining the standards of modern communication platforms. ",
      image: ChatImg,
      git: "https://github.com/MayankJha014/Chat-Messanger",
      demo: "https://chat-messanger-front.vercel.app/",
    },
    {
      title: "AXTRA UI Clone",
      description:
        "Elevate your Next.js UI with a dynamic blend of animations! This innovative interface boasts a diverse array of 10+ animations, ranging from subtle fades and slides to lively bounces and spins. Engage users with seamless transitions and captivating visual effects, ensuring a memorable and immersive browsing experience.",
      image: AxtraImg,
      git: "https://github.com/MayankJha014/apiero-tech",
      demo: "https://apiero-tech.vercel.app/",
    },
    {
      title: "Apiero Tele-HealthCare",
      description:
        "The telemedicine app connects users with licensed medical professionals via secure video calls, enabling scheduling, virtual consultations, and access to medical records. It ensures convenient, timely, and confidential healthcare services, enhancing accessibility while reducing the necessity for in-person visits.",
      image: TeleImg,
      git: "",
      demo: "https://www.tele.apierotechnica.com/",
    },
    {
      title: "Parsippany Lions Club(CMS)",
      description:
        " The CMS, developed on React.js and Node.js, delivers an intuitive content management experience. With the dynamic combination of React.js for interactive user interfaces and Node.js for efficient backend operations, it enables streamlined content creation and management, ensuring a responsive and engaging web presence.",
      image: LionImg,
      git: "",
      demo: "https://parsippanylionsclub.org/",
    },
    {
      title: "Entrepreneur-Woods",
      description:
        "Entrepreneur-Woods is a dynamic blogging site powered by Node.js, featuring an intuitive admin interface for seamless post management. Empower your entrepreneurial journey with easy backend control, allowing you to create, edit, and organize content effortlessly, enhancing your online presence and engagement.",
      image: EnwoodImg,
      git: "",
      demo: "https://entrepreneur-woods-wprw-front.vercel.app/",
    },
  ];
  return (
    <>
      <div className="space"></div>
      <div className="space"></div>
      <div className="flex flex-col md:flex-row w-4/5 mx-auto">
        <div className="w-20"></div>
        <div
          ref={projectRef}
          className="md:w-1/2 flex md:block text-left mx-auto"
        >
          <p className="text-2xl md:text-[2.5rem] text-left my-2 w-fit leading-[2.8rem] font-youngSerif font-medium ">
            Look at My
          </p>
          <p className="text-2xl my-auto mx-auto md:mx-0 md:text-5xl text-left md:my-2 w-fit  bg-clip-text font-robotSlab text-transparent font-bold bg-gradient-to-r from-violet-500 via-pink-400 to-orange-400 ">
            Projects
          </p>
        </div>
        <div className="md:w-1/2 mt-auto text-base font-gabarito text-zinc-300/80">
          <div className="text-center md:text-left lg:w-[30rem]">
            Specializing in ReactJS and Flutter, I bring projects to life with
            cutting-edge technologies. From dynamic web applications to sleek
            mobile apps, I transform concepts into stunning, interactive digital
            solutions.
          </div>
        </div>
      </div>
      <div className="space"></div>
      <div className="flex flex-wrap justify-center justify-items-center sm:justify-items-start gap-12 md:w-4/5 mx-auto">
        {projectList.map((x, index) => (
          <div key={index}>
            <ProjectComp
              title={x.title}
              description={x.description}
              image={x.image}
              git={x.git}
              demo={x.demo}
            />
          </div>
        ))}
      </div>
      <div className="h-80 w-11/12 my-20 mx-auto sm:m-24 rounded-b-[3rem] font-robotSlab tracking-wide gap-2 font-semibold flex flex-col justify-center items-center text-center bg-gradient-to-r from-[#b16ceaef] via-[#FF6567] to-[#ffa34cf1]">
        <p className="text-white  text-5xl">Interested in</p>
        <span className="text-white text-center text-5xl">
          working with me?
        </span>
        <button
          type="button"
          class="text-black bg-white my-4 hover:bg-white/80 font-medium rounded-full text-sm px-8 py-2.5 text-center me-2 mb-2"
        >
          <a href="mailto:mayankjha014@gmail.com" target="_blank">
            Connect
          </a>
        </button>
      </div>
    </>
  );
};

const ProjectComp = ({ title, image, description, git, demo }) => {
  const [live, setLive] = useState();
  const [active, setActive] = useState(false);
  return (
    <div className="w-fit sm:max-w-[22rem] shadow-lg shadow-white/20 drop-shadow-xl rounded-xl">
      <div
        onMouseOver={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        class="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-[#1C1C22] bg-clip-border text-white shadow-md"
      >
        <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
          <img
            src={image}
            // alt="ui/ux review check"
            className="object-cover h-64 w-full"
          />
        </div>
        <div class="p-6">
          <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h4>
          <p
            class={`block mt-3 font-sans ${
              active ? " max-h-80" : " max-h-4 "
            }  text-xl antialiased font-normal leading-relaxed transition-all duration-300 ease-in-out text-white/80`}
          >
            <div
              className={
                active
                  ? "line-clamp-none duration-300 transition-all ease-in-out"
                  : "line-clamp-2 duration-300 transition-all ease-in-out"
              }
            >
              {description}
            </div>
          </p>
        </div>
        <div class="flex items-center justify-between p-6 my-2">
          <p
            class={`block font-sans underline transition-all duration-500 delay-150 ease-in-out ${
              live == undefined ? "" : " opacity-0 "
            } underline-offset-4 text-base antialiased cursor-pointer font-normal leading-relaxed text-inherit`}
            onMouseOver={() => setLive(0)}
          >
            Live Demo
          </p>
          <button
            type="button"
            class={` ${
              live != undefined ? " translate-y-3" : " translate-y-32 "
            } text-gray-900 bg-white border transition-all duration-500  ease-in-out border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`}
            onMouseLeave={() => setLive()}
          >
            {git == "" ? (
              <>Private Repo</>
            ) : (
              <a href={live == 0 ? demo : git} target="_blank">
                {live == 0 ? "Live Demo" : live == 1 ? "Git Repo" : ""}
              </a>
            )}
          </button>
          <p
            class={`block font-sans transition-all duration-500 delay-150 ease-in-out underline ${
              live == undefined ? "" : " opacity-0 "
            } underline-offset-4 text-base antialiased cursor-pointer font-normal leading-relaxed text-inherit`}
            onMouseOver={() => setLive(1)}
          >
            Git Repo
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectScreen;
