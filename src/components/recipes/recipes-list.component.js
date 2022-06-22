import React from "react";
import { FlatList } from "react-native";
import { RecipeCard } from "./recipe-card.component";
import styled from "styled-components/native";

const RecipesListContainer = styled.View``;

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
