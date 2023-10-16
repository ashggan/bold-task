import { NavLink } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";
// import { motion } from "framer-motion";

export default function Navbar() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <nav className=" uppercase  dark:text-white font-[14px] border-b-[1px] border-b-[#e5e7eb49] fixed top-0 left-0 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center flex-raw justify-between mx-auto h-[60px]">
        <NavLink to="/" className="flex items-center gap-x-3">
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pictogram w-[20px] left-[30px]"
            // style="width: 20px; opacity: 1; left: 30px;"
          >
            <path d="M10 0L15 7.999H5L10 0Z" fill="#F43333"></path>
            <path d="M5 7.99902L10 15.998H0L5 7.99902Z" fill="#F43333"></path>
            <path
              d="M15 7.99902L20 15.998H10L15 7.99902Z"
              fill="#F43333"
            ></path>
          </svg>
          <span className="nav-item hover:bg-lightRed hover:text-red-500 text-[30px]">
            riangle
          </span>
        </NavLink>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          // className="hidden h-full md:grid  md:w-auto"
          className=" h-full flex"
          id="navbar-default"
        >
          <ul className=" flex flex-col md:flex-row  h-full  items-center">
            <li>
              <NavLink
                to="/work"
                className="nav-item hover:bg-lightRed hover:text-mainColor"
                aria-current="page"
              >
                work
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="nav-item hover:bg-lightRed hover:text-mainColor"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stories"
                className="nav-item hover:bg-lightRed hover:text-mainColor"
              >
                stories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="nav-item hover:bg-lightRed hover:text-mainColor"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <div
                className="nav-item hover:bg-lightRed hover:text-mainColor cursor-pointer"
                onClick={toggleTheme}
              >
                {theme === "light" ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="moon"
                  >
                    <path
                      d="M5 4.25C5 3.29312 5.14094 2.32469 5.5 1.5C3.11156 2.53969 1.5 4.97875 1.5 7.75C1.5 11.4778 4.52219 14.5 8.25 14.5C11.0213 14.5 13.4603 12.8884 14.5 10.5C13.6753 10.8591 12.7069 11 11.75 11C8.02219 11 5 7.97781 5 4.25Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sun"
                  >
                    <path
                      d="M8 1.5V3M8 13V14.5M12.5962 3.40375L11.5356 4.46438M4.46438 11.5356L3.40375 12.5962M14.5 8H13M3 8H1.5M12.5962 12.5962L11.5356 11.5356M4.46438 4.46438L3.40375 3.40375"
                      stroke="#F43F5E"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z"
                      stroke="#F43F5E"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
