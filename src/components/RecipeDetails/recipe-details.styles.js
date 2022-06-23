import { StyleSheet, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import styled from "styled-components/native";
import { Image } from "react-native";
const { width: viewportWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
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
});

export default styles;

export const CarouselImage = styled.Image`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  width: 100%;
  height: 250px;
`;

export const CarouselImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  width: ${viewportWidth}px;
  height: 250px;
`;

export const RecipeScrollView = styled.ScrollView`
  background-color: white;
  flex: 1;
`;

export const CarouselContainer = styled.View`
  min-height: 250px;
`;

export const RecipeInfoContainer = styled.View`
  flex: 1;
  margin: 25px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const RecipeTitle = styled.Text`
  font-size: 28px;
  margin: 10px;
  font-weight: bold;
  color: black;
  text-align: center;
`;

export const OtherInfoContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const RecipeDescription = styled.Text`
  text-align: left;
  font-size: 16px;
  margin-top: 30;
  margin: 15px;
`;

export const CategoryTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin: 10px;
  color: #2cd18a;
`;

export const ClockPhoto = styled.Image`
  height: 20px,
  width: 20px,
  margin-right: 0px,
`;

export const TimeNeeded = styled.Text`
  font-size: 14;
  font-weight: bold;
  margin-left: 5px;
`;
