import "./Pagination.css";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const displayPages = [];
  for (let i = 1; i <= pages; i++) {
    displayPages.push(i);
  }

  function handlePrev() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
    return;
  }

  function handleNext() {
    if (currentPage !== displayPages.length) {
      setCurrentPage(currentPage + 1);
    }
    return;
  }

  return (
    <div className="pagination-container">
      <button style={{cursor: `${currentPage === 1 ? 'not-allowed' : 'pointer'}`}} className="single-page" onClick={() => handlePrev()}>
        Previous
      </button>
      {displayPages.map((page, idx) => (
        <div
          key={idx}
          style={{backgroundColor: `${currentPage === page ? 'rgba(255, 68, 0, 0.205)' : 'transparent'}`}}
          className={`single-page`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </div>
      ))}
      <button style={{cursor: `${currentPage === displayPages.length ? 'not-allowed' : 'pointer'}`}} className="single-page" onClick={() => handleNext()}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
