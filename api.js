import axios from "axios";

const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY;

// Fetch recipes with query and optional meal type
export const fetchRecipes = async (query = "chicken", mealType = "") => {
    try {
        const response = await axios.get(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}&from=0&to=10`
        );
        return response.data.hits.map((hit) => hit.recipe);
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return [];
    }
};
