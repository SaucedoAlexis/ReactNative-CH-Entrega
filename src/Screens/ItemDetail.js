import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";

const ItemDetail = ({ route }) => {
  const [isSave, setIsSave] = useState(false);

  const { item } = route.params;

  return (
    <ScrollView>
      <View style={styles.conatiner}>
        <Image source={{ uri: item.img }} style={styles.img} />
        <Text style={styles.title}>{item.nombre}</Text>
        <Text style={styles.subtitulo}>Ingredientes:</Text>
        {item.ingredientes.map((ingrediente) => (
          <Text key={ingrediente} style={styles.contenido}>
            ➕{ingrediente}
          </Text>
        ))}
        <Text style={styles.subtitulo}>Instrucciones:</Text>
        {item.instrucciones.map((instrucciones) => (
          <Text key={instrucciones} style={styles.contenido}>
            ➖{instrucciones}
          </Text>
        ))}
        <View style={styles.categoryContainer}>
          <Text style={styles.subtitulo}>Categorías:</Text>
          {item.categorías.map((categoría) => (
            <Text key={categoría} style={styles.contenido}>
              ✔{categoría}
            </Text>
          ))}
        </View>
        {/* Función para en el futuro guardar en la base de datos las recetas al apretar el diskette */}
        {isSave == false ? (
          <Pressable onPress={() => setIsSave(true)}>
            <Entypo name="save" size={50} color="black" />
          </Pressable>
        ) : (
          <Text style={styles.save}>Ha guardado esta receta!!!😁</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,

    alignItems: "center",
  },
  img: {
    width: 300,
    height: 200,
    paddingVertical: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 40,
  },
  subtitulo: {
    fontSize: 30,
  },
  contenido: {
    fontSize: 20,
    alignSelf: "flex-start",
    padding: 10,
    fontWeight: "600",
  },
  save: { fontSize: 30, color: "#555555", fontWeight: "bold" },
});
