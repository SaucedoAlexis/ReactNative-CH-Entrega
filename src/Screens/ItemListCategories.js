import CategoryComponent from "../componentes/CategoryComponent";
import { useDispatch, useSelector } from "react-redux";

const ItemListCategories = ({ navigation}) => {
  const dispatch = useDispatch();
  const allCategories = useSelector(
    (state) => state.dishes.value.allCategories
  );

  return (
    <>
      <CategoryComponent navigation={navigation} data={allCategories}/>
    </>
  );
};

export default ItemListCategories;


