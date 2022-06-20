import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { HomeScreen } from "../../features/recipes/screens/recipes-list.screen";
import { RecipeDetailsScreen } from "../../features/recipes/screens/recipe-details.screen";

const RecipesStack = createStackNavigator();

export const RecipesNavigator = () => {
  return (
    <RecipesStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RecipesStack.Screen name="RecipesList" component={HomeScreen} />
      <RecipesStack.Screen
        name="RecipeDetails"
        component={RecipeDetailsScreen}
      />
    </RecipesStack.Navigator>
  );
};
