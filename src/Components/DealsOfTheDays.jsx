import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncBestDeals } from "../redux/features/BestDeal/BestDealSlice";
import { IoCartSharp } from "react-icons/io5";

const DealsOfTheDays = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncBestDeals());
  }, [dispatch]);

  const bestDeal = useSelector((state) => state.BestDeals.deals);

  console.log("bestDeal", bestDeal);

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-11">
        <h2 className="text-2xl lg:text-3xl text-tertiary font-primary font-bold mb-2 lg:mb-0">
          Popular Products
        </h2>
        <div className="">
          <button className="px-2 py-2 text-sm lg:text-base font-primary font-semibold text-tertiary">
            All Deals
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
        {bestDeal?.map((p) => {
          const discountedPrice =
            p.price - (p.price * (p.discount / 100));
          return (
            <div
              key={p._id}
              className="h-[390px] pb-3 lg:pb-7  rounded-xl bg-white relative overflow-hidden"
            >
              <img
                className="w-full h-[330px] object-cover object-center rounded-2xl"
                src={p.img}
                alt={p.name}
              />
              <div className="absolute w-4/5 mx-auto rounded-2xl bottom-3 left-0 right-0 p-4 bg-white shadow-md">
                <p className="text-sm font-secondary text-primary my-2">
                  {p.category}
                </p>
                <h3 className="text-xl font-bold my-1 font-primary text-tertiary">
                  {p.title}
                </h3>
                <p className="text-sm mb-2 text-secondary font-secondary">
                  {p.description}
                </p>
                <p className="text-sm text-secondary font-secondary">
                  By <span className="text-sm text-primary">{p.seller}</span>
                </p>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center justify-center">
                    <p className="text-primary font-primary font-bold mr-2">
                      $ {discountedPrice.toFixed(2)}
                    </p>
                    <p className="text-secondary text-sm line-through font-primary font-bold mr-2">
                      $ {p.price}
                    </p>
                  </div>
                  <button className="btn bg-primary bg-opacity-20 text-primary font-primary border-0">
                    <IoCartSharp /> Add
                  </button>
                </div>
              </div>
              <div className="absolute top-3 right-3">
                <p className="rounded-full p-3 w-[65px] h-[65px] bg-primary text-white font-semibold font-primary flex justify-center items-center text-xl">
                  {p.discount}%
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DealsOfTheDays;
