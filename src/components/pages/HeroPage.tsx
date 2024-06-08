import { useNavigate, useParams } from "react-router-dom";

const URL =
  "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/";

const HeroPage = () => {
  const { hero } = useParams();
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  };

  return (
    <>
      <div
        className="min-h-screen w-[calc(100vw - 100%)] h-full flex justify-center
        items-center bg-[url('./q-bg.webp')] bg-cover bg-center bg-no-repeat px-5 py-7"
      >
        <div
          className="w-full h-full max-w-xl animate-fadein flex flex-col gap-7
          items-center p-10"
        >
          <div className="w-full max-h-[500px] relative">
            <video
              poster={`${URL}${hero}.png`}
              autoPlay
              preload="auto"
              loop
              playsInline
            >
              <source src={`${URL}${hero}.webm`} type="video/webm" />
              <img src={`${URL}${hero}.png`} />
            </video>

            <div className="absolute bottom-10 left-5 flex flex-col">
              <span className="uppercase text-xl md:text-2xl text-[#E2DACE90]">
                your hero is
              </span>
              <span className="text-5xl md:text-7xl uppercase">
                {hero && hero.replace(/_/g, " ")}
              </span>
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

export default HeroPage;
