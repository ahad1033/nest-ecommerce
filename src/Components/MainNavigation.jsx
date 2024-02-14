import { Link } from "react-router-dom";
import { GiRecycle } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoLocationOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

const MainNavigation = () => {
  return (
    <>
      <nav className="flex flex-row my-8 items-center justify-between">
        <img id="logo" src="/Header.png" alt="logo" />

        <div id="search" className="w-[700px] h-[54px] border border-primary rounded-lg flex items-center justify-between px-4">
          <div className="flex items-center">
            <span className="font-semibold border-r border-solid border-primary pe-6">
              All Category
            </span>
            <div className="h-1/2 border-l mx-4"></div>
            <input
              type="text"
              placeholder="Search all category"
              className="w-1/2 px-2 h-8"
            />
          </div>
          <IoSearch className="text-2xl" />
        </div>
        <div id="button">
          <Link className="btn btn-outline text-primary bg-white hover:shadow-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out">
            <IoLocationOutline className="text-xl" /> Your Location{" "}
            <IoMdArrowDropdown className="text-xl" />
          </Link>
        </div>
        <div id="menu" className="flex">
          <Link
            to="/compare"
            className="btn btn-active btn-link flex items-center"
          >
            <GiRecycle className="icon" />
            <span className="link-text">Compare</span>
          </Link>
          <Link
            to="/wishlist"
            className="btn btn-active btn-link flex items-center"
          >
            <FaRegHeart className="icon" />
            <span className="link-text">Wishlist</span>
          </Link>
          <Link
            to="/cart"
            className="btn btn-active btn-link flex items-center"
          >
            <IoCartOutline className="icon" />
            <span className="link-text">Cart</span>
          </Link>
          <Link
            to="/account"
            className="btn btn-active btn-link flex items-center"
          >
            <FiUser className="icon" />
            <span className="link-text">Account</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default MainNavigation;
