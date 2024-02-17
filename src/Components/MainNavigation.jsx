import { Link } from "react-router-dom";
import { GiRecycle } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import Container from "./Container";
// import { IoLocationOutline } from "react-icons/io5";
// import { IoMdArrowDropdown } from "react-icons/io";

const MainNavigation = () => {
  return (
    <>
      <Container>
        {/* ---------- desktop & laptop view ---------- */}
        <div className="hidden lg:flex flex-row my-8 items-center justify-between space-x-4">
          <img id="logo" src="/Header.png" alt="logo" />

          <div
            id="search"
            className="w-[600px] h-[50px] border border-primary rounded-lg flex items-center justify-between px-4"
          >
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
          {/* <div id="button" className="hidden lg:hidden xl:flex">
          <Link className="btn btn-outline text-primary bg-white hover:shadow-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out">
            <IoLocationOutline className="text-xl" /> Your Location{" "}
            <IoMdArrowDropdown className="text-xl" />
          </Link>
        </div> */}
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
        </div>
        <hr />
        {/* ---------- tablet view ---------- */}
        <div className="hidden lg:hidden md:block sm:hidden">
          <div className="navbar">
            <div className="navbar-start">
              <img src="/Header.png" alt="logo" />
            </div>
            <div className="navbar-end">
              <div
                id="search"
                className="w-[600px] h-[50px] border border-primary rounded-lg flex items-center justify-between px-4"
              >
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
            </div>
          </div>
          <hr />
        </div>
        {/* ---------- mobile view ---------- */}
        <div className="lg:hidden md:hidden">
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Shop</a>
                  </li>
                  <li>
                    <a>Vendors</a>
                  </li>
                  <li>
                    <a>Mega Menu</a>
                  </li>
                  <li>
                    <a>Blog</a>
                  </li>
                  <li>
                    <a>Pages</a>
                  </li>
                  <li>
                    <a>Reviews</a>
                  </li>
                  <li>
                    <a>Brands</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-center">
              <img className="mobile-logo" src="/Header.png" alt="logo" />
            </div>
            <div className="navbar-end">
              <button className="btn btn-ghost btn-circle">
                <FaRegHeart className="icon" />
              </button>
              <button className="btn btn-ghost btn-circle">
                <IoCartOutline className="icon" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MainNavigation;
