import React from "react";
import { TouchableOpacity } from "react-native";
import {
  CategoryItemContainer,
  CategoryItemImage,
  CategoryItemName,
  CategoryItemInfo,
} from "./category-card.styles";
import { getNumberOfRecipes } from "../../../services/data/mock.data.api";

export const CategoryItemCard = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => onPressCategory(item)}>
      <CategoryItemContainer>
        <CategoryItemImage source={{ uri: item.photo_url }} />
        <CategoryItemName>{item.name}</CategoryItemName>
        <CategoryItemInfo>
          {getNumberOfRecipes(item.id)} recipes
        </CategoryItemInfo>
      </CategoryItemContainer>
    </TouchableOpacity>
  );
};
