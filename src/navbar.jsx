import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between w-4/5 mx-auto py-4">
      <h1 className="font-semibold text-2xl text-white font-robotSlab">
        MFOLIO
      </h1>
      <button className="px-4 py-1.5 font-semibold bg-white uppercase text-xs text-black rounded-full font-robotSlab">
        <a href="mailto:mayankjha014@gmail.com" target="_blank">
          Let's Talk
        </a>
      </button>
    </div>
  );
};

export default Navbar;
