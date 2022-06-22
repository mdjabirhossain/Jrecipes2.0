import { StyleSheet } from "react-native";
import { RecipeCard } from "../../../AppStyles";
import styled from "styled-components/native";

const styles = StyleSheet.create({
  titleIngredient: {
    fontWeight: "bold",
    fontSize: 20,
  },
  photoIngredient: {
    width: "100%",
    height: 250,
    alignSelf: "center",
  },
  ingredientInfo: {
    color: "black",
    margin: 10,
    fontSize: 19,
    textAlign: "left",
    fontWeight: "bold",
  },
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
});

export default styles;

export const IngredientRecipesList = styled.FlatList``;

export const IngredientTitle = styled.Text`
  color: black;
  margin: 10px;
  font-size: 19px;
  text-align: left;
  font-weight: bold;
`;

export const IngredientPhoto = styled.Image`
  width: 100%;
  height: 250px;
  align-self: center;
`;

export const IngredientPhotoContainer = styled.View`
  border-bottom-width: 0.4px;
  margin-bottom: 10px;
  border-bottom-color: grey;
`;

export const IngredientRecipesContainer = styled.View``;
