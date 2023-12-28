import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DishesStack from "./DishesStack";
import OurDishStack from "./OurDishStack";
import { StyleSheet } from "react-native-web";
import { colors } from "../Global/colors";
import TabIcon from "../componentes/TabIcon";

const Tab = createBottomTabNavigator();

const Navigators = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
          }}
        >
          <Tab.Screen
            name="DishStack"
            component={DishesStack}
            options={{
              tabBarIcon: () => (
                <TabIcon iconName={"food-variant"} name={"Platos"}></TabIcon>
              ),
            }}
          />
          <Tab.Screen
            name="OurDishesStack"
            component={OurDishStack}
            options={{
              tabBarIcon: () => (
                <TabIcon iconName={"food-turkey"} name={"Mis Platos"}></TabIcon>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigators;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.terciario,
    borderColor: "black",
    height: 70,
  },
});
