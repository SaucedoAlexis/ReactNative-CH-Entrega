import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../componentes/Header";
import OurDishSection from "../Screens/OurDishSection";
import OurDishDetail from "../Screens/OurDishDetail";

const Stack = createNativeStackNavigator();

const OurDishStack = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={() => {
          return {
            header: () => <Header screenName={"Mis Platos"} />
          };
        }}
      >
        <Stack.Screen name="Home" component={OurDishSection} />
        <Stack.Screen name="DishSelected" component={OurDishDetail} />
      </Stack.Navigator>
    </>
  );
};

export default OurDishStack;
