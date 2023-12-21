import { FlatList, StyleSheet} from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryComponent = ({data, setItem}) => {

  const handlerItem = (item) =>{
    setItem(item)
  }

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <>
            <CategoryItem
              category={item}
              categoryPress={()=> handlerItem(item)}
            ></CategoryItem>
          </>
        )}
      />
    </>
  );
};

export default CategoryComponent;

const styles = StyleSheet.create({});
