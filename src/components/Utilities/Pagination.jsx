const Pagination = ({ page, lastPage, setPage }) => {
  const backToTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    backToTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    backToTop();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      <button
        onClick={handlePrevPage}
        className={`transition-all hover:text-color-accent ${page === 1 ? 'pointer-events-none text-gray 400' : ''}`}
      >
        Prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button
        onClick={handleNextPage}
        className={`transition-all hover:text-color-accent ${page === lastPage ? 'pointer-events-none text-gray 400' : ''}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
