import CategoryComponent from "../componentes/CategoryComponent";

import { useGetCategoriesQuery } from "../App/services/shopservices";

const ItemListCategories = ({ navigation }) => {
  const { data: allCategories } = useGetCategoriesQuery();

  return (
    <>
      <CategoryComponent navigation={navigation} data={allCategories} />
    </>
  );
};

export default ItemListCategories;
