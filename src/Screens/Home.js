import Button from "../componentes/Button";
import { StyleSheet } from "react-native";
import { colors } from "../Global/colors";

const Home = ({ navigation, route }) => {
  return (
    <>
      <Button
        textName="Cátegorías"
        textStyle={styles.option}
        navigation={navigation}
        route={route}
        press={() => navigation.navigate("DishCategories")}
      />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  option: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    fontSize: 30,
    backgroundColor: `${colors.secundario}`,
    fontWeight: "bold",
  },
});
