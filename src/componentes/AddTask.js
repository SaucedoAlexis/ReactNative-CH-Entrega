import { Button, StyleSheet, TextInput, View } from "react-native";

export const AddTask = ({task, setTask, taskAdd}) => {
  return (
    <View style={styles.task}>
      <TextInput
        placeholder="Agregar Tarea"
        style={styles.task__input}
        value={task}
        onChangeText={(t) => setTask(t)}
      />
      <Button title="➕" style={styles.task__button} onPress={taskAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
    task: {
        flex: 1,
        minHeight: 50,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-start",
        marginTop: 5,
        marginBottom: 5,
      },
      task__input: {
        borderWidth: 2,
        width: "75%",
        fontSize: 20,
        paddingLeft: 5,
      },
})
