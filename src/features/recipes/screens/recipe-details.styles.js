// import { StyleSheet, Dimensions } from "react-native";
// import styled from "styled-components/native";
// import Carousel, { Pagination } from "react-native-snap-carousel";

// export const { width: viewportWidth } = Dimensions.get("window");

// export const CarouselContainer = styled(Carousel)`
//   min-height: 250px;
// `;

// export const Container = styled.View`
//   background-color: white;
//   flex: 1;
// `;

// export const CarouselImage = styled.Image`
//   position: absolute;
//   left: 0;
//   right: 0;
//   top: 0;
//   bottom: 0;
//   width: 100%;
//   height: 250px;
// `;

// export const CarouselImageContainer = styled.View`
//   flex: 1;
//   justify-content: center;
//   width: ${viewportWidth}px;
//   height: 250px;
// `;

// export const RecipeInfoContainer = styled.View`
//   flex: 1;
//   margin: 25px;
//   margin-top: 20px;
//   justify-content: center;
//   align-items: center;
// `;

// export const RecipeTitle = styled.Text`
//   font-size: 28px;
//   margin: 10px;
//   font-weight: bold;
//   color: black;
//   text-align: center;
// `;

// export const OtherInfoContainer = styled.View`
//   flex: 1;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-start;
// `;

// export const CategoryTitle = styled.Text`
//   font-size: 14px;
//   font-weight: bold;
//   margin: 10px;
//   color: #2cd18a;
// `;

// export const ClockPhoto = styled.Image`
//   height: 20px,
//   width: 20px,
//   margin-right: 0px,
// `;

// export const TimeNeeded = styled.Text`
//   font-size: 14;
//   font-weight: bold;
//   margin-left: 5px;
// `;

// export const ButtonContainer = styled.Button``;

// export const RecipeDescription = styled.Text`
//   text-align: left;
//   font-size: 16px;
//   margin-top: 30;
//   margin: 15px;
// `;

// // buttonContainer: {
// //   flex: 1,
// //   flexDirection: "row",
// //   alignItems: "center",
// //   justifyContent: "flex-start",
// // },

// export const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "white",
//     flex: 1,
//   },
//   carouselContainer: {
//     minHeight: 250,
//   },
//   carousel: {},

//   image: {
//     ...StyleSheet.absoluteFillObject,
//     width: "100%",
//     height: 250,
//   },
//   imageContainer: {
//     flex: 1,
//     justifyContent: "center",
//     width: viewportWidth,
//     height: 250,
//   },
//   paginationContainer: {
//     flex: 1,
//     position: "absolute",
//     alignSelf: "center",
//     paddingVertical: 8,
//     marginTop: 200,
//   },
//   paginationDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     marginHorizontal: 0,
//   },
//   infoRecipeContainer: {
//     flex: 1,
//     margin: 25,
//     marginTop: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   infoContainer: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-start",
//   },
//   buttonContainer: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-start",
//   },
//   infoPhoto: {
//     height: 20,
//     width: 20,
//     marginRight: 0,
//   },
//   infoRecipe: {
//     fontSize: 14,
//     fontWeight: "bold",
//     marginLeft: 5,
//   },
//   category: {
//     fontSize: 14,
//     fontWeight: "bold",
//     margin: 10,
//     color: "#2cd18a",
//   },
//   infoDescriptionRecipe: {
//     textAlign: "left",
//     fontSize: 16,
//     marginTop: 30,
//     margin: 15,
//   },
//   infoRecipeName: {
//     fontSize: 28,
//     margin: 10,
//     fontWeight: "bold",
//     color: "black",
//     textAlign: "center",
//   },
// });

// // export default styles;

import { StyleSheet, Dimensions } from "react-native";

const { width: viewportWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  carouselContainer: {
    minHeight: 250,
  },
  carousel: {},

  image: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: 250,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    width: viewportWidth,
    height: 250,
  },
  paginationContainer: {
    flex: 1,
    position: "absolute",
    alignSelf: "center",
    paddingVertical: 8,
    marginTop: 200,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0,
  },
  infoRecipeContainer: {
    flex: 1,
    margin: 25,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  infoPhoto: {
    height: 20,
    width: 20,
    marginRight: 0,
  },
  infoRecipe: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },
  category: {
    fontSize: 14,
    fontWeight: "bold",
    margin: 10,
    color: "#2cd18a",
  },
  infoDescriptionRecipe: {
    textAlign: "left",
    fontSize: 16,
    marginTop: 30,
    margin: 15,
  },
  infoRecipeName: {
    fontSize: 28,
    margin: 10,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
});

export default styles;

import styled from "styled-components/native";
export const CarouselImage = styled.Image`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 250px;
`;

export const CarouselImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  width: ${viewportWidth}px;
  height: 250px;
`;
