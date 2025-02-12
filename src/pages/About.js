import { motion } from "framer-motion";

const AboutICSTEET = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-800 text-white py-20 px-6 md:px-12">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">About ICSTEET</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          ICSTEET unites top academic scientists, researchers, and scholars to
          exchange experiences and share groundbreaking research. This
          conference offers an interdisciplinary platform to present new
          advances in Education, Engineering & Technology, Social Sciences, and
          Humanities.
        </p>
        <p className="text-lg md:text-xl mt-4">
          Join us to explore cutting-edge research, foster interdisciplinary
          collaborations, and network with peers worldwide.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutICSTEET;
