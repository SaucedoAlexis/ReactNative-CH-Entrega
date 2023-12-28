import { FlatList} from "react-native";
import { useDispatch } from "react-redux";
import CategoryItem from "./CategoryItem";
import {setCategoryFilter} from "../features/dishes/dishesSlice";

const CategoryComponent = ({ data, navigation }) => {
  const dispatch = useDispatch();
  
  const handlePress = (item) => {
    dispatch(setCategoryFilter(item));

    navigation.navigate("FilterDishes");
  };
  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <>
            <CategoryItem
              category={item}
              categoryPress={()=>handlePress(item)}
            ></CategoryItem>
          </>
        )}
      />
    </>
  );
};

export default CategoryComponent;


