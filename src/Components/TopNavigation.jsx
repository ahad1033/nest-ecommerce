import { Link } from "react-router-dom";
import Container from "./Container";

const TopNavigation = () => {
  return (
    <>
      <Container>
        <nav className="hidden lg:flex justify-between items-center h-9">
          <div className="hidden md:block">
            <ul className="flex flex-row px-1">
              <li className="btn btn-ghost btn-sm text-sm mx-1">
                <Link>About us</Link>
              </li>
              <li className="btn btn-ghost btn-sm text-sm mx-1">
                <Link>My Account</Link>
              </li>
              <li className="btn btn-ghost btn-sm text-sm mx-1">
                <Link>Wish List</Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <p>
              <small>100% Secure delivery without contacting the courier</small>
            </p>
          </div>
          <div className="hidden md:block">
            <ul className="flex flex-row px-1">
              <li className="hidden lg:flex px-2 lg:items-center">
                <div>
                  Need help? Call us:{" "}
                  <span className="text-primary items-center">
                    + 1800 333 666
                  </span>
                </div>
              </li>
              <li className="dropdown dropdown-hover px-2">
                <div tabIndex={0} role="button" className="m-1 text-sm">
                  Eniglish
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Bangla</a>
                  </li>
                  <li>
                    <a>Arabic</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-hover ps-2">
                <div tabIndex={0} role="button" className="m-1 text-sm">
                  BDT
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>USD</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
      <hr />
    </>
  );
};

export default TopNavigation;
