import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RecipesListScreen } from "../../Screens/Home/recipes-list.screen";
import { RecipeDetailsScreen } from "../../Screens/RecipeDetails/recipe-details.screen";
import { IngredientsListScreen } from "../../Screens/Ingredients/ingredients-list.screen";
import { IngredientRecipesScreen } from "../../Screens/IngredientRecipes/ingredient-recipes.screen";
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
