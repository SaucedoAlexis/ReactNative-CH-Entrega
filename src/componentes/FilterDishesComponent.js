import { FlatList, Pressable, StyleSheet, Text } from "react-native";
import CategoryItem from "./CategoryItem";
import { colors } from "../Global/colors";

const FilterDishesComponent = ({
  clearCategory,
  categoriesFilter,
  navigation,
  route,
}) => {
  const handlerClearCat = () => {
    clearCategory();
  };

  return (
    <>
      <Pressable onPress={handlerClearCat} style={styles.clearButton}>
        <Text style={styles.clearButton__text}>Limpiar Filtro</Text>
      </Pressable>
      <FlatList
        data={categoriesFilter}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryItem
            category={item.nombre}
            categoryPress={() => navigation.navigate("Dish", { item: item })}
            route={route}
          ></CategoryItem>
        )}
      />
    </>
  );
};

export default FilterDishesComponent;

const styles = StyleSheet.create({
  clearButton: {
    padding: 20,
    margin: 20,
    borderWidth: 3,
    backgroundColor: colors.secundario,
  },
  clearButton__text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
