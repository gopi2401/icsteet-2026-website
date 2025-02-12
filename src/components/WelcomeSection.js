import { motion } from "framer-motion";

import EducationIcon from "../img/Education Icon PNG.png";
import TechnologyIcon from "../img/TechnologyIcon.png";
import GlobeInnovation from "../img/globeInnovation.png";
import Image from "../img/image.png";

const WelcomeSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center  bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="relative container mx-auto text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl sm:text-5xl font-bold"
        >
          Welcome to ICSTEET 2026
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-4 text-lg"
        >
          The International Conference on Social Sciences, Teaching & Education,
          Engineering, and Technology (ICSTEET) is back for its second edition
          and we are excited to invite you to join us in this groundbreaking
          event! ICSTEET-2026 will bring together leading scholars, industry
          experts, academics and researchers from around the world to explore
          the latest advancements and tackle the challenges faced by
          interdisciplinary fields.
        </motion.p>
      </div>

      <motion.img
        src={TechnologyIcon}
        alt="TechnologyIcon"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-16 w-24 h-24 opacity-80"
      />

      <motion.img
        src={EducationIcon}
        alt="EducationIcon"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 sm:bottom-20 right-16 sm:right-20 w-20 h-20 opacity-80"
      />

      <motion.img
        src={GlobeInnovation}
        alt="Global Innovation"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 sm:top-40 right-16 sm:right-10 w-16 h-16 opacity-80"
      />
    </section>
  );
};

export default WelcomeSection;
