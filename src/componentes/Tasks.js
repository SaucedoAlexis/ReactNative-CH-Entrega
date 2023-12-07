import { View, FlatList } from "react-native";
import { Item } from "./Item";

export const Tasks = ({ data, modalComplete, modalDel }) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item complete={modalComplete} del={modalDel} item={item} />
        )}
      />
    </View>
  );
};
