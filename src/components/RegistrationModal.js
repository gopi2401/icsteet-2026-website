const RegistrationModal = ({ isOpen, onClose }) => { if (!isOpen) return null;
return (
<div
  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
>
  <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
    <h2 className="text-xl font-bold mb-4">Register for ICSTEET 2026</h2>
    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-2 border mb-3"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="w-full p-2 border mb-3"
    />
    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
      Submit
    </button>
    <button onClick="{onClose}" className="mt-3 text-gray-600">Close</button>
  </div>
</div>
); }; export default RegistrationModal;
