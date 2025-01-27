import React from "react";

const FilterBar = ({ setMealType }) => {
    const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"];

    const handleFilterChange = (type) => {
        setMealType(type);
    };

    return (
        <div className="filter-bar">
            <h3>Filter by Meal Type:</h3>
            {mealTypes.map((type) => (
                <button
                    key={type}
                    onClick={() => handleFilterChange(type.toLowerCase())}
                >
                    {type}
                </button>
            ))}
        </div>
    );
};

export default FilterBar;
