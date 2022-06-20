import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { HomeScreen } from "../../features/recipes/screens/home.screen";

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
    </RecipesStack.Navigator>
  );
};
