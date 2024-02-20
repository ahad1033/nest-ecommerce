import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAsyncAllProducts } from '../redux/features/AllCategory/AllCategorySlice';
import { IoCartSharp } from "react-icons/io5";

const PopularProducts = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    dispatch(getAsyncAllProducts());
  }, [dispatch]);

  const popularProducts = useSelector((state) => state.Categories.categories);
  // console.log("products---", popularProducts);

  const handleTabClick = (tab) => {
    setActiveTab(tab.toLowerCase());
  };

  const renderTabs = () => {
    const tabs = ['All', 'Milk & Dairies', 'Coffees & Teas', 'Pet Foods', 'Meats', 'Vegetables', 'Fruits'];

    return (
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-11">
        <h2 className="text-2xl lg:text-3xl text-tertiary font-primary font-bold mb-2 lg:mb-0">Popular Products</h2>
        <div className="">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-2 py-2 text-sm lg:text-base font-primary font-semibold ${
                activeTab === tab.toLowerCase() ? 'text-primary' : 'text-tertiary'
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderProductCards = () => {
    const products =
      activeTab === 'all'
        ? popularProducts
        : popularProducts.filter((product) => product.category.toLowerCase() === activeTab);

    if (products.length === 0) {
      return <p>No products available for the selected category.</p>;
    }

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product._id} className="pb-3 lg:pb-7 px-2 lg:px-7 border rounded-xl bg-white">
            <img src={product.img} alt={product.name} className="mb-1 mt-0 lg:mt-2 mx-auto w-full" />
            <p className='text-sm font-secondary text-secondary my-3'>{product.category}</p>
            <h3 className="text- font-bold my-1 font-primary text-tertiary">{product.name}</h3>
            <p className='text-sm text-secondary font-secondary'>By <span className='text-sm text-primary'>{product.seller}</span></p>
            <div className='flex justify-between items-center mt-3 lg:mt-5'>
              <p className="text-primary font-primary font-bold">$ {product.price}</p>
              <button className='btn btn-sm bg-primary bg-opacity-20 text-primary font-primary border-0'><IoCartSharp /> Add</button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-11 mb-6">
      {renderTabs()}
      {renderProductCards()}
    </div>
  );
};

export default PopularProducts;
