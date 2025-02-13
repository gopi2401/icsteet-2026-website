import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaGlobe,
  FaBrain,
  FaUsers,
  FaLaptopCode,
  FaBuilding,
  FaLightbulb,
} from "react-icons/fa";

const SessionsTracks = () => {
  const sessions = [
    {
      title: "Emerging Technologies & Education",
      icon: <FaLaptopCode />,
      color: "bg-blue-600",
    },
    {
      title: "New Trends & Modern Approaches",
      icon: <FaLightbulb />,
      color: "bg-purple-600",
    },
    {
      title: "Education & Industry Co-operation",
      icon: <FaBuilding />,
      color: "bg-green-600",
    },
    {
      title: "Education & International Cooperation",
      icon: <FaGlobe />,
      color: "bg-red-600",
    },
    {
      title: "Teaching - Learning Relationship",
      icon: <FaChalkboardTeacher />,
      color: "bg-yellow-600",
    },
    {
      title: "Sociology and Anthropology",
      icon: <FaUsers />,
      color: "bg-indigo-600",
    },
    { title: "Psychology", icon: <FaBrain />, color: "bg-pink-600" },
    {
      title: "Social Science & Humanities",
      icon: <FaBookOpen />,
      color: "bg-orange-600",
    },
    {
      title: "Engineering & Technology",
      icon: <FaLaptopCode />,
      color: "bg-teal-600",
    },
  ];

  const deadlines = [
    { title: "Early Bird Registration", date: "30 April 2025" },
    { title: "Abstract Submission", date: "1 April 2025" },
    { title: "Full Paper Submission", date: "31 May 2025" },
    { title: "Final Registration", date: "30 June 2025" },
  ];

  return (
    <section
      id="sessions"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white py-16 px-6"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute top-20 left-10 w-40 h-40 bg-purple-500 rounded-full opacity-20"
      ></motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400 rounded-full opacity-20"
      ></motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl sm:text-5xl font-bold uppercase tracking-wider text-center"
      >
        Sessions & Call for Papers
      </motion.h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-12 w-full max-w-6xl">
        {sessions.map((session, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className={`relative ${session.color} p-6 rounded-xl shadow-lg hover:scale-105 transition-transform`}
          >
            <div className="text-white text-3xl sm:text-5xl mb-4">
              {session.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold">
              {session.title}
            </h3>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-16 w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg text-center"
      >
        <h3 className="text-3xl font-semibold mb-4">Submission Deadlines</h3>
        <ul className="grid sm:grid-cols-2 gap-4">
          {deadlines.map((deadline, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-gray-700 p-4 rounded-lg shadow-md text-lg font-medium"
            >
              <span className="block text-yellow-400">{deadline.title}:</span>{" "}
              {deadline.date}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default SessionsTracks;
