import Container from "../Components/Container";
import HomeBanner from "../Components/HomeBanner";

const Home = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-12 gap-10 mt-3">
          <div className="col-span-12 lg:col-span-3 bg-red-400 mb-4 lg:mb-0 hidden lg:block">
            Side components
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
