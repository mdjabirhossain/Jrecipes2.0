export const recipesTransform = (length, recipes) => {
  const recipesInfo = [];
  // console.log("recipes ingredients extended: ", recipes[0]);
  for (const recipe of recipes) {
    const ingredientsArray = [];
    const base_path = "https://spoonacular.com/cdn/ingredients_500x500";
    if (recipe.extendedIngredients) {
      const ingredients = recipe.extendedIngredients;
      for (const ingredientObj of ingredients) {
        const ingredient_url = `${base_path}/${ingredientObj.image}`;
        // console.log("ing_url: ", ing_url);
        const obj = {
          ingredientId: ingredientObj.id,
          ingredientName: ingredientObj.name,
          ingredientImage: ingredient_url,
          ingredientAmount: ingredientObj.amount,
          ingredientUnit: ingredientObj.unit,
        };
        ingredientsArray.push(obj);
      }
    }
    const obj = {
      recipeId: recipe.id,
      title: recipe.title,
      photo_url: recipe.image,
      ingredients: ingredientsArray,
      description: recipe.instructions,
    };
    recipesInfo.push(obj);
  }
  return recipesInfo;
};

export const recipesByIngredientTransform = (length, recipes) => {
  const ingredientRecipes = [];
  for (const recipe of recipes) {
    const obj = {
      recipeId: recipe.id,
      title: recipe.title,
      photo_url: recipe.image,
      ingredients: ingredientsArray,
      description: recipe.instructions,
    };
  }
};
