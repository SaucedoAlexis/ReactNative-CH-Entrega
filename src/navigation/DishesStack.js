import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import ItemDetail from "../Screens/ItemDetail";
import ItemListCategories from "../Screens/ItemListCategories";
import Header from "../componentes/Header";
import FilterDishes from "../Screens/FilterDishes";

const Stack = createNativeStackNavigator();

const DishesStack = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => {
          return {
            header: () => (
              <Header
                screenName={
                  route.name == "Home"
                    ? "Bienvenido"
                    : route.name == "DishCategories"
                    ? "Tipos de platos"
                    : route.name == "Dish"
                    ? "Plato"
                    : ""
                }
              />
            ),
          };
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dish" component={ItemDetail} />
        <Stack.Screen name="DishCategories" component={ItemListCategories} />
        <Stack.Screen name="FilterDishes" component={FilterDishes} />
      </Stack.Navigator>
    </>
  );
};

export default DishesStack;
