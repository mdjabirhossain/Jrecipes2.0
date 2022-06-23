import React from "react";
import { recipes } from "../../Services/data/data.mock";
import { SafeArea } from "../../Components/Utils/safearea.component";
import { RecipesList } from "../../Components/RecipesList/recipes-list.component";

export const RecipesListScreen = ({ navigation }) => {
  const { navigate } = navigation;

  const onPressRecipeCard = (item) => {
    navigate("RecipeDetails", { item });
  };

  return (
    <SafeArea>
      <RecipesList
        recipes={recipes}
        numColumns={2}
        onPressRecipeHandler={onPressRecipeCard}
      />
    </SafeArea>
  );
};
