import React, { useLayoutEffect } from "react";
import {
  getIngredientUrl,
  getRecipesByIngredient,
} from "../../../services/data/mock.data.api";
import {
  IngredientRecipesList,
  IngredientTitle,
  IngredientPhoto,
  IngredientPhotoContainer,
  IngredientRecipesContainer,
} from "./ingredient-recipes.styles";
import { RecipeCard } from "../../../components/recipes/recipe-card.component";

export const IngredientRecipesScreen = (props) => {
  const { navigation, route } = props;

  const ingredientId = route.params?.ingredient;
  const ingredientUrl = getIngredientUrl(ingredientId);
  const ingredientName = route.params?.name;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.name,
    });
  }, []);

  const onPressRecipeCard = (item) => {
    navigation.push("RecipeDetails", { item });
  };

  return (
    <IngredientRecipesContainer>
      <IngredientPhotoContainer>
        <IngredientPhoto source={{ uri: "" + ingredientUrl }} />
      </IngredientPhotoContainer>
      <IngredientTitle>Recipes with {ingredientName}:</IngredientTitle>
      <IngredientRecipesList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={getRecipesByIngredient(ingredientId)}
        renderItem={({ item }) => (
          <RecipeCard item={item} onPressRecipeCard={onPressRecipeCard} />
        )}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </IngredientRecipesContainer>
  );
};
