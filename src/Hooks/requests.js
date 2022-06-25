const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;
const { recipesTransform } = require("./models");

export const httpGetRandomRecipes = async () => {
  const length = 20;
  const response = await fetch(
    `${API_URL}/recipes/random?number=${length}&tags=vegetarian,dessert&apiKey=${API_KEY}`
  );
  const result = await response.json();
  const resLength = result.recipes.length;
  return recipesTransform(resLength, result.recipes);
};

export const httpGetRecipesByIngredient = async (ingredientName) => {
  const length = 20;
  const response0 = await fetch(
    `${API_URL}/recipes/findByIngredients?ingredients=${ingredientName}&number=${length}&apiKey=${API_KEY}`
  );
  const result0 = await response0.json();
  let urlTail = "";
  for (recipe of result0) urlTail += recipe.id + ",";
  const editedUrlTail = urlTail.slice(0, -1);
  const response1 = await fetch(
    `${API_URL}/recipes/informationBulk?ids=${editedUrlTail}&apiKey=${API_KEY}`
  );
  const result1 = await response1.json();
  return recipesTransform(result1.length, result1);
};

export const httpGetRecipesByName = async (recipeName) => {
  const response = await fetch(
    `${API_URL}/recipes/complexSearch?query=${recipeName}&instructionsRequired=true&number=2&apiKey=${API_KEY}`
  );
  const result = await response.json();
  return recipesTransform(result.results.length, result.results);
};

export const httpGetRecipesByCuisine = () => {};

export const getRecipesByDiet = () => {};
