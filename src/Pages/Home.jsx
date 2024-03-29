import Advertise from "../Components/Advertise";
import BestSells from "../Components/BestSells";
import Container from "../Components/Container";
import DealsOfTheDays from "../Components/DealsOfTheDays";
import HomeBanner from "../Components/HomeBanner";
import LeftCategory from "../Components/LeftCategory";
import PopularProducts from "../Components/PopularProducts";
import Subscribe from "../Components/Subscribe";

const Home = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-12 gap-0 lg:gap-10 mt-5">
          <div className="col-span-12 lg:col-span-3 mb-4 lg:mb-0 hidden lg:block">
            <LeftCategory />
          </div>
          <div className="col-span-12 lg:col-span-9 px-2 lg:px-0">
            <HomeBanner />
            <PopularProducts />
            <BestSells />
            <DealsOfTheDays />
            <Advertise />
          </div>
        </div>
        <Subscribe />
      </Container>
    </>
  );
};

export default Home;
