import { motion } from "framer-motion";

import Modern from "../img/modern.webp";
import ConferenceThemes from "../img/Conference-Themes.webp";

const ConferenceTheme = () => {
  return (
    <section
      id="theme"
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center text-white p-6"
      style={{ backgroundImage: `url(${ConferenceThemes})` }}
    >
      {/*Overlay*/}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="relative container sm:flex items-center">
        <div className="container mx-auto">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            src={Modern}
            alt="Conference Theme"
            className="rounded-xl shadow-xl border-4 border-white"
          ></motion.img>
        </div>
        <div className="relative container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-3xl sm:text-5xl font-extrabold uppercase tracking-wider"
          >
            Conference Theme
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-4 text-3xl font-semibold text-yellow-400"
          >
            "Bridging the Gap: Innovations and Challenges"
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-6 text-lg max-w-4xl mx-auto leading-relaxed"
          >
            ICSTEET-2026 aims to bring together scholars, researchers, and
            industry experts to explore how innovations in social sciences,
            teaching, education, engineering, and technology can bridge gaps in
            knowledge, industry practices, and global challenges. This
            conference emphasizes interdisciplinary approaches to inspire future
            research and encourage global collaboration.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ConferenceTheme;
