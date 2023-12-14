import {
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Header from "../componentes/Header";


const ItemDetail = ({ item, back }) => {
  return (
    <ScrollView>
      <Header screenName="Plato"></Header>
      <Pressable onPress={back}>
        <Text style={{fontSize:50, textAlign:"center"}}>⬅</Text>
      </Pressable>
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
    fontFamily:"PoppinsBold"
    
  },
  subtitulo: {
    fontSize: 30,    
    fontFamily:"PoppinsBold"
  },
  contenido: {
    fontSize: 20,
    alignSelf: "flex-start",
    padding: 10,
    fontWeight: "600",
    fontFamily:"PreahvihearRegular"
    
  },
});
