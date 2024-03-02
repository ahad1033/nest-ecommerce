import Container from "./Container";

const TopFooter = () => {
  return (
    <>
    <Container>
      <footer className="p-4 mt-11">
        <div className="grid grid-cols-3 gap-6 lg:gap-4 lg:grid-cols-6">
          {/* First column */}
          <div className="col-span-1">
            <img className="w-28 lg:w-2/3" src="/Header.png" alt="Nest" />
            <h1 className="text-black my-2 lg:my-5 text-sm lg:text-md">
              Awesome grocery store
            </h1>
            <p className="text-black font-secondary text-sm mb-2 lg:mb-4">Address: 101 Lalmatia, Dhaka 1208</p>
            <p className="text-black font-secondary text-sm mb-2 lg:mb-4">Call Us: (+91) - 540-025-124553</p>
            <p className="text-black font-secondary text-sm mb-2 lg:mb-4">Email: sale@Nest.com</p>
            <p className="text-black font-secondary text-sm mb-2 lg:mb-4">Hours: 10:00 - 18:00, Mon - Sat</p>
          </div>

          <div className="col-span-1">
            <h1 className="text-tertiary text-xl lg:text-2xl mb-3 lg:mb-5 font-primary font-bold">Company</h1>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">About Us</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Delivery Information</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Privacy Pokicy</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Terms & Condition</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Contact Us</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Support Center</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Careers</p>
          </div>

          <div className="col-span-1">
            <h1 className="text-tertiary text-xl lg:text-2xl mb-3 lg:mb-5 font-primary font-bold">Account</h1>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Sign In</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">View Cart</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">My Wishlist</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Track My Order</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Help Ticket</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Shipping Details</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Compare Products</p>
          </div>

          <div className="col-span-1">
            <h1 className="text-tertiary text-xl lg:text-2xl mb-3 lg:mb-5 font-primary font-bold">Corporate</h1>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Become a Vendor</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Affiliate Program</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Farm Business</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Our Suppliers</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Accesibility</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Promotions</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Careers</p>
          </div>

          <div className="col-span-1">
            <h1 className="text-tertiary text-xl lg:text-2xl mb-3 lg:mb-5 font-primary font-bold">Popular</h1>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Milk & Flavoured Milk</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Butter & Margarine</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Eggs Substitutes</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Marmalades</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Sour Cream and Dips</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Tea & Kombucha</p>
            <p className="text-black  font-secondary text-sm mb-2 lg:mb-4">Cheese</p>
          </div>

          <div className="col-span-1">
            <h1 className="text-tertiary text-xl lg:text-2xl mb-3 lg:mb-5 font-primary font-bold">Install App</h1>
              
            <p className="text-black  font-secondary text-sm mb-4">Secured Payment Gateways</p>
          </div>
          
        </div>
      </footer>
      </Container>
    </>
  );
};

export default TopFooter;
