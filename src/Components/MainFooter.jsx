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
        <div className="flex justify-between items-center mt-5 py-3">
          <div>
            <p className="font-secondary text-secondary">
              © 2024, <span className="text-primary">Nest</span> - All rights reserved
            </p>
          </div>
          <div className="flex gap-5">
            <div className="hidden lg:flex items-center">
              <IoCallOutline className="text-3xl mr-3" />
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-primary text-2xl font-primary font-bold">
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
                <h2 className="text-primary text-2xl font-primary font-bold">
                  +1800 444 666
                </h2>
                <p className="text-secondary font-secondary">
                  24/7 Support Center
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-black font-primary text-md font-bold">Follow Us</h3>
              <FaFacebookF className="footer-icons rounded-full bg-primary text-white p-1 font-bold" />
              <FaTwitter className="footer-icons rounded-full bg-primary text-white p-1 font-bold" />
              <FaInstagram className="footer-icons rounded-full bg-primary text-white p-1 font-bold" />
              <FaPinterestP className="footer-icons rounded-full bg-primary text-white p-1 font-bold" />
            </div>
            <p className="text-secondary font-secondary">Up to 15% discount on your first subscribe</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MainFooter;
