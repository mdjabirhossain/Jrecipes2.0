import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const CategoryItemContainer = styled.View`
  flex: 1;
  margin: 10px;
  justify-content: center;
  align-items: center;
  height: 215px;
  border-color: #cccccc;
  border-width: 0.5px;
  border-radius: 20px;
`;

export const CategoryItemImage = styled.Image.attrs({
  shadowOffset: {
    width: 0,
    height: 3,
  },
})`
  width: 100%;
  height: 155px;
  border-radius: 20px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  shadow-color: blue;
  shadow-radius: 5px;
  shadow-opacity: 1px;
  elevation: 3px;
`;

export const CategoryItemName = styled.Text`
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #333333;
  margin-top: 8px;
`;

export const CategoryItemInfo = styled.Text`
  margin-top: 3px;
  margin-bottom: 5px;
`;

// export const styles = StyleSheet.create({
//   categoriesItemContainer: {
//     flex: 1,
//     margin: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     height: 215,
//     borderColor: "#cccccc",
//     borderWidth: 0.5,
//     borderRadius: 20,
//   },
//   categoriesPhoto: {
//     width: "100%",
//     height: 155,
//     borderRadius: 20,
//     borderBottomLeftRadius: 0,
//     borderBottomRightRadius: 0,
//     shadowColor: "blue",
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowRadius: 5,
//     shadowOpacity: 1.0,
//     elevation: 3,
//   },
//   categoriesName: {
//     flex: 1,
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "#333333",
//     marginTop: 8,
//   },
//   categoriesInfo: {
//     marginTop: 3,
//     marginBottom: 5,
//   },
// });
