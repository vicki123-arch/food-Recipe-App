import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import FilterBar from "./components/FilterBar";
import Favorites from "./components/Favorites";
import { fetchRecipes } from "./api";
import "./App.css";

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [mealType, setMealType] = useState("");
    const [loading, setLoading] = useState(false);

    // Fetch default recipes on load
    useEffect(() => {
        const loadDefaultRecipes = async () => {
            setLoading(true);
            const defaultRecipes = await fetchRecipes();
            setRecipes(defaultRecipes);
            setLoading(false);
        };
        loadDefaultRecipes();
    }, []);

    // Handle Search
    const handleSearch = async (query) => {
        setLoading(true);
        const searchedRecipes = await fetchRecipes(query, mealType);
        setRecipes(searchedRecipes);
        setLoading(false);
    };

    // Handle Adding/Removing Favorites
    const toggleFavorite = (recipe) => {
        setFavorites((prevFavorites) =>
            prevFavorites.some((fav) => fav.uri === recipe.uri)
                ? prevFavorites.filter((fav) => fav.uri !== recipe.uri)
                : [...prevFavorites, recipe]
        );
    };

    return (
        <div className="app">
            <h1>Recipe Finder</h1>
            <SearchBar onSearch={handleSearch} />
            <FilterBar setMealType={setMealType} />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <RecipeList recipes={recipes} toggleFavorite={toggleFavorite} />
            )}
            <Favorites favorites={favorites} toggleFavorite={toggleFavorite} />
        </div>
    );
};

export default App;
