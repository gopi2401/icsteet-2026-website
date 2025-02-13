import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import image1 from "../img/session/pexels-pavel-danilyuk-8294829.webp";
import image2 from "../img/session/pexels-mutecevvil-19915765.webp";
import image3 from "../img/session/pexels-jakubzerdzicki-30658383.webp";
import image4 from "../img/session/pexels-rdne-7648306.webp";
import image5 from "../img/session/pexels-cottonbro-6604502.webp";
import image6 from "../img/session/pexels-franjoli-productions-8241928.webp";
import image7 from "../img/session/pexels-xespri-724994.webp";
import image8 from "../img/session/pexels-markusspiske-2990645.webp";
import image9 from "../img/session/pexels-finite-captures-1993313-30604809.webp";

const SessionTracks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sessions = [
    {
      title: "Emerging Technologies & Education",
      image: image1,
      subtitles: ["AI & Machine Learning", "Data Science", "Blockchain"],
    },
    {
      title: "New Trends & Modern Approaches",
      image: image2,
      subtitles: [
        "Innovative Teaching Methods",
        "Blended Learning",
        "Gamification",
      ],
    },
    {
      title: "Education & Industry Co-operation",
      image: image3,
      subtitles: ["Skill Development", "Internship", "Industry Projects"],
    },
    {
      title: "Education & International Cooperation",
      image: image4,
      subtitles: [
        "International Collaboration",
        "Student Exchange Programs",
        "Research Collaboration",
      ],
    },
    {
      title: "Teaching - Learning Relationship",
      image: image5,
      subtitles: ["Teacher Training", "Student Engagement", "Mentoring"],
    },
    {
      title: "Sociology and Anthropology",
      image: image6,
      subtitles: ["Social Issues", "Cultural Studies", "Human Rights"],
    },
    {
      title: "Psychology",
      image: image7,
      subtitles: [
        "Mental Health",
        "Counseling",
        "Therapy",
        "Brain & Behaviour",
      ],
    },
    {
      title: "Social Science & Humanities",
      image: image8,
      subtitles: ["History", "Geography", "Political Science"],
    },
    {
      title: "Engineering & Technology",
      image: image9,
      subtitles: [
        "Industrial Engineering",
        "Electrical and Electronics Engineering",
        "Robotics and Automation",
      ],
    },
  ];

  const deadlines = [
    { date: "April 1, 2025", event: "Abstract Submission" },
    { date: "April 30, 2025", event: "Early Bird Registration" },
    { date: "May 31, 2025", event: "Full Paper Submission" },
    { date: "June 30, 2025", event: "Final Registration" },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % deadlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-blue-600">Session and Tracks</h1>
      <p className="text-gray-600 mt-3">
        Dive into the future with ICSTEET 2026. Our diverse sessions and tracks
        foster collaboration and drive transformative advancements.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {sessions.map((session, index) => (
          <motion.div
            key={index}
            className="relative w-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={session.image}
              alt={session.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 bg-white">
              <h2 className="text-xl font-semibold">
                {`Session${index} ` + session.title}
              </h2>
              <motion.div
                className="mt-2 text-start space-y-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {session.subtitles.map((subtitle, index) => (
                  <p key={index} className="text-sm text-gray-600">
                    {subtitle}
                  </p>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Timeline Animation */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-orange-500">
          Submission Deadlines
        </h2>
        <div className="relative mt-6 border-l-4 border-blue-500 pl-6">
          {deadlines.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: activeIndex === index ? 1 : 0.3, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {item.event}
              </h3>
              <p className="text-gray-600">{item.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SessionTracks;
