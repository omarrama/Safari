import "./Sorting.css";

const Sorting = ({ tourCount, setSortType }) => {
  return (
    <div className="sorting-container">
      <div className="available-tours">
        <span>{tourCount} tours available</span>
        <i className="bi bi-info-circle"></i>
      </div>
      <select
        className="sorting-select-box"
        onChange={({ target }) => setSortType(target.value)}
      >
        <option value="rated">Highest Rated</option>
        <option value="reviews">Most Reviews</option>
        <option value="high">Price - High to Low</option>
        <option value="low">Price - Low to High</option>
      </select>
    </div>
  );
};

export default Sorting;
