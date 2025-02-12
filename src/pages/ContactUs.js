import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-10 rounded-2xl shadow-2xl max-w-3xl w-full"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-4">
              <FaPhoneAlt className="text-blue-500 text-xl" />
              <span className="text-gray-700">+91 8072381719</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-500 text-xl" />
              <span className="text-gray-700">info@icsteet.com</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-blue-500 text-xl" />
              <span className="text-gray-700">
                No.147/383A, Second Floor, Paper Mills Road, Peravallur, Chennai-600082, Tamil Nadu, India.
              </span>
            </motion.div>
          </div>
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4"
          >
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-28"></textarea>
            <motion.button whileHover={{ scale: 1.05 }} className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition">Send Message</motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}
