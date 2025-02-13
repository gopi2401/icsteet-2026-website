import { motion } from "framer-motion";
import Gettyimages from "../img/gettyimages.webp";
const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url('${Gettyimages}')` }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl sm:text-5xl font-bold"
        >
          About ICSTEET
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-4 text-lg max-w-3xl mx-auto"
        >
          ICSTEET unites top academic scientists, researchers, and scholars to
          exchange experiences and share groundbreaking research. This
          conference offers an interdisciplinary platform to present new
          advances in Education, Engineering & Technology, Social Sciences, and
          Humanities.Join us to explore cutting-edge research, foster
          interdisciplinary collaborations and network with peers worldwide.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg"
        >
          Learn More
        </motion.button>
      </div>
    </section>
  );
};

export default AboutSection;
