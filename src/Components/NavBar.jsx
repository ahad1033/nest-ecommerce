import MainNavigation from "./MainNavigation";
import TopNavigation from "./TopNavigation";

const NavBar = () => {
  return (
    <>
      <TopNavigation className="hidden sm:block" />
      <MainNavigation />
    </>
  );
};

export default NavBar;
