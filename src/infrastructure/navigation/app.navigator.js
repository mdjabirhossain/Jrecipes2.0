import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../../Infrastructure/Theme/colors";
import { RecipesNavigator } from "./recipes.navigator";
import { SettingsScreen } from "../../Screens/Settings/settings.screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CategoriesNavigator } from "./categories.navigator";
import { SearchNavigator } from "./search.navigator";
import { FavoritesScreen } from "../../Screens/Favorites/favorites.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "md-home",
  Categories: "md-list",
  Search: "md-search",
  Settings: "md-settings",
  Favorites: "md-heart",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerShown: false,
  };
};

export const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={createScreenOptions}
    tabBarOptions={{
      activeTintColor: colors.brand.primary,
      inactiveTintColor: colors.brand.muted,
    }}
  >
    <Tab.Screen name="Home" component={RecipesNavigator} />
    <Tab.Screen name="Search" component={SearchNavigator} />
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
    <Tab.Screen name="Categories" component={CategoriesNavigator} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);
