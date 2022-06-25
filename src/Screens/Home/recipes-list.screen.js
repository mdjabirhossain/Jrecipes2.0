import React, { useState, useEffect } from "react";
// import { recipes } from "../../Services/data/data.mock";
import { SafeArea } from "../../Components/Utils/safearea.component";
import { RecipesList } from "../../Components/RecipesList/recipes-list.component";
import {
  httpGetRandomRecipes,
  httpGetRecipesByName,
} from "../../Hooks/requests";
import { Search } from "../../Components/Search/search.component";

export const RecipesListScreen = ({ navigation }) => {
  const { navigate } = navigation;
  const [recipes, setRecipes] = useState(null);

  const onPressRecipeCard = (item) => {
    // console.log("iteM: ", item);
    navigate("RecipeDetails", { item });
  };

  // const helper = async () => {
  //   const response = await fetch(
  //     "https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert&apiKey=d8672e786cba4db0a0a0ea3c8ed2950d"
  //   );
  //   const result = await response.json();
  //   console.log("called ", result.recipes[0].title);
  // };

  const getRandomRecipes = async () => {
    const result = await httpGetRandomRecipes();
    setRecipes(result);
    return result;
  };

  useEffect(() => {
    getRandomRecipes();
  }, []);

  const getRecipesByName = async (text) => {
    const recipesArray1 = await httpGetRecipesByName(text);
    if (text == "") {
      setRecipes([]);
    } else {
      setRecipes(recipesArray1);
    }
  };

  const onSearchRecipe = (text) => {
    getRecipesByName(text);
  };

  return (
    <SafeArea>
      <Search onSearchHandler={onSearchRecipe} />
      <RecipesList
        recipes={recipes}
        numColumns={2}
        onPressRecipeHandler={onPressRecipeCard}
      />
    </SafeArea>
  );
};
