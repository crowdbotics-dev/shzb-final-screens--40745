import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

const Mosaic8 = () => {
  return <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.sectionContainer}>
        <View style={styles.row}>
          <View style={styles.col}>
            <View style={[styles.row, styles.f5]}>
              <View style={styles.col}>
                <Text style={styles.textHeading1}>b1</Text>
              </View>
            </View>
            <View style={[styles.row, styles.f3]}>
              <View style={styles.col}>
                <Text style={styles.textHeading1}>b2</Text>
              </View>
              <View style={styles.col}>
                <Text style={styles.textHeading1}>b3</Text>
              </View>
            </View>
          </View>
          <View style={styles.col}>
            <View style={[styles.row, styles.f1]}>
              <View style={[styles.col, styles.f1]}>
                <Text style={styles.textHeading1}>d1</Text>
              </View>
              <View style={[styles.col, styles.f1]}>
                <Text style={styles.textHeading1}>e1</Text>
              </View>
            </View>
            <View style={[styles.row, styles.f3]}>
              <View style={styles.col}>
                <Text style={styles.textHeading1}>d2</Text>
              </View>
              <View style={styles.col}>
                <View style={styles.row}>
                  <View style={styles.col}>
                    <Text style={styles.textHeading1}>f1</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.col}>
                    <Text style={styles.textHeading1}>f2</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.col, styles.f3]}>
            <View style={styles.row}>
              <View style={[styles.row]}>
                <View style={[styles.col, styles.f3]}>
                  <Text style={styles.textHeading1}>b4</Text>
                </View>
                <View style={[styles.col, styles.f2]}>
                  <Text style={styles.textHeading1}>b5</Text>
                </View>
              </View>
            </View>
            <View style={[styles.row, styles.f2]}>
                <View style={[styles.col, styles.f1]}>
                  <View style={[styles.row]}>
                    <View style={styles.col}>
                      <Text style={styles.textHeading1}>f3</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.col}>
                      <Text style={styles.textHeading1}>f4</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.col, styles.f2]}>
                  <Text style={styles.textHeading1}>b6</Text>
                </View>
              </View>
          </View>
          <View style={[styles.col, styles.f1]}>
            <View style={[styles.row, styles.f4]}>
              <View style={[styles.col, styles.f1]}>
                <Text style={styles.textHeading1}>d3</Text>
              </View>
            </View>
            <View style={[styles.row, styles.f2]}>
              <View style={styles.col}>
                <Text style={styles.textHeading1}>d4</Text>
              </View>
            </View>
          </View>
        </View>
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
    flex: 1,
    margin: 0,
    padding: 0
  },
  textHeading1: {
    fontSize: 20,
    fontWeight: "bold"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between"
  },
  col: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "white"
  },
  f1: {
    flex: 1
  },
  f2: {
    flex: 2
  },
  f3: {
    flex: 3
  },
  f4: {
    flex: 4
  },
  f5: {
    flex: 5
  },
  f6: {
    flex: 6
  },
  f7: {
    flex: 7
  },
  f8: {
    flex: 8
  },
  f9: {
    flex: 9
  },
  f10: {
    flex: 10
  }
});
export default Mosaic8;