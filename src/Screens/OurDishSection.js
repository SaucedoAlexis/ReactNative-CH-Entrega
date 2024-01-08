import DishCard from "../componentes/DishCard";
import { FlatList } from "react-native";
import { useGetMyDishesQuery } from "../App/services/shopservices";

const OurDishSection = ({ route, navigation }) => {
  const { data: misAlimentos } = useGetMyDishesQuery();

  return (
    <>
      <FlatList
        data={misAlimentos}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <DishCard
            data={item}
            navigation={navigation}
            route={route}
          ></DishCard>
        )}
      />
    </>
  );
};

export default OurDishSection;
