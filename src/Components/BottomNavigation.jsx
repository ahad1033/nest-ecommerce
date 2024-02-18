import Container from "./Container";
import MenuList from "./MenuList";
import { TiArrowSortedDown } from "react-icons/ti";
import { TbCategory } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const BottomNavigation = () => {
  return (
    <>
      <Container>
        <div className="h-20 hidden sm:flex items-center justify-between">
          <div className="hidden sm:flex flex-row md:justify-between items-center">
            <button className="btn bg-primary text-white mr-4">
              <TbCategory />
              Browse All Categories
              <TiArrowSortedDown />
            </button>
            <MenuList />
          </div>
          <div className="hidden lg:flex items-center">
            <TfiHeadphoneAlt className="text-3xl mr-3" />
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-primary text-2xl font-primary font-bold">
                +1800 333 666
              </h2>
              <p className="text-secondary font-secondary">24/7 Support Center</p>
            </div>
          </div>
        </div>
      </Container>
      <hr />
    </>
  );
};

export default BottomNavigation;
