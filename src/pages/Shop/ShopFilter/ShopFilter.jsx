import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./ShopFilter.css";

const ShopFilters = ({
  selectedType,
  setSelectedType,
  categoryProducts,
  typeCounts,
  sort,
  setSort,
}) => {
  const handleSort = (event) => {
    const value = event.target.value;

    setSort(value);
  };

  return (
    <div className="shop-filters">
      <div className="shop-filters__buttons">
        <button
          className={selectedType === "all" ? "active" : ""}
          onClick={() => setSelectedType("all")}
        >
          All ({categoryProducts.length})
        </button>

        {Object.entries(typeCounts).map(([type, count]) => (
          <button
            className={selectedType === type ? "active" : ""}
            onClick={() => setSelectedType(type)}
            key={type}
          >
            {type} ({count})
          </button>
        ))}
      </div>

      <div className="shop-filter__sort-wrap">
        <select
          value={sort}
          onChange={handleSort}
          className="shop-filter__sort"
        >
          <option value="featured">Featured</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>

        <ChevronDown
          className="shop-filter__sort-icon"
          size={16}
          strokeWidth={1.5}
        />
      </div>
    </div>
  );
};

export default ShopFilters;
