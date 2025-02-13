import { format } from "date-fns";

import giphy from "../img/giphy.gif";
import CountdownTimer from "./CountdownTimer";
import ConferenceHeader from "./ConferenceHeader";

const HomeSection = () => {
  const conferenceDate = new Date(2026, 0, 29);

  return (
    <>
      <section
        className={`flex flex-col pt-5 sm:pt-24 items-center gap-3 h-screen bg-[url(${giphy})] bg-cover`}
      >
        <CountdownTimer targetDate={conferenceDate} />
        <ConferenceHeader
          title="2nd International Conference on Social Sciences, Teaching & Education, Engineering and Technology"
          date={format(conferenceDate, "dd MMMM yyyy")}
          location="Manila, Philippines"
          onRegister={() => null}
          ISBN="978-15-545371-2-9"
          organizedBy="Confworld Educational Research and Development Association"
          description="Theme: Bridging the Gap: Innovations and Challenges in Social Sciences, Teaching & Education, Engineering and Technology"
        />
      </section>
    </>
  );
};
export default HomeSection;
