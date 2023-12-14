import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../Global/colors";

const CategoryItem = ({ category, categoryPress }) => {
  return (
    <>
    
    <Pressable style={styles.container} onPress={categoryPress}>
      <Text style={styles.text}>{category}</Text>
    </Pressable>
    </>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 20,
    borderWidth: 3,
    backgroundColor: colors.terciario
  },
  text:{
    textAlign:"center",
    fontSize:30,
    
    fontWeight:"bold"
  }
});
