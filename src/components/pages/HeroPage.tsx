import { useNavigate, useParams } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";

const URL =
  "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/";

const HeroPage = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const { hero } = useParams();
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  };

  useEffect(() => {
    setTimeout(() => setLoaded(true), 2500);
  }, []);

  return (
    <>
      <div
        className="min-h-screen w-[calc(100vw - 100%)] h-full flex justify-center overflow-x-hidden
        items-center bg-[url('../public/q-bg.webp')] bg-cover bg-center bg-no-repeat px-5 py-7"
      >
        <div
          className="w-full h-full max-w-xl flex flex-col gap-7
          items-center p-10 relative"
        >
          <div
            className={`w-full max-h-[500px] relative
              ${loaded ? "animate-turnin" : "opacity-0"}
            `}
          >
            {isMobile ? (
              <img
                src={`${URL}${hero!.toLowerCase()}.png`}
                onLoad={() => setTimeout(() => setLoaded(true), 350)}
                alt="Cannot load this hero's image"
              />
            ) : (
              <video
                poster={`${URL}${hero!.toLowerCase()}.png`}
                autoPlay
                preload="auto"
                loop
                playsInline
                onLoad={() => setTimeout(() => setLoaded(true), 350)}
              >
                <source
                  src={`${URL}${hero!.toLowerCase()}.webm`}
                  type="video/webm"
                />
                <img
                  src={`${URL}${hero!.toLowerCase()}.png`}
                  alt="Cannot load this hero's image"
                />
              </video>
            )}

            <div
              className="absolute bottom-2 -left-5 sm:bottom-10 sm:left-5
              flex flex-col text-wrap"
            >
              <span className="uppercase text-lg sm:text-xl md:text-2xl text-[#E2DACE90]">
                your hero is
              </span>
              <span className="text-3xl sm:text-5xl md:text-7xl uppercase">
                {hero && hero.replace(/_/g, " ")}
              </span>
            </div>
          </div>

          <div
            className={`flex flex-col gap-3 items-center ${
              loaded ? "animate-turnin" : "opacity-0"
            }`}
          >
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

          {!loaded && (
            <div
              className="flex space-x-2 justify-center items-center absolute
              bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <span className="sr-only">Loading...</span>
              <div
                className="h-5 w-5 bg-[#ff6046] rounded-full animate-bounce
                [animation-delay:-0.3s]"
              />
              <div
                className="h-5 w-5 bg-[#ff6046] rounded-full animate-bounce
                [animation-delay:-0.15s]"
              />
              <div className="h-5 w-5 bg-[#ff6046] rounded-full animate-bounce" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeroPage;
