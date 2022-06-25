import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import styled from "styled-components/native";
import { Image, TouchableOpacity } from "react-native";

// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 145;
const RECIPE_ITEM_MARGIN = 20;

// container width:
//       (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
//       recipeNumColums,

// photo width:
// (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
// recipeNumColums,

export const RecipeCardContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: ${RECIPE_ITEM_MARGIN}px;
  margin-top: 20px;
  width: ${(SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
  recipeNumColums}px;
  height: ${RECIPE_ITEM_HEIGHT + 75}px;
  border-color: #cccccc;
  border-width: 0.5px;
  border-radius: 15px;
`;

export const RecipeCardPhoto = styled(Image)`
  width: ${(SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
  recipeNumColums}px;
  height: ${RECIPE_ITEM_HEIGHT}px;
  border-radius: 15px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const RecipeCardTitle = styled.Text`
  flex: 1px;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  color: black;
  margin-top: 3px;
  margin-right: 5px;
  margin-left: 5px;
`;

export const RecipeCategoryText = styled.Text`
  margin-top: 5px;
  margin-bottom: 5px;
`;
