import "./ShopFilter.css";

const ShopFilters = ({ setSelectedType, categoryProducts, typeCounts }) => {
  return (
    <div className="shop-filters">
      <button onClick={() => setSelectedType("all")}>
        All ({categoryProducts.length})
      </button>

      {Object.entries(typeCounts).map(([type, count]) => (
        <button onClick={() => setSelectedType(type)} key={type}>
          {type} ({count})
        </button>
      ))}
    </div>
  );
};

export default ShopFilters;
