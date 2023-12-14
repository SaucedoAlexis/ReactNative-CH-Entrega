import Home from "./src/Screens/Home";
import ItemListCategories from "./src/Screens/ItemListCategories";
import ItemDetail from "./src/Screens/ItemDetail";
import { useEffect, useState } from "react";
import Button from "./src/componentes/Button";
import { Pressable, Text } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [categoriesPress, setCategoriesPress] = useState(false);
  const [fontLoaded] = useFonts({
    "Roboto-Black" : require("./assets/Roboto-Black.ttf"),
    "PoppinsBold" : require("./assets/PoppinsBold.ttf"),
    "PreahvihearRegular": require("./assets/PreahvihearRegular.ttf")
  });
  if (!fontLoaded) return null;

  const handleComponents = () => {
    if (categoriesPress) {
      return <ItemListCategories back={() => setCategoriesPress(false)} />;
    } else {
      return <Home press={() => setCategoriesPress(true)} />;
    }
  };

  return <>{handleComponents()}</>;
}
