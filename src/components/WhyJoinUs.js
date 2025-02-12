import { motion } from "framer-motion";
import {
  FaUsers,
  FaGlobe,
  FaLightbulb,
  FaBook,
  FaHandshake,
  FaAward,
  FaComments,
  FaRocket,
  FaNewspaper,
} from "react-icons/fa";

const benefits = [
  {
    title: "Explore Cutting-Edge Research and Innovations",
    icon: <FaLightbulb />,
    color: "bg-blue-600",
  },
  {
    title: "Foster Global Networking and Collaborations",
    icon: <FaGlobe />,
    color: "bg-purple-600",
  },
  {
    title: "Gain Diverse Perspectives",
    icon: <FaUsers />,
    color: "bg-green-600",
  },
  {
    title: "Interactive and Engaging Sessions",
    icon: <FaComments />,
    color: "bg-red-600",
  },
  {
    title: "Contribute to Global Challenges",
    icon: <FaHandshake />,
    color: "bg-yellow-600",
  },
  {
    title: "Professional Development",
    icon: <FaRocket />,
    color: "bg-indigo-600",
  },
  { title: "Share Your Expertise", icon: <FaBook />, color: "bg-pink-600" },
  {
    title: "Celebrate Interdisciplinary Innovation",
    icon: <FaNewspaper />,
    color: "bg-orange-600",
  },
  {
    title: "Publication Opportunities",
    icon: <FaBook />,
    color: "bg-teal-600",
  },
  { title: "CERADA Awards", icon: <FaAward />, color: "bg-gray-600" },
];

const WhyJoinUs = () => {
  return (
    <section
      id="why-join"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-16 px-6"
    >
      {/* Floating Background Effects */}
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

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl sm:text-5xl font-bold uppercase tracking-wider text-center"
      >
        Why Join Us at ICSTEET-2026?
      </motion.h2>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 mt-12 w-full max-w-5xl">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className={`flex items-center p-6 rounded-xl shadow-lg hover:scale-105 transition-transform ${benefit.color}`}
          >
            <div className="text-white text-3xl sm:text-5xl mr-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold">
              {benefit.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyJoinUs;
