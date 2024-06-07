const LandingPage = () => {
  return (
    <div
      className="min-h-screen w-[calc(100vw - 100%)] h-full flex justify-center
      bg-[url('./bg.webp')] bg-cover bg-center bg-no-repeat px-3 py-5"
    >
      <div className="h-full flex flex-col mt-[400px] sm:mt-[500px] items-center gap-5">
        <div className="flex flex-col animate-fadein text-center">
          <span className="uppercase text-3xl text-[#E2DACE90]">Find your</span>
          <span
            className="uppercase text-6xl sm:text-7xl text-[#e2dace]
            leading-[50px] sm:leading-[60px]"
          >
            Perfect Hero
          </span>
        </div>
        <div className="bg-[#ff6046] w-[70px] h-[3px] rounded-[1px]" />
        <p className="text-[#e2dace] max-w-xl text-center">
          Answer fun questions to discover your perfect Dota 2 hero. Whether you
          play support, offlane, mid, or carry, find the hero that suits you
          best!
        </p>
        <a href="/question">
          <button
            className="uppercase text-[#e2dace] font-semibold border-[#ffffff50]
            border-[3px] rounded-[5px] px-4 py-2 hover:border-[#ff6046]
            hover:translate-y-[-3px] transition-all duration-350"
          >
            Discover Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
