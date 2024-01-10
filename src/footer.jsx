import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer class="rounded-t-[1rem] shadow">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="self-center text-3xl font-semibold font-robotSlab tracking-wider whitespace-nowrap dark:text-white">
            MFOLIO
          </span>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://www.linkedin.com/in/mayank-jha-674118228/"
                target="_blank"
                class="hover:underline me-4 md:me-6"
              >
                <FaLinkedin size={25} className="inline" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MayankJha014"
                target="_blank"
                class="hover:underline me-4 md:me-6"
              >
                <FaGithub size={25} className="inline" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/MayankJha014"
                target="_blank"
                class="hover:underline me-4 md:me-6"
              >
                <FaXTwitter size={25} className="inline" />
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 MFOLIO . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
