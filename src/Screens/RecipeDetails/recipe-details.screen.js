// import React, { useLayoutEffect, useRef, useState } from "react";
// import { View, Dimensions, TouchableHighlight } from "react-native";
// import styles from "./recipe-details.styles";
// import {
//   getIngredientName,
//   getCategoryName,
//   getCategoryById,
// } from "../../Services/data/mock.data.api";
// import BackButton from "../../Components/BackButton/backbutton.component";
// import ViewIngredientsButton from "../../Components/ViewIngredients/view-ingredients-button.component";
// import { RecipeCarousal } from "../../Components/RecipeDetails/recipe-details.component";
// import {
//   RecipeScrollView,
//   CarouselContainer,
//   RecipeInfoContainer,
//   RecipeTitle,
//   OtherInfoContainer,
//   RecipeDescription,
//   CategoryTitle,
//   TimeNeeded,
//   ClockPhoto,
// } from "./recipe-details.styles";

// export const RecipeDetailsScreen = ({ navigation, route }) => {
//   const item = route.params?.item;
//   const category = getCategoryById(item.categoryId);
//   const title = getCategoryName(category.id);

//   // useLayoutEffect(() => {
//   //   navigation.setOptions({
//   //     headerTransparent: "true",
//   //     headerLeft: () => (
//   //       <BackButton
//   //         onPress={() => {
//   //           navigation.goBack();
//   //         }}
//   //       />
//   //     ),
//   //     headerRight: () => <View />,
//   //   });
//   // }, []);

//   const onPressIngredient = (item) => {
//     var name = getIngredientName(item);
//     let ingredient = item;
//     navigation.navigate("Ingredient", { ingredient, name });
//   };

//   return (
//     <RecipeScrollView>
//       <CarouselContainer>
//         <RecipeCarousal item={item} />
//       </CarouselContainer>
//       <RecipeInfoContainer>
//         <RecipeTitle>{item.title}</RecipeTitle>
//         <OtherInfoContainer>
//           <TouchableHighlight
//             onPress={() =>
//               navigation.navigate("RecipesList", { category, title })
//             }
//           >
//             <CategoryTitle>
//               {getCategoryName(item.categoryId).toUpperCase()}
//             </CategoryTitle>
//           </TouchableHighlight>
//         </OtherInfoContainer>

//         <OtherInfoContainer>
//           <ClockPhoto
//             style={styles.infoPhoto}
//             source={require("../../../assets/icons/time.png")}
//           />
//           <TimeNeeded>{item.time} minutes </TimeNeeded>
//         </OtherInfoContainer>

//         <OtherInfoContainer>
//           <ViewIngredientsButton
//             onPress={() => {
//               // onPressIngredient(item);
//               let ingredients = item.ingredients;
//               let title = "Ingredients for " + item.title;
//               navigation.navigate("IngredientsList", { ingredients, title });
//             }}
//           />
//         </OtherInfoContainer>
//         <OtherInfoContainer>
//           <RecipeDescription>{item.description}</RecipeDescription>
//         </OtherInfoContainer>
//       </RecipeInfoContainer>
//     </RecipeScrollView>
//   );
// };

import React, { useLayoutEffect, useRef, useState } from "react";
import { View, Dimensions, TouchableHighlight } from "react-native";
import styles from "./recipe-details.styles";
import {
  getIngredientName,
  getCategoryName,
  getCategoryById,
} from "../../Services/data/mock.data.api";
import BackButton from "../../Components/BackButton/backbutton.component";
import ViewIngredientsButton from "../../Components/ViewIngredients/view-ingredients-button.component";
import { RecipeCarousal } from "../../Components/RecipeDetails/recipe-details.component";
import {
  RecipeScrollView,
  CarouselContainer,
  RecipeInfoContainer,
  RecipeTitle,
  OtherInfoContainer,
  RecipeDescription,
  CategoryTitle,
  TimeNeeded,
  ClockPhoto,
  RecipeImageContainer,
  RecipeCardImage,
  RecipeCardImageCover,
} from "./recipe-details.styles";
import { Card, Title, Paragraph } from "react-native-paper";
import { Text } from "react-native";

export const RecipeDetailsScreen = ({ navigation, route }) => {
  const item = route.params?.item;
  const title = item.title;
  // console.log("itemmm: ", item);
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerTransparent: "true",
  //     headerLeft: () => (
  //       <BackButton
  //         onPress={() => {
  //           navigation.goBack();
  //         }}
  //       />
  //     ),
  //     headerRight: () => <View />,
  //   });
  // }, []);

  const onPressIngredient = (item) => {
    var name = getIngredientName(item);
    let ingredient = item;
    navigation.navigate("Ingredient", { ingredient, name });
  };

  return (
    <RecipeScrollView>
      <RecipeCardImage>
        <RecipeCardImageCover source={{ uri: item.photo_url }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}
        {/* <Card.Content>
          <Title>{item.title}</Title>
          <Paragraph>{item.description}</Paragraph>
        </Card.Content> */}
      </RecipeCardImage>
      <OtherInfoContainer>
        <ViewIngredientsButton
          onPress={() => {
            // onPressIngredient(item);
            const ingredients = item.ingredients;
            const title = "Ingredients for " + item.title;
            navigation.navigate("IngredientsList", { ingredients, title });
          }}
        />
      </OtherInfoContainer>
      <RecipeTitle>
        <Title>{item.title}</Title>
      </RecipeTitle>
      <RecipeDescription>
        <Paragraph>{item.description}</Paragraph>
      </RecipeDescription>
    </RecipeScrollView>
  );
};
