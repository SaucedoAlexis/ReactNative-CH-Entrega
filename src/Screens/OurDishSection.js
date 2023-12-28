import { useSelector } from "react-redux";
import DishCard from "../componentes/DishCard";
import { FlatList} from "react-native";
const OurDishSection = ({ route, navigation }) => {

  const misAlimentos = useSelector((state) => state.dishes.value.ourDishes)

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
