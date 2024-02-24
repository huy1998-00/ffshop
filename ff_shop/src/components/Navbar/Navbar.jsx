import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="flex justify-between  items-center bg-black w-full lg:h-16 md:h-20 sm:h-16 shadow-lg shadow-red-400">
      {/* logo */}
      <div>
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8"
            alt="Flowbite Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
            FFSHOP
          </span>
        </a>
      </div>
      {/* navigation */}
      <div>
        <ul className="flex  items-center gap-[4vw] text-white md:hidennav">
          <li>
            <a href="" className="hover:text-red-400">
              Currency
            </a>
          </li>
          <li>
            <a href="" className="hover:text-red-400">
              Items
            </a>
          </li>
          <li>
            <a href="" className="hover:text-red-400">
              Account
            </a>
          </li>
          <li>
            <a href="" className="hover:text-red-400">
              About Us
            </a>
          </li>
        </ul>
      </div>

      {/* login / logout button  */}
      <div className="  flex justify-between gap-[1vw] ">
        <div>
          <button className="  bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] rounded-xl hover:text-red-400   ">
            Login
          </button>
        </div>
        <div>
          <button className="bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] rounded-xl hover:text-red-400  ">
            logout
          </button>
        </div>
      </div>
      {/* cart */}
      <div className=" h-8 w-24 relative hover:cursor-pointer transition duration-150 ease-in-out ">
        <div className="absolute top-2 left-8">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-2xl text-white"
          />
        </div>
        <div class=" absolute top-0 left-12 ">
          <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white ">
            3
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
