const LeftCategory = () => {
  return (
    <>
      <div className="flex flex-col bg-slate-50 p-7 rounded-2xl">
        <div className="flex items-center mb-8 relative">
          <h1 className="text-tertiary text-2xl border-b border-secondary w-full pb-4">
            Category
          </h1>
          <div className="border-b-2 border-primary absolute bottom-0 left-0 w-1/2"></div>
          <hr />
        </div>

        {/* ----- categories are here ----- */}
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center mb-4 border border-secondary rounded-md px-5 py-3">
            <div className="flex items-center gap-5">
              <img
                className="cat-left-icon"
                src="/categories/dairy.png"
                alt=""
              />
              <h3 className="font-secondary text-base font-semibold text-tertiary">
                Milk & Dairies
              </h3>
            </div>
            <div>
              <p className="cat-count font-secondary rounded-full pt-1 text-center bg-primary bg-transparent-20 text-white">
                3
              </p>
            </div>
          </div>

          {/* clothing */}
          <div className="flex flex-row justify-between items-center mb-4 border border-secondary rounded-md px-5 py-3">
            <div className="flex items-center gap-5">
              <img
                className="cat-left-icon"
                src="/categories/clothing.png"
                alt=""
              />
              <h3 className="font-secondary text-base font-semibold text-tertiary">
                Clothing
              </h3>
            </div>
            <div>
              <p className="cat-count font-secondary rounded-full pt-1 text-center bg-primary bg-transparent-20 text-white">
                10
              </p>
            </div>
          </div>

          {/* pet food */}
          <div className="flex flex-row justify-between items-center mb-4 border border-secondary rounded-md px-5 py-3">
            <div className="flex items-center gap-5">
              <img
                className="cat-left-icon"
                src="/categories/petfood.png"
                alt=""
              />
              <h3 className="font-secondary text-base font-semibold text-tertiary">
                Pet Foods
              </h3>
            </div>
            <div>
              <p className="cat-count font-secondary rounded-full pt-1 text-center bg-primary bg-transparent-20 text-white">
                5
              </p>
            </div>
          </div>

          {/* baking material */}
          <div className="flex flex-row justify-between items-center mb-4 border border-secondary rounded-md px-5 py-3">
            <div className="flex items-center gap-5">
              <img
                className="cat-left-icon"
                src="/categories/petfood.png"
                alt=""
              />
              <h3 className="font-secondary text-base font-semibold text-tertiary">
                Baking Material
              </h3>
            </div>
            <div>
              <p className="cat-count font-secondary rounded-full pt-1 text-center bg-primary bg-transparent-20 text-white">
                8
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftCategory;
