import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { CategoryItemsListScreen } from "../../Screens/CategoryItems/category-items-list.screen";
import { CategoryRecipesScreen } from "../../Screens/CategoryRecipes/category-recipes.screen";
import { RecipeDetailsScreen } from "../../Screens/RecipeDetails/recipe-details.screen";

const CategoriesStack = createStackNavigator();

export const CategoriesNavigator = () => {
  return (
    <CategoriesStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <CategoriesStack.Screen
        name="CategoryItems"
        component={CategoryItemsListScreen}
      />
      <CategoriesStack.Screen
        name="CategoryRecipes"
        component={CategoryRecipesScreen}
      />
      <CategoriesStack.Screen
        name="CategoryRecipeDetails"
        component={RecipeDetailsScreen}
      />
    </CategoriesStack.Navigator>
  );
};
