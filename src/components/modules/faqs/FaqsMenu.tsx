const FaqsMenu = () => {
  return (
    <div className="flex w-full flex-col gap-y-2 md:w-1/3">
      <p className="mb-2 text-grey-500">
        Select the category of questions you are looking
      </p>
      <nav className="w-full md:w-[90%]">
        <ul className="space-y-2"></ul>
      </nav>
    </div>
  );
};

export default FaqsMenu;
