import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({
  isFavouritesToggled,
  onFavouritesToggle,
  onSearchHandler,
}) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <SearchContainer>
      <Searchbar
        // icon={isFavouritesToggled ? "heart" : "heart-outline"}
        icon={"heart"}
        onIconPress={() => {}}
        placeholder="Search"
        value={searchKeyword}
        // onSubmitEditing={() => {
        //   search(searchKeyword);
        // }}
        onChangeText={(text) => {
          setSearchKeyword(text);
          onSearchHandler(text);
        }}
      />
    </SearchContainer>
  );
};
