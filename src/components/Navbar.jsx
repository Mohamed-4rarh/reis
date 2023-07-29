import { Link } from "react-router-dom";
import { logo } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <div className="w-full py-5 px-20 justify-center">
      <nav className="flex items-center justify-between">
        <img src={logo} alt="reis" />
        <ul className="flex">
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
      </nav>
    </div>
  );
};

export default Navbar;
