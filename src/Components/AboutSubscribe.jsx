import { FiSend } from "react-icons/fi";

const AboutSubscribe = () => {
  return (
    <div className="relative flex items-center  bg-primary bg-opacity-20 rounded-2xl h-[420px] md:h-[320px] w-full mt-11 mb-6">
      <div className="ps-5 lg:ps-16 w-full md:w-3/5 lg:w-1/2">
        <h1 className="font-primary font-bold text-3xl lg:text-4xl leading-10 text-tertiary mb-5">
          Stay home & get your daily needs from our shop
        </h1>
        <p className="mb-10 font-semibold">
          Start Your Daily Shopping with{" "}
          <span className="text-primary font-secondary">Nest Mart</span>
        </p>
        <div className="w-[300px] md:w-[350px] lg:w-[450px] h-12 lg:h-16 bg-white border border-primary rounded-full flex items-center justify-between">
          <div className="relative w-full px-2 h-8">
            <FiSend className="text-2xl text-secondary absolute left-2 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Your email address"
              className="pl-8 w-full h-full font-secondary bg-transparent outline-none"
            />
          </div>
          <button className="btn w-24 md:w-32 lg:w-40 h-10 lg:h-16 sm:text-xs md:text-lg lg:text-lg bg-primary font-primary rounded-full text-white border-none">
            Subscribe
          </button>
        </div>
      </div>
      <div
        className="absolute bg-contain bg-no-repeat bottom-0 right-10 bg-bottom w-32 md:w-80 lg:w-[635px] h-full"
        style={{ backgroundImage: "url('/aboutSubscribe.png')" }}
      >
        {/* <img src="/subscribe-banner.png" alt="" /> */}
      </div>
    </div>
  );
};

export default AboutSubscribe;
