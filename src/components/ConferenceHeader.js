import { motion } from "motion/react";
import CARADALogo from "../img/CARADA.png";
import ScopusLogo from "../img/Scopus.png";
import webLogo from "../img/web.png";
const ConferenceHeader = ({
  title,
  date,
  location,
  onRegister,
  ISBN,
  organizedBy,
  description,
}) => {
  return (
    <header className="text-center text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
        }}
        className="flex justify-center items-center"
      >
        <div className="sm:w-1/2">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="mt-2 text-lg">
            {date} | {location}
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 px-6 py-3 bg-yellow-500 text-gray-900 font-semibold text-lg rounded-lg shadow-lg hover:bg-yellow-400 transition-all"
          >
            Register Now
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4 },
        }}
        className="flex justify-center items-center pt-4 sm:pt-6"
      >
        <div className="sm:w-1/2">
          <p>
            <span className="font-bold">ISBN:</span> {ISBN} |{" "}
            <span className="font-bold">Organized by:</span> {organizedBy}
          </p>
          <h2 className="sm:text-xl italic">{description}</h2>
          <div className="flex justify-center items-center gap-2 sm:mt-5">
            <img className="w-20 sm:w-24" src={CARADALogo} alt="CARADALogo" />
            <img className="w-20 sm:w-24" src={ScopusLogo} alt="ScopusLogo" />
            <img className="w-20 sm:w-24" src={webLogo} alt="webLogo" />
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default ConferenceHeader;
