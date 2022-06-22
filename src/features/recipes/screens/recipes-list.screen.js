import React from "react";
import { recipes } from "../../../services/data/data.mock";
import { SafeArea } from "../../../components/utils/safearea.component";
import { RecipesList } from "../../../components/recipes/recipes-list.component";

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
