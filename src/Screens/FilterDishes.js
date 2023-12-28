import { FlatList, Pressable, StyleSheet, Text } from "react-native";
import CategoryItem from "../componentes/CategoryItem";
import { colors } from "../Global/colors";
import { useSelector } from "react-redux";
const FilterDishes = ({navigation}) => {
  
  const categoriesFilter = useSelector((state) => state.dishes.value.dishesFilter);
  
  return (
    <>
      <Pressable onPress={() => navigation.navigate("DishCategories")} style={styles.clearButton}>
        <Text style={styles.clearButton__text}>Limpiar Filtro</Text>
      </Pressable>
      <FlatList
        data={categoriesFilter}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryItem
            category={item.nombre}
            categoryPress={() => navigation.navigate("Dish", { item: item })}
            
          ></CategoryItem>
        )}
      />
    </>
  );
};

export default FilterDishes;

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
