import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/colors";

const Header = ({ screenName }) => {
  
  return (
    <>
    
    <View style={styles.headerContainer}>
      <Text style={styles.appTitle}>MorfiExpress</Text>

      <Text style={styles.appSite}>{screenName}</Text>
    </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: `${colors.primaro}`,
    
  },
  appTitle: {
    fontSize: 35,
    textAlign: "center",
    paddingVertical: 15,
    
    fontFamily:"PoppinsBold"
    
  },
  appSite: {
    textAlign: "center",
    fontSize: 30,
    paddingVertical: 15,
    fontFamily:"PreahvihearRegular"
  },
});
