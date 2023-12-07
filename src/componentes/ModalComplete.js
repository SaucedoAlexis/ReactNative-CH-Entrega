import { Modal, View, StyleSheet, Text, Button } from "react-native";

export const ModalComplete = ({ showModal, complete, setComplete }) => {
  return (
    <Modal visible={showModal}>
      <View style={styles.modal}>
        <View style={styles.modalView}>
          <Text style={styles.modalView__text}>Ha terminardo la tarea?</Text>
          <Button title="Sí" onPress={complete}></Button>
          <Button
            title="No"
            onPress={() => setComplete(false)}
          ></Button>
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
 
});
