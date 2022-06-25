import React from "react";
import { TouchableOpacity } from "react-native";
import {
  IngredientContainer,
  IngredientPhoto,
  IngredientTitle,
  IngredientQuantity,
} from "./ingredient-card.styles";

export const IngredientCard = ({ item, onPressHandler }) => (
  <TouchableOpacity onPress={() => onPressHandler(item[0])}>
    <IngredientContainer>
      <IngredientPhoto source={{ uri: item.ingredientImage }} />
      <IngredientTitle>{item.ingredientName}</IngredientTitle>
      <IngredientQuantity>
        {item.ingredientAmount} {item.ingredientUnit}
      </IngredientQuantity>
    </IngredientContainer>
  </TouchableOpacity>
);
