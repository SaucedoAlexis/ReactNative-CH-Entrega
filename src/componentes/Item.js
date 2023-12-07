import { Button, StyleSheet, Text, View } from "react-native";

export const Item = ({complete, del, item}) => {
  return (
    <View style={styles.list}>
      {item.complete != true ? (
        <Text style={styles.list__text}>{item.value}</Text>
      ) : (
        <Text style={styles.completeTask}>{item.value}</Text>
      )}

      <Button title="✔" onPress={() => complete(item.id)} />
      <Button title="❌" onPress={() => del(item.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
    list: {
      flex: 1,
      flexDirection: "row",
      minHeight: 40,
      marginTop: 5,
      gap: 5,
      justifyContent: "space-evenly",
    },
    list__text: {
      width: "75%",
      verticalAlign: "middle",
      textAlignVertical: "center",
      fontSize: 20,
      fontWeight: "bold",
    },
    completeTask: {
      backgroundColor: "#32a852",
      width: "75%",
      fontSize: 20,
      textAlign: "center",
      textAlignVertical: "center",
      color: "white",
      fontWeight: "bold",
      textDecorationLine: "line-through",
    },
  });
