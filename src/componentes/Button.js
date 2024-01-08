import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

const Button = ({ textName, textStyle, press }) => {
  return (
    <Pressable style={styles.press} onPress={press}>
      <Text style={textStyle}> {textName} </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  press: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
