import React from "react";
import RecipeCard from "./RecipeCard";

const Favorites = ({ favorites, toggleFavorite }) => {
    return (
        <div className="favorites">
            <h2>Your Favorites</h2>
            {favorites.length > 0 ? (
                favorites.map((recipe) => (
                    <RecipeCard
                        key={recipe.uri}
                        recipe={recipe}
                        toggleFavorite={toggleFavorite}
                    />
                ))
            ) : (
                <p>No favorites yet.</p>
            )}
        </div>
    );
};

export default Favorites;
