import {
    ScrollView,
    Image,
    StyleSheet,
    Text,
    View,
    Pressable,
  } from "react-native";
  import { AntDesign } from '@expo/vector-icons';
  import { useState } from "react";
  
  const ItemDetail = ({ route }) => {
    const [isSave, setIsDelete] = useState(false);
  
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
          
          {/* Función para en el futuro borrar de la base de datos las recetas al apretar el tachito */}
          {isSave == false ? (
            <Pressable onPress={() => setIsDelete(true)}>
             <AntDesign name="delete" size={50} color="black" />
            </Pressable>
          ) : (
            <Text style={styles.save}>Receta borrada de tu lista</Text>
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
    save: { fontSize: 30, color: "#AA0000", fontWeight: "bold" },
  });
  