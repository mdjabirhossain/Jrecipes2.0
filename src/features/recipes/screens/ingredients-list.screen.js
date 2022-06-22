import React, { useLayoutEffect } from "react";
import {
  getIngredientName,
  getAllIngredients,
} from "../../../services/data/mock.data.api";
import {
  IngredientsList,
  IngredientsListContainer,
} from "./ingredients-list.styles";
import { IngredientCard } from "../components/ingredient-card.component";

export const IngredientsListScreen = ({ navigation, route }) => {
  const item = route.params?.ingredients;
  const ingredientsArray = getAllIngredients(item);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerTitleStyle: {
        fontSize: 16,
      },
    });
  }, []);

  const onPressIngredient = (item) => {
    let name = getIngredientName(item.ingredientId);
    let ingredient = item.ingredientId;
    navigation.navigate("IngredientRecipes", { ingredient, name });
  };

  return (
    <IngredientsListContainer>
      <IngredientsList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={ingredientsArray}
        renderItem={({ item }) => (
          <IngredientCard item={item} onPressHandler={onPressIngredient} />
        )}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </IngredientsListContainer>
  );
};

// underlayColor="rgba(73,182,77,0.9)"

// const renderIngredient = ({ item }) => (
//   <TouchableOpacity onPress={() => onPressIngredient(item[0])}>
//     <IngredientContainer>
//       <IngredientPhoto source={{ uri: item[0].photo_url }} />
//       <IngredientTitle>{item[0].name}</IngredientTitle>
//       <IngredientQuantity>{item[1]}</IngredientQuantity>
//     </IngredientContainer>
//   </TouchableOpacity>
// );
