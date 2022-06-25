import React from "react";
import { TouchableHighlight, Image } from "react-native";
import styles from "./backbutton.styles";

export default function BackButton(props) {
  return (
    <TouchableHighlight onPress={props.onPress} style={styles.btnContainer}>
      <Image
        source={require("../../../assets/icons/backArrow.png")}
        style={styles.btnIcon}
      />
    </TouchableHighlight>
  );
}
