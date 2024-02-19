import { useState } from 'react';

const productData = {
    Featured: ['Featured 1', 'Featured 2', 'Featured 3'],
    Popular: ['Popular 1', 'Popular 2', 'Popular 3'],
    'New added': ['New Added 1', 'New Added 2', 'New Added 3'],
  };

const BestSells = () => {
    const [activeTab, setActiveTab] = useState('Featured');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabs = () => {
    const tabs = ['Featured', 'Popular', 'New added' ];

    return (
         <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-11">
        <h2 className="text-2xl lg:text-3xl text-tertiary font-primary font-bold mb-2 lg:mb-0">Daily Best Sells</h2>
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

export default BestSells;