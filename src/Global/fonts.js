import { useFonts } from "expo-font";

const fonts = () => {
  const [fontLoaded] = useFonts({
    "PoppinsBold": require("../../assets/PoppinsBold.ttf"),
    "PreahvihearRegular": require("../../assets/PreahvihearRegular.ttf"),
  });

  if (!fontLoaded) return null;

  return fontLoaded;
};

export default fonts;
