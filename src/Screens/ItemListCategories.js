import {StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import categories from "../Data/categories.json";
import alimentos from "../Data/alimentos.json";
import CategoryComponent from "../componentes/CategoryComponent";
import FilterDishesComponent from "../componentes/FilterDishesComponent";

const ItemListCategories = ({ navigation, route }) => {
  //Almacenar cuando se clickee una categoría
  const [category, setCategory] = useState("");
  //Almacenar cuando se filtre una categoría
  const [categoriesFilter, setCategoryFilter] = useState([]);
  //Almacentar el item filtrado al seleccionar

  const handlerCategory = (item) => {
    setCategory(item);
  };

  //cuando haya categoría
  useEffect(() => {
    setCategoryFilter(
      alimentos.filter((elem) => elem.categorías.includes(category))
    );
  }, [category]);

  return (
    <>
      
      {category == "" ? (
        <CategoryComponent data={categories} setItem={handlerCategory} />
      ) : (
        <FilterDishesComponent
          clearCategory={() => setCategory("")}
          categoriesFilter={categoriesFilter}
          navigation={navigation}
          route={route}
        />
      )}
    </>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({});
