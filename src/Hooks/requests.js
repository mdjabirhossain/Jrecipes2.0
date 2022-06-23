const API_URL = "https://api.spoonacular.com";

async function httpGetRandomRecipes() {
  const response = await fetch(
    `${API_URL}/recipes/random?number=100&tags=vegetarian,dessert`
  );
  return await response.json();
}
