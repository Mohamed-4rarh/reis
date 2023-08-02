import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, close, menu } from "../assets";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="w-full py-5 px-5 sm:px-20 justify-center bg-white shadow-lg z-10 sticky top-0 w-full">
      <nav className="flex items-center justify-between">
        <Link to='/'>
          <img src={logo} alt="reis" />
        </Link>
        <ul className="lg:flex hidden">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`${
                index == navLinks.length - 1 ? "mr-0" : "mr-[30px]"
              } hover:text-indigo-600`}
            >
              <Link
                
                to={nav.id}
                className=" uppercase font-normal hover:font-semibold"
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden block">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => !prev)} />
          <div className={`${toggle ? 'flex' : 'hidden'} z-10 bg-white p-6 bg-black-gradient absolute top-[70px] rounded-t-none right-0 my-2 min-w-[140px] rounded-xl`}>
            <ul className=" text-right flex flex-col flex-1 gap-5">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className='ml-7 text-[#4a60a1]'
                >
                  <Link
                    onClick={() => setToggle(false)}
                    to={nav.id}
                    className=" uppercase font-normal hover:font-semibold"
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
