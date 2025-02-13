import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SessionTracks from "./pages/SessionTracks";
import AboutICSTEET from "./pages/About";
import Submission from "./pages/PaperSubmissionForm";
import ContactUs from "./pages/ContactUs";

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/Login" && <Navbar />}
      <Routes>
        <Route path="Login" element={<Login />} exact />
        <Route path="/" element={<Home />} />
        <Route path="SessionTracks" element={<SessionTracks />} />
        <Route path="About" element={<AboutICSTEET />} />
        <Route path="Submission" element={<Submission />} />
        <Route path="ContactUs" element={<ContactUs />} />
      </Routes>
      {location.pathname !== "/Login" && <Footer />}
    </>
  );
};

export default App;
