import { useState } from "react";
import { useNavigate } from "react-router-dom";

import data from "../../data.json";
import { Node, Option } from "../../types";

const QuestionPage = () => {
  const [currentNode, setCurrentNode] = useState<Node>(data as Node);
  const [fade, setFade] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleAnswerClick = (option: Option) => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
    }, 1500);
    setTimeout(() => {
      if (option.character) {
        navigate(`/dota2-hero-matchmaker/hero/${option.character}`);
      } else if (option.options) {
        setCurrentNode(option as Node);
      }
    }, 1000);
  };

  return (
    <>
      <div
        className="min-h-screen w-[calc(100vw - 100%)] h-full flex justify-center
        bg-[url('./q-bg.webp')] bg-cover bg-center bg-no-repeat px-5 py-7"
      >
        <div
          className="w-full max-w-3xl animate-fadein h-full flex flex-col
          gap-10"
        >
          <div
            className={`
              mt-[100px] flex flex-col md:items-center gap-7 w-full min-h-[400px]
              ${fade && "animate-fadeback"}
            `}
          >
            <p className="text-3xl text-white font-semibold">
              {currentNode.question}
            </p>
            <div className="w-full flex flex-col gap-3">
              {currentNode.options.map((option, index) => (
                <button
                  key={index}
                  className="w-full p-2.5 rounded-md border border-gray-900/50 shadow-xl
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
            <a href="/dota2-hero-matchmaker/">
              <button
                className="uppercase text-[#e2dace] font-semibold border-[#ffffff50]
                border-[3px] rounded-[5px] px-4 py-2 hover:border-[#ff6046]
                hover:translate-y-[-3px] transition-all duration-350"
              >
                Back to home
              </button>
            </a>
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
