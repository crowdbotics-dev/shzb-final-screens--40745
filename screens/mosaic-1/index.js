import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

const Mosaic1 = () => {
  return <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.sectionContainer}>
        <View style={[styles.section, styles.sectoinTop]}>
          {
          /* YOUR CODE HERE */
        }
        <ImageBackground style={styles.jIqazQGk} source={require("./Screenshot 2023-01-11 at 10.07.11 PM.png")} resizeMode="cover"></ImageBackground></View>
        <View style={[styles.section, styles.sectionBottom]}>
          {
          /* YOUR CODE HERE */
        }
        <ImageBackground style={styles.uiiYYPsX} source={require("./Screenshot 2023-01-06 at 5.11.06 PM.png")} resizeMode="cover"></ImageBackground></View>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sectionContainer: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15
  },
  section: {
    flex: 1,
    backgroundColor: "pink",
    marginVertical: 5,
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  sectoinTop: {
    flex: 5
  },
  sectionBottom: {
    flex: 1
  },
  textHeading1: {
    fontSize: 20,
    fontWeight: "bold"
  },
  jIqazQGk: {
    width: 260,
    height: 195,
    position: "absolute",
    top: 106.5,
    left: 23.5,
    flexDirection: "row",
    flex: "1",
    alignItems: "center",
    justifyContent: "center"
  },
  uiiYYPsX: {
    width: 223,
    height: 68
  }
});
export default Mosaic1;