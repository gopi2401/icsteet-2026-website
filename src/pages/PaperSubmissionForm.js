import { useState } from "react";
import { motion } from "framer-motion";

const PaperSubmissionForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    coAuthor: "",
    email: "",
    mobile: "",
    whatsapp: "",
    linkedin: "",
    facebook: "",
    presentationCategory: "",
    presentationType: "",
    institution: "",
    department: "",
    designation: "",
    publication: "",
    conferenceInfo: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-6">
      <motion.div
        className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">
          Abstract/Full Paper Submission
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="title"
            placeholder="Title of the Paper"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="coAuthor"
            placeholder="Co-author Names"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Corresponding Author Email"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number (With Country Code)"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="whatsapp"
            placeholder="WhatsApp Number (With Country Code)"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="url"
            name="linkedin"
            placeholder="LinkedIn URL"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="url"
            name="facebook"
            placeholder="Facebook URL"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="presentationCategory"
                value="Oral"
                onChange={handleChange}
              />{" "}
              Oral
            </label>
            <label>
              <input
                type="radio"
                name="presentationCategory"
                value="Poster"
                onChange={handleChange}
              />{" "}
              Poster
            </label>
          </div>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="presentationType"
                value="Virtual"
                onChange={handleChange}
              />{" "}
              Virtual
            </label>
            <label>
              <input
                type="radio"
                name="presentationType"
                value="Physical"
                onChange={handleChange}
              />{" "}
              Physical
            </label>
          </div>
          <input
            type="text"
            name="institution"
            placeholder="University/Institution Name"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="designation"
            placeholder="Designation"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="publication"
                value="Yes"
                onChange={handleChange}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="publication"
                value="No"
                onChange={handleChange}
              />{" "}
              No
            </label>
          </div>
          <textarea
            name="conferenceInfo"
            placeholder="How did you know about the conference?"
            onChange={handleChange}
            className="w-full p-2 border rounded h-20"
            required
          ></textarea>
          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
            className="w-full p-2 border rounded h-20"
          ></textarea>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            required
          />
          <motion.button
            type="submit"
            className="w-full col-span-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Your Paper
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default PaperSubmissionForm;
