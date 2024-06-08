import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import QuestionPage from "./components/pages/QuestionPage";
import HeroPage from "./components/pages/HeroPage";

const PageList = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/hero/:hero" element={<HeroPage />} />
      </Routes>
    </>
  );
};

export default PageList;
