const Footer = () => {
  return (
    <>
      <footer className="bg-black/10 py-10">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold text-orange-400">
              Navigation Links
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                🏠{" "}
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                🏢{" "}
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                📚{" "}
                <a href="#" className="hover:underline">
                  Session
                </a>
              </li>
              <li>
                ✋{" "}
                <a href="#" className="hover:underline">
                  Submission
                </a>
              </li>
              <li>
                📰{" "}
                <a href="#" className="hover:underline">
                  Publication
                </a>
              </li>
              <li>
                📌{" "}
                <a href="#" className="hover:underline">
                  Registration
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-orange-400">
              Get In Touch
            </h3>
            <p className="mt-3">📞 +91 8072381719</p>
            <p>✉ info@icsteet.com</p>
            <p>📍 Manila, Philippines</p>
            <div className="bg-white text-gray-900 p-3 mt-3 rounded-md shadow-md">
              <strong>Organizer Address</strong>
              <p>No.147/383A, Second Floor, Paper Mills Road, Peravallur,</p>
              <p>Chennai-600082, Tamil Nadu, India.</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-orange-400">
              Social Media
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                📘{" "}
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                ▶️{" "}
                <a href="#" className="hover:underline">
                  YouTube
                </a>
              </li>
              <li>
                📸{" "}
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                🐦{" "}
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                🔗{" "}
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                💬{" "}
                <a href="#" className="hover:underline">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm mt-8 border-t border-white/30 pt-4">
          <p>Copyright © 2025 CERADA. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
