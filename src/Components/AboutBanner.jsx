const AboutBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 mt-5 lg:mt-14 mb-11">
      <div className="w-full lg:w-1/2">
        <img src="/blogHeader.webp" alt="" />
      </div>
      <div className="flex flex-col items-start w-full lg:w-1/2 px-3 lg:px-20">
        <h1 className="font-primary font-bold text-3xl lg:text-4xl leading-10 text-primary mb-5">
          Welcome to Nest
        </h1>
        <p className="text-secondary font-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate id est laborum.
        </p>
        <br />
        <p className="text-secondary font-secondary">
          Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et
          Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis
          faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio
          aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus.
          Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate id est laborum.
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
