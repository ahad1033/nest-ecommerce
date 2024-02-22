import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncAdvertise } from "../redux/features/Advertise/AdvertiseSlice";
import { FiArrowRight } from "react-icons/fi";

const Advertise = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncAdvertise());
  }, [dispatch]);

  const advertise = useSelector((state) => state.Advertise.advertises);
//   console.log("advertiser", advertise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {advertise?.map((i) => (
        <div
          key={i._id}
          className="px-2 lg:px-7 rounded-xl h-[240px] flex items-center"
          style={{
            backgroundImage: `url(${i?.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-">
            <p className="text-2xl font-primary text-tertiary font-bold">
              {i.title}
            </p>
            <button className="btn bg-primary text-white border-none mt-3">Shop Now <FiArrowRight /></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Advertise;
