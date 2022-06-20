import React from "react";
import { TouchableOpacity } from "react-native";
import { recipes } from "../../../services/data/data.mock";
import { RecipeList } from "../components/recipes-list.styles";
import { RecipeCard } from "../components/recipe-card.component";
import { SafeArea } from "../../../components/utils/safearea.component";

export const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <SafeArea>
      <RecipeList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigate("RecipeDetails", { item })}
            >
              <RecipeCard item={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </SafeArea>
  );
};
