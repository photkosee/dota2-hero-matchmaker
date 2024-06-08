import { useState } from "react";
import { useNavigate } from "react-router-dom";

import data from "../../data.json";
import { Node, Option } from "../../types";

const QuestionPage = () => {
  const [currentNode, setCurrentNode] = useState<Node>(data as Node);
  const [fade, setFade] = useState<boolean>(false);
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  };

  const handleAnswerClick = (option: Option) => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
    }, 1500);
    setTimeout(() => {
      if (option.character) {
        navigate(`/hero/${option.character}`);
      } else if (option.options) {
        setCurrentNode(option as Node);
      }
    }, 1000);
  };

  return (
    <>
      <div
        className="min-h-screen w-[calc(100vw - 100%)] h-full flex justify-center
        bg-[url('../public/q-bg.webp')] bg-cover bg-center bg-no-repeat p-7"
      >
        <div
          className="w-full max-w-3xl animate-fadein h-full flex flex-col
          gap-10"
        >
          <div
            className={`
              mt-[100px] flex flex-col text-center items-center gap-8 w-full min-h-[400px]
              ${fade && "animate-fadeback"}
            `}
          >
            <span className="text-3xl text-white font-semibold uppercase">
              {currentNode.question}
            </span>

            <div className="bg-[#ff6046] w-[70px] h-[3px] rounded-[1px]" />

            <div className="w-full flex flex-col gap-3">
              {currentNode.options.map((option, index) => (
                <button
                  key={index}
                  className="w-full py-3 rounded-md border border-gray-900/50 shadow-xl
                  bg-gradient-to-r from-black/50 to-black/30 hover:translate-y-[-3px]
                  transition-all duration-350"
                  onClick={() => handleAnswerClick(option)}
                  disabled={fade}
                >
                  {option.answer}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <button
              className="uppercase text-[#e2dace] font-semibold border-[#ffffff50]
              border-[3px] rounded-[5px] px-4 py-2 hover:border-[#ff6046]
              hover:translate-y-[-3px] transition-all duration-350"
              onClick={backHome}
            >
              Back to home
            </button>
            <a
              href="https://github.com/photkosee/dota2-hero-matchmaker"
              target="_blank"
              className="hover:text-[#ff6046] transition-all duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionPage;
