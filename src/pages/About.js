import { motion } from "framer-motion";

import About from "../img/about_icsteet.webp";
import About2 from "../img/theme-Cg.webp";

const AboutICSTEET = () => {
  const objectives = [
    {
      title: "Promote Interdisciplinary Collaboration",
      description:
        "To foster collaboration between diverse fields including social sciences, education, engineering and technology. ICSTEET aims to create an inclusive platform for researchers, practitioners and educators to share ideas and explore new, innovative solutions to global challenges.",
    },
    {
      title: "Highlight Innovations in Research",
      description:
        "To showcase cutting-edge research, innovations and technological advancements that are driving progress in teaching, learning, engineering and social sciences. The conference aims to emphasize the role of interdisciplinary approaches in solving complex problems.",
    },
    {
      title: "Address Global Challenges",
      description:
        "To provide a forum for discussing critical global issues that require urgent attention, such as sustainable development, social equity and technological advancements. The conference aims to explore how the integration of knowledge from different domains can offer holistic solutions to these challenges.",
    },
    {
      title: "Enhance Knowledge Sharing and Dissemination",
      description:
        "To facilitate the exchange of ideas, experiences and research findings among participants. ICSTEET aims to disseminate valuable knowledge that can be applied in educational practices, industry innovations and research advancements across various sectors.",
    },
    {
      title: "Support Career and Professional Development",
      description:
        "To offer opportunities for professional networking, skill development and collaboration with international experts. ICSTEET provides a platform for academics, researchers and professionals to advance their careers by engaging in meaningful dialogues and collaborations.",
    },
    {
      title: "Encourage Innovative Teaching Practices",
      description:
        "To explore new teaching methodologies, technological tools and educational strategies that enhance the quality and effectiveness of education. ICSTEET is dedicated to encouraging innovation in teaching practices that address the evolving needs of learners in the digital age.",
    },
    {
      title: "Facilitate Multidisciplinary Research",
      description:
        "To promote research that integrates multiple disciplines, encouraging participants to work beyond traditional boundaries and create solutions that benefit both academia and industry. ICSTEET offers an environment where research in engineering, technology, education and social sciences can converge and thrive.",
    },
    {
      title: "Provide a Platform for Future Research Directions",
      description:
        "To identify emerging trends and future directions in research and education. The conference aims to inspire researchers and practitioners to think critically about the future of technology, social sciences and education and how to adapt to the ever-changing global landscape.",
    },
  ];

  const staggerContainer = (staggerChildren = 0.1, delayChildren = 0.1) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });

  const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  });
  return (
    <section className="bg-gradient-to-r from-gray-600 to-gray-800 ">
      <div className="max-h-98 mx-auto overflow-hidden sm:mb-8">
        <img
          src={About}
          alt="About ICSTEET"
          className="w-full h-96 object-cover object-center"
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center py-8 px-2 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          About ICSTEET-2026
        </h2>
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
      <div className="md:h-78 bg-white my-8 p-5 flex flex-col md:flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mx-auto md:w-3/4"
        >
          <h3 className="text-base md:text-lg font-bold mb-2">
            Conference Theme
          </h3>
          <div className="text-xs md:text-sm leading-relaxed">
            <p className="">
              The theme of the conference is{" "}
              <span className="text-yellow-500">
                "Bridging the Gap: Innovations and Challenges in Social
                Sciences, Teaching & Education, Engineering and Technology"
              </span>
              . We aim to explore the latest advancements, challenges and future
              directions in these diverse fields, emphasizing the role of
              interdisciplinary approaches in addressing global challenges.
            </p>
            <p className="mt-2">
              This theme emphasizes fostering innovation and collaboration
              across disciplines, encouraging participants to present solutions
              that address real-world challenges, promote sustainable
              development and advance knowledge for a brighter future. The
              conference underscores the interconnectedness of diverse fields
              and their collective potential to generate holistic, impactful
              solutions.
            </p>
            <p className="mt-2">
              By bringing together researchers, academics, professionals and
              students, the{" "}
              <span className="text-yellow-500">ICSTEET-2026</span> provides an
              invaluable platform for networking, sharing best practices and
              discussing advancements in education, engineering, technology,
              social sciences and humanities. The conference serves as a
              catalyst for fostering multidisciplinary collaboration and driving
              meaningful change in academia and beyond.
            </p>
          </div>
        </motion.div>
        <div className="mt-4 md:mt-0 md:w-1/2 flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            src={About2}
            className="w-72 md:w-96 rounded-xl"
          ></motion.img>
        </div>
      </div>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Conference Objectives
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              variants={fadeIn("right", "spring", index * 0.2, 1)}
              className="bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="ml-4 text-lg font-semibold text-white">
                  {objective.title}
                </h3>
              </div>
              <p className="text-gray-200 text-sm leading-relaxed">
                {objective.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <p className="mx-auto max-w-6xl text-white text-center p-4">
        By achieving these objectives, ICSTEET aims to contribute to the
        development of a sustainable, innovative and knowledge-driven world
        where education, technology, engineering and social sciences work
        together to address global challenges.
      </p>
    </section>
  );
};

export default AboutICSTEET;
