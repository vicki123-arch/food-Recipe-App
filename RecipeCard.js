import React from "react";

const RecipeCard = ({ recipe, toggleFavorite }) => {
    return (
        <div className="recipe-card">
            <h3>{recipe.label}</h3>
            <img src={recipe.image} alt={recipe.label} />
            <p>Cuisine: {recipe.cuisineType?.join(", ") || "N/A"}</p>
            <button onClick={() => toggleFavorite(recipe)}>
                Add to Favorites
            </button>
        </div>
    );
};

export default RecipeCard;
