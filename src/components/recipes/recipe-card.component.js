import React from "react";
import {
  RecipeCardContainer,
  RecipeCardPhoto,
  RecipeCardTitle,
  RecipeCategoryText,
} from "./recipe-card.styles";
import { getCategoryName } from "../../services/data/mock.data.api";
import { TouchableOpacity } from "react-native";

export const RecipeCard = ({ item, onPressRecipeCard }) => {
  return (
    <TouchableOpacity onPress={() => onPressRecipeCard(item)}>
      <RecipeCardContainer>
        <RecipeCardPhoto source={{ uri: item.photo_url }} />
        <RecipeCardTitle>{item.title}</RecipeCardTitle>
        <RecipeCategoryText>
          {getCategoryName(item.categoryId)}
        </RecipeCategoryText>
      </RecipeCardContainer>
    </TouchableOpacity>
  );
};
