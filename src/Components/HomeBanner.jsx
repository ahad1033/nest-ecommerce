import { FiSend } from "react-icons/fi";

const HomeBanner = () => {
  return (
    <div className="home-banner flex items-center rounded-badge">
      <div className="flex flex-col ms-16 w-1/2 text-white">
        <h1 className="text-6xl text-tertiary font-primary font-bold">
          Don’t miss amazing grocery deals
        </h1>
        <p className="text-3xl text-secondary font-lato mb-16 mt-8">
          Sign up for the daily newsletter
        </p>
        <div className="w-[450px] h-16 border border-primary rounded-full flex items-center justify-between">
          <div className="relative w-full px-2 h-8">
            <FiSend className="text-2xl text-secondary absolute left-2 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Your email address"
              className="pl-8 w-full h-full font-secondary bg-transparent outline-none"
            />
          </div>
          <button className="btn w-40 h-16 text-lg bg-primary font-primary rounded-full text-white border-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
