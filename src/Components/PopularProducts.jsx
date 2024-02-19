import { useState } from 'react';

const productData = {
    All: [
      'Product 1',
      'Product 2',
      'Product 3',
      'Product 4',
      'Product 5',
      'Product 6',
      'Product 7',
      'Product 8',
      'Product 9',
      'Product 10',
    ],
    'Milk & Dairies': ['Milk Product 1', 'Milk Product 2', 'Milk Product 3'],
    'Coffees & Teas': ['Coffee Product 1', 'Coffee Product 2', 'Coffee Product 3'],
    'Pet Foods': ['Pet Food 1', 'Pet Food 2', 'Pet Food 3'],
    Meats: ['Meat Product 1', 'Meat Product 2', 'Meat Product 3'],
    Vegetables: ['Vegetable 1', 'Vegetable 2', 'Vegetable 3'],
    Fruits: ['Fruit 1', 'Fruit 2', 'Fruit 3'],
  };

const PopularProducts = () => {
  const [activeTab, setActiveTab] = useState('All');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
              className={`px-2 py-2 text-sm lg:text-base font-primary font-semibold ${activeTab === tab ? 'text-primary' : 'text-tertiary'}`}
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
    const products = productData[activeTab] || [];

    return (
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <div key={index} className="p-4 border rounded bg-white">
            {product}
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
