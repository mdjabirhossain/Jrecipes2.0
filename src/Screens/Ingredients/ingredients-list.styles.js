import { StyleSheet, Dimensions } from "react-native";
import styled from "styled-components/native";
// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const numColumns = 3;
// item size
const RECIPE_ITEM_HEIGHT = 100;
const RECIPE_ITEM_OFFSET = 10;
const RECIPE_ITEM_MARGIN = RECIPE_ITEM_OFFSET * 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: RECIPE_ITEM_OFFSET,
    marginTop: 30,
    width:
      (SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns - RECIPE_ITEM_OFFSET,
    height: RECIPE_ITEM_HEIGHT + 60,
  },
  title: {
    margin: 10,
    marginBottom: 5,
    color: "black",
    fontSize: 13,
    textAlign: "center",
  },
  photo: {
    width:
      (SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns - RECIPE_ITEM_OFFSET,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 60,
  },
});

export default styles;

export const IngredientContainer = styled.View`
  flex: 1;
  align-items: center;
  margin: ${RECIPE_ITEM_OFFSET}px;
  margin-top: 30px;
  width: ${(SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns -
  RECIPE_ITEM_OFFSET}px;
  height: ${RECIPE_ITEM_HEIGHT + 60}px;
`;

export const IngredientPhoto = styled.Image`
  width: ${(SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns -
  RECIPE_ITEM_OFFSET}px;
  height: ${RECIPE_ITEM_HEIGHT}px;
  border-radius: 60px;
`;

export const IngredientTitle = styled.Text`
  margin: 10px;
  margin-bottom: 5px;
  color: black;
  font-size: 13px;
  text-align: center;
`;

export const IngredientQuantity = styled.Text`
  color: grey;
`;

export const IngredientsListContainer = styled.View``;

export const IngredientsList = styled.FlatList``;
