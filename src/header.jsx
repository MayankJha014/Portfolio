import UserImage from "./assets/mypic.jpg";

const Header = ({ projectRef }) => {
  return (
    <>
      <div className="flex flex-col justify-center w-full h-[40rem]">
        <div className=" ">
          <img
            src={UserImage}
            alt=""
            className="w-36 h-36 mx-auto rounded-full object-cover"
          />
        </div>
        <div className="text-center pt-8">
          <span className="text-3xl md:text-5xl my-2 w-fit mx-auto bg-clip-text font-robotSlab text-transparent font-extrabold bg-gradient-to-r from-violet-500 via-pink-400 to-orange-400 ">
            Hello, I{"'"}m Mayank,
          </span>
          <span className="text-2xl md:text-[2.75rem] mx-2   bg-clip-text font-robotSlab font-semibold">
            passionate
          </span>
          <p className="text-2xl md:text-[2.75rem] leading-[1.1]  bg-clip-text font-robotSlab font-semibold">
            developer, based in India.
          </p>
          <p className="text-[15px] max-w-[90%] md:max-w-[35%] leading-6  mx-auto py-7 text-zinc-300/75 font-gabarito">
            As a Full Stack Web and App Developer based in India, I bring
            visions to life with UI/UX design expertise, crafting immersive
            {/* digital experiences. Let{"'"}s shape the future together! */}
          </p>
          <div className="flex gap-3 justify-center">
            <button className="px-8 py-2.5 bg-white hover:bg-black hover:text-white text-black font-light  font-gabarito rounded-full">
              <a href="mailto:mayankjha014@gmail.com" target="_blank">
                Get in Touch
              </a>
            </button>
            <button
              onClick={() =>
                window.scrollTo({
                  top: projectRef.current.offsetTop,
                  behavior: "smooth",
                })
              }
              className="px-8 py-2.5 bg-transparent border border-white hover:bg-white text-white hover:text-black font-light  font-gabarito rounded-full"
            >
              View all Work
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
