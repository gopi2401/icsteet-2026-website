import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import icsteetlogo from "../img/icsteet.webp";

const Navbar = () => {
  const location = useLocation();
  const navbar = [
    { name: "Home", link: "/" },
    { name: "About", link: "/About" },
    { name: "Session", link: "/SessionTracks" },
    { name: "Submission", link: "/Submission" },
    { name: "ContactUs", link: "/ContactUs" },
  ];
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link
          to="/"
          className="flex items-center space-x-1 rtl:space-x-reverse"
        >
          <img src={icsteetlogo} className="h-12" alt="Logo" />
        </Link>
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
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navbar.map((nav, index) => (
              <li key={index}>
                <Link
                  to={nav.link}
                  className={`block py-2 px-3 rounded-sm md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500 ${
                    location.pathname === nav.link
                      ? "text-white bg-blue-700 md:text-blue-700"
                      : "text-gray-900"
                  }`}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
            <li>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Link
                  to="/Login"
                  className="mt-8 px-6 py-2 bg-yellow-500 text-gray-900 font-semibold text-lg rounded-lg shadow-lg hover:bg-yellow-400 transition-all"
                >
                  Login
                </Link>
              </motion.div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
