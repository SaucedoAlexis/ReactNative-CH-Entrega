import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";

const DishCard = ({data, navigation, route}) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate("DishSelected", { item: data })}
        style={[styles.container, { backgroundColor: isPressed ? "#ccc" : "#fff" }]}
      >
        <Image style={styles.image} source={{ uri: data.img }} />
        <Text style={styles.title}>{data.nombre}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 150,
    borderRadius: 50,
    marginTop:10,
        
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection:"row",
    
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50 / 2,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default DishCard;
