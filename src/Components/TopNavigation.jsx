import { Link } from "react-router-dom";

const TopNavigation = () => {
  return (
    <nav className="flex justify-between items-center h-9">
      <div className="hidden md:block">
        <ul
          className="menu menu-horizontal px-1"
        >
          <li>
            <Link>About us</Link>
          </li>
          <li>
            <Link>My Account</Link>
          </li>
          <li>
            <Link>Wish List</Link>
          </li>
        </ul>
      </div>
      <div className="hidden lg:block">
        <p><small>100% Secure delivery without contacting the courier</small></p>
      </div>
      <div className="hidden md:block">
        <ul className="menu menu-horizontal px-1">
          <li className="hidden lg:block">
            <Link>
              Need help? Call us: <span className="text-primary">+ 1800 333 666</span>
            </Link>
          </li>
          <li>
            <details>
              <summary>English</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <Link>Bangla</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>BDT</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <Link>USD</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavigation;
