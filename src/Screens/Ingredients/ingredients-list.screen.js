import React, { useLayoutEffect } from "react";
import {
  getIngredientName,
  getAllIngredients,
} from "../../Services/data/mock.data.api";
import {
  IngredientsList,
  IngredientsListContainer,
} from "./ingredients-list.styles";
import { IngredientCard } from "../../Components/IngredientCard/ingredient-card.component";
import { httpGetRecipesByIngredient } from "../../Hooks/requests";
export const IngredientsListScreen = ({ navigation, route }) => {
  const ingredientsArray = route.params?.ingredients;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerTitleStyle: {
        fontSize: 16,
      },
    });
  }, []);

  const onPressIngredient = (item) => {
    let name = item.ingredientName;
    let url = item.ingredientImage;
    let ingredient = item.ingredientId;
    navigation.navigate("IngredientRecipes", { ingredient, name, url });
  };

  return (
    <IngredientsListContainer>
      <IngredientsList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={ingredientsArray}
        renderItem={({ item }) => (
          <IngredientCard
            item={item}
            onPressHandler={() => onPressIngredient(item)}
          />
        )}
        keyExtractor={(item) => `${item.ingredientId}`}
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
