import styled from "styled-components/native";
import { FlatList } from "react-native";
import { CurrentRenderContext } from "@react-navigation/native";

export const RecipeList = styled(FlatList).attrs({
  contentContainerStyle: {
    // padding: 16,
    marginTop: 20,
  },
})``;
