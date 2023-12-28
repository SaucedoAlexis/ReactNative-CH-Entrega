import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabIcon = ({name,iconName}) => {
  return (
    <View>
      <MaterialCommunityIcons name={iconName} size={40} color="black" />
      <Text >{name}</Text>
    </View>
  );
};

export default TabIcon;

