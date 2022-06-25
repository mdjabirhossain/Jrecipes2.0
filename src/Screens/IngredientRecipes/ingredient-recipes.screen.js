import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  getIngredientUrl,
  getRecipesByIngredient,
} from "../../Services/data/mock.data.api";
import {
  IngredientRecipesList,
  IngredientTitle,
  IngredientPhoto,
  IngredientPhotoContainer,
  IngredientRecipesContainer,
} from "./ingredient-recipes.styles";
import { RecipeCard } from "../../Components/RecipeCard/recipe-card.component";
import { httpGetRecipesByIngredient } from "../../Hooks/requests";

export const IngredientRecipesScreen = (props) => {
  const { navigation, route } = props;
  const [recipes, setRecipes] = useState(null);
  const ingredientUrl = route.params?.url;
  const ingredientName = route.params?.name;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.name,
    });
  }, []);

  const getRecipesByIngredient = async () => {
    console.log("ingredientURL: ", ingredientUrl);
    const result = await httpGetRecipesByIngredient(ingredientName);
    setRecipes(result);
  };

  useEffect(() => {
    getRecipesByIngredient();
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
        data={recipes}
        renderItem={({ item }) => (
          <RecipeCard item={item} onPressRecipeCard={onPressRecipeCard} />
        )}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </IngredientRecipesContainer>
  );
};
