import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SessionTracks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sessions = [
    "Emerging Technologies & Education",
    "New Trends & Modern Approaches",
    "Education & Industry Co-operation",
    "Education & International Cooperation",
    "Teaching - Learning Relationship",
    "Sociology and Anthropology",
    "Psychology",
    "Social Science & Humanities",
    "Engineering & Technology",
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
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <div>
              <h2 className="text-lg font-semibold">Session {index + 1}</h2>
              <p className="text-gray-700">{session}</p>
            </div>
          </div>
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
