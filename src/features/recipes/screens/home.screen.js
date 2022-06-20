import React from "react";
import { TouchableOpacity } from "react-native";
import { recipes } from "../../../services/data/data.mock";
import { RecipeList } from "../components/recipe-list.styles";
import { RecipeCard } from "../components/recipe-card.component";
export const HomeScreen = ({ navigation }) => {
  return (
    <>
      <RecipeList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes}
        renderItem={({ item }) => <RecipeCard item={item} />}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </>
  );
};
