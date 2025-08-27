import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router";

const ResponsiveMenu = ({ openNav, setOpenNav }) => {
  return (
    <div
      className={`${
        openNav ? "right-0 transition-all duration-200 w-full" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex  h-screen w-[75%] flex-col  justify-between bg-white px-8 pb-6 text-black md:hidden rounded-r-xl shadow-md transition-all`}
    >
      <div>
        <nav className="mt-8">
          <ul className="flex flex-col  gap-7 text-2xl font-semibold">
              <button onClick={()=>setOpenNav(false)}>
                <FiX size={28} />
              </button>
            <Link
              to={"/"}
              onClick={() => setOpenNav(false)}
              className="cursor-pointer"
            >
              <li>Home</li>
            </Link>
            <Link
              to={"/products"}
              onClick={() => setOpenNav(false)}
              className="cursor-pointer hover:text-red-500"
            >
              <li>Products</li>
            </Link>
            <Link
              to={"/about"}
              onClick={() => setOpenNav(false)}
              className="cursor-pointer"
            >
              <li>About</li>
            </Link>
            <Link
              to={"/contact"}
              onClick={() => setOpenNav(false)}
              className="cursor-pointer"
            >
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
