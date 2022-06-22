import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  Pressable,
} from "react-native";
import styles from "./search.styles";
import MenuImage from "../../categories/components/menu-image.component.js";
import {
  getCategoryName,
  getRecipesByRecipeName,
  getRecipesByCategoryName,
  getRecipesByIngredientName,
} from "../../../services/data/mock.data.api";
import { TextInput } from "react-native-gesture-handler";
import { RecipeCard } from "../../../components/recipes/recipe-card.component";
import { SafeArea } from "../../../components/utils/safearea.component";
import { Search } from "../components/search.component";

export const SearchScreen = (props) => {
  const { navigation } = props;

  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  //   useLayoutEffect(() => {
  //     navigation.setOptions({
  //       headerLeft: () => (
  //         <MenuImage
  //           onPress={() => {
  //             navigation.openDrawer();
  //           }}
  //         />
  //       ),
  //       headerTitle: () => (
  //         <View style={styles.searchContainer}>
  //           <Image
  //             style={styles.searchIcon}
  //             source={require("../../../../assets/icons/search.png")}
  //           />
  //           <TextInput
  //             style={styles.searchInput}
  //             onChangeText={handleSearch}
  //             value={value}
  //           />
  //           <Pressable onPress={() => handleSearch("")}>
  //             <Image
  //               style={styles.searchIcon}
  //               source={require("../../../../assets/icons/close.png")}
  //             />
  //           </Pressable>
  //         </View>
  //       ),
  //       headerRight: () => <View />,
  //     });
  //   }, [value]);

  useEffect(() => {}, [value]);

  const handleSearch = (text) => {
    setValue(text);
    var recipeArray1 = getRecipesByRecipeName(text);
    var recipeArray2 = getRecipesByCategoryName(text);
    var recipeArray3 = getRecipesByIngredientName(text);
    var aux = recipeArray1.concat(recipeArray2);
    var recipeArray = [...new Set(aux)];

    if (text == "") {
      setData([]);
    } else {
      setData(recipeArray);
    }
  };

  const onPressRecipe = (item) => {
    navigation.navigate("RecipeDetails", { item });
  };

  return (
    <SafeArea>
      <Search />
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <RecipeCard item={item} onPressRecipeCard={onPressRecipe} />
        )}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </SafeArea>
  );
};
