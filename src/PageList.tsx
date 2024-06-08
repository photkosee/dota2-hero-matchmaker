import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import QuestionPage from "./components/pages/QuestionPage";
import HeroPage from "./components/pages/HeroPage";

const PageList = () => {
  return (
    <>
      <Routes>
        <Route path="/dota2-hero-matchmaker/" element={<LandingPage />} />
        <Route
          path="/dota2-hero-matchmaker/question"
          element={<QuestionPage />}
        />
        <Route
          path="/dota2-hero-matchmaker/hero/:hero"
          element={<HeroPage />}
        />
      </Routes>
    </>
  );
};

export default PageList;
