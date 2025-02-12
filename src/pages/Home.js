import HomeSection from "../components/HomeSection";
import WelcomeSection from "../components/WelcomeSection";
import AboutSection from "../components/AboutSection";
import ConferenceTheme from "../components/ConferenceTheme";
import KeyHighlights from "../components/KeyHighlights";
import SessionsTracks from "../components/SessionsTracks";
import WhyJoinUs from "../components/WhyJoinUs";
import ProceedingsPublications from "../components/ProceedingsPublications";

const Home = () => {
  return (
    <main className="w-full min-h-screen">
      <marquee width="100%" direction="left">
        <span className="bg-red-500 rounded-full p-1 text-white font-bold">
          HYBRID EVENT
        </span>{" "}
        - You can participate in person in the Philippines or Virtually from
        your home or office.
      </marquee>
      {/* <div className="w-full bg-red-500 text-white overflow-hidden whitespace-nowrap relative flex items-center">
        <p className="marquee-text">
          {" "}
          <span className="bg-red-500 rounded-full p-1 text-white font-bold">
            HYBRID EVENT
          </span>{" "}
          - You can participate in person in the Philippines or Virtually from
          your home or office.
        </p>
      </div> */}
      <HomeSection />
      <WelcomeSection />
      <AboutSection />
      <ConferenceTheme />
      <KeyHighlights />
      <SessionsTracks />
      <WhyJoinUs />
      <ProceedingsPublications />
    </main>
  );
};

export default Home;
