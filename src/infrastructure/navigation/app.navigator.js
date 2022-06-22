import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../../infrastructure/theme/colors";
import { RecipesNavigator } from "./recipes.navigator";
import { SettingsScreen } from "../../features/settings/settings.screen";
import { CategoryItemsListScreen } from "../../features/categories/screens/category-items-list.screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CategoriesNavigator } from "./categories.navigator";
import { SearchNavigator } from "./search.navigator";
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "md-home",
  Categories: "md-list",
  Search: "md-search",
  Settings: "md-settings",
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
    <Tab.Screen name="Categories" component={CategoriesNavigator} />
    <Tab.Screen name="Search" component={SearchNavigator} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);
