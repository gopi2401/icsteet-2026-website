import { motion } from "framer-motion";
import {
  FaMicrophone,
  FaUsers,
  FaFileAlt,
  FaHandshake,
  FaBook,
  FaAward,
} from "react-icons/fa";

const KeyHighlights = () => {
  const highlights = [
    {
      title: "Interdisciplinary Sessions",
      icon: <FaUsers />,
      desc: "Engage in thought-provoking sessions that bridge various disciplines and explore their interconnectedness.",
    },
    {
      title: "Expert Keynote Speakers",
      icon: <FaMicrophone />,
      desc: "Learn from renowned experts who will share their insights and experiences.",
    },
    {
      title: "Paper Presentations",
      icon: <FaFileAlt />,
      desc: "Present your research findings and contribute to discussions on a wide range of topics.",
    },
    {
      title: "Networking Opportunities",
      icon: <FaHandshake />,
      desc: "Connect with peers, researchers, and industry professionals to build collaborations and partnerships.",
    },
    {
      title: "Publication Opportunities",
      icon: <FaBook />,
      desc: "Selected papers will have the opportunity to be published in Scopus-indexed journals.",
    },
    {
      title: "CERADA Awards",
      icon: <FaAward />,
      desc: "Celebrate excellence with our prestigious awards, recognizing outstanding contributions to the field.",
    },
  ];
  return (
    <section
      id="highlights"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-16 px-6"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full opacity-20"
      ></motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20"
      ></motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl sm:text-5xl font-bold uppercase tracking-wider text-center"
      >
        Key Highlights
      </motion.h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-12 w-full max-w-5xl">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:bg-gray-700 transition-all"
          >
            <div className="text-yellow-400 text-5xl mb-4">
              {highlight.icon}
            </div>
            <h3 className="text-2xl font-semibold">{highlight.title}</h3>
            <p className="mt-2 text-gray-300">{highlight.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default KeyHighlights;
