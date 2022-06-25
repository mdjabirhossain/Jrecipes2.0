import React from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";
import styles from "./view-ingredients-button.styles";

export default function ViewIngredientsButton(props) {
  return (
    <TouchableOpacity
      underlayColor="rgba(73,182,77,0.9)"
      onPress={props.onPress}
    >
      <View style={styles.container}>
        <Text style={styles.text}>View Ingredients</Text>
      </View>
    </TouchableOpacity>
  );
}
