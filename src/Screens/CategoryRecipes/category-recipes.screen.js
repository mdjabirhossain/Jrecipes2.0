import React, { useLayoutEffect } from "react";
import { View } from "react-native";
import { getRecipes } from "../../Services/data/mock.data.api";
import { RecipesListContainer } from "./category-recipes.styles";
import { RecipesList } from "../../Components/RecipesList/recipes-list.component";

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
        numColumns={2}
        recipes={recipesArray}
        onPressRecipeHandler={onPressRecipe}
      />
    </RecipesListContainer>
  );
};
