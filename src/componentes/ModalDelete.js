import { Modal, View, StyleSheet, Text, Button } from "react-native";

export const ModalDelete = ({ showModal, del, setDel}) => {
  return (
    <Modal visible={showModal}>
      <View style={styles.modal}>
        <View style={styles.modalView}>
          <Text style={styles.modalView__text}>Quiere eliminar la tarea?</Text>
          <Button title="Sí" onPress={del}></Button>
          <Button title="No" onPress={() => setDel(false)}></Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    width: "70%",
    borderWidth: 2,
    padding: 10,
    gap: 10,
  },
  modalView__text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
