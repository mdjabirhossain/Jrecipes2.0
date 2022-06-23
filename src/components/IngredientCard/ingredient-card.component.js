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
      <IngredientPhoto source={{ uri: item[0].photo_url }} />
      <IngredientTitle>{item[0].name}</IngredientTitle>
      <IngredientQuantity>{item[1]}</IngredientQuantity>
    </IngredientContainer>
  </TouchableOpacity>
);
