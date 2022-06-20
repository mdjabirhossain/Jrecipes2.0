import React from "react";
import { TouchableOpacity } from "react-native";
import {
  RecipeCardContainer,
  RecipeCardPhoto,
  RecipeCardTitle,
  RecipeCategoryText,
} from "./recipe-card.styles";
import { getCategoryName } from "../../../services/data/mock.data.api";
import { Text, View } from "react-native";

export const RecipeCard = ({ item }) => {
  return (
    <TouchableOpacity>
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
