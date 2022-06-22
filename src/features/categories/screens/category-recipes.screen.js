import React, { useLayoutEffect } from "react";
import { View } from "react-native";
import { getRecipes } from "../../../services/data/mock.data.api";
import { RecipeCard } from "../../../components/recipes/recipe-card.component";
import { RecipesList, RecipesListContainer } from "./category-recipes.styles";

export const CategoryRecipesScreen = (props) => {
  const { navigation, route } = props;

  const item = route?.params?.category;
  const recipesArray = getRecipes(item.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerRight: () => <View />,
    });
  }, []);

  const onPressRecipe = (item) => {
    navigation.navigate("CategoryRecipeDetails", { item });
  };

  return (
    <RecipesListContainer>
      <RecipesList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipesArray}
        renderItem={({ item }) => (
          <RecipeCard item={item} onPressRecipeCard={onPressRecipe} />
        )}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </RecipesListContainer>
  );
};
