import { Link } from "react-router-dom";
import { AiOutlineFire } from "react-icons/ai";

const MenuList = () => {
  return (
    <div>
      <ul className="flex flex-row items-center">
        <li className="mx-2 font-bold text-base hover:text-primary">
          <Link className="flex items-center">
            <AiOutlineFire className="mr-1 text-2xl" /> Deals
          </Link>
        </li>
        <li className="mx-2 font-semibold text-base sm:text-sm hover:text-primary">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-2 font-semibold text-base sm:text-sm hover:text-primary">
          <Link to="/about">About</Link>
        </li>
        <li className="mx-2 font-semibold text-base sm:text-sm hover:text-primary">
          <Link>Shop</Link>
        </li>
        <li className="mx-2 font-semibold text-base sm:text-sm hover:text-primary">
          <Link>Vendors</Link>
        </li>
        <li className="mx-2 font-semibold text-base sm:text-sm hover:text-primary">
          <Link>Mega menu</Link>
        </li>
        <li className="mx-2 font-semibold text-base sm:text-sm hover:text-primary">
          <Link>Blog</Link>
        </li>
        <li className="mx-2 font-semibold text-base sm:text-sm hover:text-primary">
          <Link>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuList;
