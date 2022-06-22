import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RecipesListScreen } from "../../features/recipes/screens/recipes-list.screen";
import { RecipeDetailsScreen } from "../../features/recipes/screens/recipe-details.screen";
import { IngredientsListScreen } from "../../features/recipes/screens/ingredients-list.screen";
import { IngredientRecipesScreen } from "../../features/recipes/screens/ingredient-recipes.screen";
const RecipesStack = createStackNavigator();

export const RecipesNavigator = () => {
  return (
    <RecipesStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RecipesStack.Screen name="RecipesList" component={RecipesListScreen} />
      <RecipesStack.Screen
        name="RecipeDetails"
        component={RecipeDetailsScreen}
      />
      <RecipesStack.Screen
        name="IngredientsList"
        component={IngredientsListScreen}
      />
      <RecipesStack.Screen
        name="IngredientRecipes"
        component={IngredientRecipesScreen}
      />
    </RecipesStack.Navigator>
  );
};
