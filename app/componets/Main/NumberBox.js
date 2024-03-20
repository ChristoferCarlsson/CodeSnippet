import React from "react";
import { View, StyleSheet } from "react-native";

import defaultStyles from "../../config/styles";
import AppText from "../Text";

function NumberBox({ content }) {
  return (
    <View style={styles.container}>
      {content.map((item, index) => {
        return (
          <View key={item + " " + index} style={styles.innerContainer}>
            <AppText style={{ fontSize: 14 }}>{item.text}</AppText>
            <AppText style={{ margin: 4, fontSize: 30, fontWeight: "bold" }}>
              {item.number}
            </AppText>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  innerContainer: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 2.5,
    marginVertical: 5,
    backgroundColor: defaultStyles.colors.white,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    fontSize: 8,
    padding: 5,
    display: "flex",
    height: 120,
    width: 120,
  },
});
export default NumberBox;
