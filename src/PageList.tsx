import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import QuestionPage from "./components/pages/QuestionPage";

const PageList = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/question" element={<QuestionPage />} />
      </Routes>
    </>
  );
};

export default PageList;
