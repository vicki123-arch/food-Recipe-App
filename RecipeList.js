import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, toggleFavorite }) => {
    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.uri}
                    recipe={recipe}
                    toggleFavorite={toggleFavorite}
                />
            ))}
        </div>
    );
};

export default RecipeList;
