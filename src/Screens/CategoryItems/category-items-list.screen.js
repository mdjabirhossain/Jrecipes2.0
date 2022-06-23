import React, { useLayoutEffect } from "react";
import { View } from "react-native";
import { categories } from "../../Services/data/data.mock";
import MenuImage from "../../Components/MenuImage/menu-image.component.js";
import {
  CategoriesList,
  CategoriesListContainer,
} from "./category-items-list.styles";
import { CategoryItemCard } from "../../Components/CategoryItemCard/category-item-card.component";

export const CategoryItemsListScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        flex: 1,
      },
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const onPressCategory = (item) => {
    const title = item.name;
    const category = item;
    navigation.navigate("CategoryRecipes", { category, title });
  };

  return (
    <CategoriesListContainer>
      <CategoriesList
        data={categories}
        renderItem={({ item }) => (
          <CategoryItemCard
            item={item}
            onPressCategoryItemCard={onPressCategory}
          />
        )}
        keyExtractor={(item) => `${item.id}`}
      />
    </CategoriesListContainer>
  );
};
