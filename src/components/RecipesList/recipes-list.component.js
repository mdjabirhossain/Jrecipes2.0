import React from "react";
import { FlatList } from "react-native";
import { RecipeCard } from "../RecipeCard/recipe-card.component";

import { RecipesListContainer } from "./recipes-list.styles";

export const RecipesList = ({ recipes, numColumns, onPressRecipeHandler }) => {
  return (
    <RecipesListContainer>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={numColumns}
        data={recipes}
        renderItem={({ item }) => (
          <RecipeCard item={item} onPressRecipeCard={onPressRecipeHandler} />
        )}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </RecipesListContainer>
  );
};
