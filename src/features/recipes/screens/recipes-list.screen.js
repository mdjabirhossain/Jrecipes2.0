import React from "react";
import { recipes } from "../../../services/data/data.mock";
import { RecipeList } from "./recipes-list.styles";
import { RecipeCard } from "../../../components/recipes/recipe-card.component";
import { SafeArea } from "../../../components/utils/safearea.component";

export const RecipesListScreen = ({ navigation }) => {
  const { navigate } = navigation;

  const onPressRecipeCard = (item) => {
    navigate("RecipeDetails", { item });
  };

  return (
    <SafeArea>
      <RecipeList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes}
        renderItem={({ item }) => {
          return (
            <RecipeCard item={item} onPressRecipeCard={onPressRecipeCard} />
          );
        }}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </SafeArea>
  );
};
