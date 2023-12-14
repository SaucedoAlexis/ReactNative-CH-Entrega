import { FlatList, Pressable, StatusBar, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import categories from "../Data/categories.json";
import alimentos from "../Data/alimentos.json";
import CategoryItem from "../componentes/CategoryItem";
import Header from "../componentes/Header";
import ItemDetail from "./ItemDetail";

const ItemListCategories = ({back}) => {
  //Almacenar cuando se clickee una categoría
  const [category, setCategory] = useState("");
  //Almacenar cuando se filtre una categoría
  const [categoriesFilter, setCategoryFilter] = useState([]);
  //Almacentar el item filtrado al seleccionar
  const [itemSelected, setItemSelected] = useState("");

  const handlerCategory = (item) => {
    setCategory(item);
  };

  //cuando haya categoría
  useEffect(() => {
    if (category != "") {
      let newItems = alimentos.filter((prod) =>
        prod.categorías.includes(category)
      );

      setCategoryFilter(newItems);
    } else {
      let newItem = alimentos.find((prod) => (prod.name = itemSelected.name));

      setCategoryFilter(newItem);
    }
  }, [category, itemSelected]);

  const ComponenteCategorias = (data) => {
    return (
      <>
        <Pressable onPress={back}>
          <Text style={{ fontSize: 50, textAlign: "center" }}>⬅</Text>
        </Pressable>
        <FlatList
          data={data}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <>
              <CategoryItem
                category={item}
                categoryPress={() => handlerCategory(item)}
              ></CategoryItem>
            </>
          )}
        />
      </>
    );
  };

  const ComponenteAlimentosFiltrados = (categoriesFilter) => {
    return (
      <>
        <Pressable onPress={() => setCategory("")}>
          <Text style={{ fontSize: 50, textAlign: "center" }}>⬅</Text>
        </Pressable>
        <FlatList
          data={categoriesFilter}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CategoryItem
              category={item.nombre}
              categoryPress={() => setItemSelected(item)}
            ></CategoryItem>
          )}
        />
      </>
    );
  };
  const handlerItemSelected = (categoriesFilter) => {
    return itemSelected == "" ? (
      ComponenteAlimentosFiltrados(categoriesFilter)
    ) : (
      <ItemDetail item={itemSelected} back={() => setItemSelected("")} />
    );
  };

  return (
    <>
      <StatusBar />
      {itemSelected == "" ? <Header screenName="Categorías" /> : ""}
      {category == ""
        ? ComponenteCategorias(categories)
        : handlerItemSelected(categoriesFilter)}
    </>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({});
