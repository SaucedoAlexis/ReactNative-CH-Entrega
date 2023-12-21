import { useFonts } from "expo-font";
import Navigators from "./src/navigation/Navigators";
import { StatusBar } from "react-native";
import { fonts } from "./src/Global/fuentes";

export default function App() {
  const [fontLoaded] = useFonts(fonts);
  if (!fontLoaded) return null;

  return (
    <>
    <StatusBar
    />
      <Navigators></Navigators>
    </>
  );
}
