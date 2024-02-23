import { IoCallOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import Container from "./Container";

const MainFooter = () => {
  return (
    <>
      <hr />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-4 py-3 ">
          <div className="col-span-1 flex items-center justify-center lg:justify-start">
            <p className="font-secondary text-secondary">
              © 2024, <span className="text-primary">Nest</span> - All rights
              reserved
            </p>
          </div>
          <div className="col-span-1 w-full flex gap-5">
            <div className="hidden lg:flex items-center">
              <IoCallOutline className="text-3xl mr-3" />
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-primary text-2xl xl:text-xl font-primary font-bold">
                  +1800 333 666
                </h2>
                <p className="text-secondary font-secondary">
                  24/7 Support Center
                </p>
              </div>
            </div>
            <div className="hidden lg:flex items-center">
              <IoCallOutline className="text-3xl mr-3" />
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-primary text-2xl xl:text-xl font-primary font-bold">
                  +1800 444 666
                </h2>
                <p className="text-secondary font-secondary">
                  24/7 Support Center
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 w-full flex flex-col items-center lg:items-end mt-5 lg:mt-0">
            <div className="flex items-center gap-3">
              <h3 className="text-black font-primary text-md font-bold">
                Follow Us
              </h3>
              <FaFacebookF className="footer-icons rounded-full bg-primary text-white p-1 font-bold" />
              <FaTwitter className="footer-icons rounded-full bg-primary text-white p-1 font-bold" />
              <FaInstagram className="footer-icons rounded-full bg-primary text-white p-1 font-bold" />
              <FaPinterestP className="footer-icons rounded-full bg-primary text-white p-1 font-bold" />
            </div>
            <div>
              <p className="block md:hidden text-secondary font-secondary">
                Up to 15% discount on your first subscribe
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MainFooter;
