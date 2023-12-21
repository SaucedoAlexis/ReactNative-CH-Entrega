import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import ItemDetail from "../Screens/ItemDetail";
import ItemListCategories from "../Screens/ItemListCategories";
import Header from "../componentes/Header";

const Stack = createNativeStackNavigator();

const Navigators = () => {
  return (
    <>
      
      <NavigationContainer>
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigators;
