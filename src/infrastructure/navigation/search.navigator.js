import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { SearchScreen } from "../../features/search/screens/search.screen";

const SearchStack = createStackNavigator();

export const SearchNavigator = () => {
  return (
    <SearchStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <SearchStack.Screen name="SearchResults" component={SearchScreen} />
    </SearchStack.Navigator>
  );
};
