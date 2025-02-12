import { motion } from "framer-motion";

import ScopusLogo from "../img/Scopus.png";
import SCIELogo from "../img/SCIE-logo.png";
import WebOfScienceLogo from "../img/web.png";
import ClarivateLogo from "../img/CARADA.png";

const ProceedingsPublications = () => {
  const logos = [
    { src: ScopusLogo, alt: "Scopus", delay: 0.2 },
    { src: SCIELogo, alt: "SCIE", delay: 0.4 },
    { src: WebOfScienceLogo, alt: "Web of Science", delay: 0.6 },
    { src: ClarivateLogo, alt: "Clarivate", delay: 0.8 },
  ];
  return (
    <section
      id="publications"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-16 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl sm:text-5xl font-bold uppercase tracking-wider text-center"
      >
        Proceedings & Publications
      </motion.h2>

      <p className="text-lg text-gray-300 text-center mt-4 max-w-2xl">
        Selected papers from ICSTEET-2026 will be published in Scopus, SCIE, Web
        of Science, and Clarivate-indexed journals, ensuring maximum visibility
        and recognition.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 w-full max-w-4xl">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: logo.delay }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg hover:scale-110 transition-transform"
          >
            <img src={logo.src} alt={logo.alt} className="w-32 h-auto" />
          </motion.div>
        ))}
      </div>
      <p className="text-lg text-gray-300 text-center mt-10 max-w-2xl">
        Note: ICETMRS - 2025 Proceedings will be submitted to the Web of science
        Book citation index (BkCI) and Scopus for evaluation and indexing
        purposes (T&C)* apply.
      </p>
    </section>
  );
};

export default ProceedingsPublications;
