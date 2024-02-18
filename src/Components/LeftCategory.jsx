const LeftCategory = () => {
  return (
    <>
      <div className="flex flex-col bg-slate-50 p-7 rounded-badge">
        <div className="flex items-center mb-3 relative">
          <h1 className="text-tertiary text-2xl border-b border-secondary w-full pb-4">
            Category
          </h1>
          <div className="border-b-2 border-primary absolute bottom-0 left-0 w-1/2"></div>
          <hr />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default LeftCategory;
