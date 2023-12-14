
import Button from "../componentes/Button";
import Header from "../componentes/Header";
import { Pressable, StatusBar, StyleSheet, Text } from "react-native";
import ItemListCategories from "./ItemListCategories";
import { colors } from "../Global/colors";

const Home = ({press}) => {
  return (
    <>
      <StatusBar />
      <Header screenName="Home" />
      <Button textName="Cátegorías" textStyle={styles.option} press={press}/>
      
    </>
  )
};

export default Home;

const styles = StyleSheet.create({
  option: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    fontSize: 30,
    backgroundColor: `${colors.secundario}`,
    fontWeight:"bold"
  },
});
