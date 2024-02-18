import Container from "../Components/Container";
import HomeBanner from "../Components/HomeBanner";
import LeftCategory from "../Components/LeftCategory";

const Home = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-12 gap-0 lg:gap-10 mt-5">
          <div className="col-span-12 lg:col-span-3 mb-4 lg:mb-0 hidden lg:block">
            <LeftCategory />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <HomeBanner />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
