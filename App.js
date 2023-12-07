import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import uuid from "react-native-uuid";
import { ModalComplete } from "./src/componentes/ModalComplete";
import { ModalDelete } from "./src/componentes/ModalDelete";
import { Tasks } from "./src/componentes/Tasks";
import { AddTask } from "./src/componentes/AddTask";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [idSelected, setIdSelected] = useState("");
  const [idCompleteSelected, setIdCompleteSelected] = useState();
  const [showModalComplete, setShowModalComplete] = useState(false);

  const handleTaskAdd = () => {
    setTaskList((current) => [
      ...current,
      { value: task, id: uuid.v4(), complete: false },
    ]);

    setTask("");
  };

  const handlerModalDelete = (id) => {
    setIdSelected(id);
    setShowModalDelete(true);
  };

  const handlerDelete = () => {
    setTaskList((current) => current.filter((task) => task.id != idSelected));
    setShowModalDelete(false);
  };

  const handlerModalComplete = (item) => {
    setIdCompleteSelected(item);
    setShowModalComplete(true);
  };

  const handlerComplete = () => {
    let oldItem = taskList.filter((task) => task.id == idCompleteSelected)[0];

    oldItem.complete = true;

    const newItem = oldItem;

    const newArr = taskList.filter((task) => task.id != idCompleteSelected);

    setTaskList([...newArr, newItem]);

    setShowModalComplete(false);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.header}>
        <Text style={styles.header__text}>MorfiExpress</Text>
      </View>
      
      <AddTask 
        task={task}
        setTask={setTask}
        taskAdd={handleTaskAdd}
      />

      <Tasks
        data={taskList}
        modalComplete={handlerModalComplete}
        modalDel={handlerModalDelete}
      />

      <ModalDelete
        showModal={showModalDelete}
        del={handlerDelete}
        setDel={setShowModalDelete}
      />

      <ModalComplete
        showModal={showModalComplete}
        complete={handlerComplete}
        setComplete={setShowModalComplete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    
  },
  header: {
    height: 40,
    backgroundColor: "#222222",
    marginVertical:50,
    
  },
  header__text: {
    fontSize: 20,
    margin: 5,
    color: "white",
    
  },
 
});
