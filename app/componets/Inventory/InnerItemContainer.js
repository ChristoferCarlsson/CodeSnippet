import React from "react";
import { View, TouchableHighlight, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import defaultValues from "../../config/styles";
import AppText from "../Text";

function InnerItemContainer({ content, popup, removeItem, decreaseAmount }) {
  return (
    <>
      {content.map((item, index) => {
        return (
          <TouchableHighlight
            key={item + " " + index}
            onPress={() => popup("details", item)}
            underlayColor="lightgray"
            style={styles.container}
          >
            <>
              <View
                style={[
                  styles.itemContainer,
                  styles.center,
                  { width: "50%", padding: 10 },
                ]}
              >
                <AppText>{item.text}</AppText>
              </View>
              {item.value ? (
                <View style={styles.itemContainer}>
                  <AppText>{item.value}</AppText>
                </View>
              ) : (
                ""
              )}
              <View
                style={[
                  styles.itemContainer,
                  styles.center,
                  { borderLeftWidth: 1, borderRightWidth: 1 },
                ]}
              >
                <AppText>{item.amount}</AppText>
              </View>
              <View style={[styles.buttonContainer, styles.itemContainer, {}]}>
                {item.amount > 1 ? (
                  <TouchableHighlight
                    style={styles.minorButtons}
                    onPress={() => decreaseAmount(item, index)}
                    underlayColor="lightgray"
                  >
                    <Ionicons
                      name={"remove"}
                      size={32}
                      color={"black"}
                    ></Ionicons>
                  </TouchableHighlight>
                ) : (
                  ""
                )}
                <TouchableHighlight
                  style={[styles.minorButtons, { borderLeftWidth: 1 }]}
                  onPress={() => removeItem(item, index)}
                  underlayColor="lightgray"
                >
                  <Ionicons
                    name={"close-circle"}
                    size={32}
                    color={"black"}
                  ></Ionicons>
                </TouchableHighlight>
              </View>
            </>
          </TouchableHighlight>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 2.5,
    marginVertical: 5,
    backgroundColor: defaultValues.colors.white,
    width: "100%",
    fontSize: 8,
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
  },
  itemContainer: {
    flexGrow: 1,
  },
  minorButtons: {
    width: "50%",
    minHeight: 35,
    zindex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    overflow: "hidden",
    width: 80,
  },
  center: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
});
export default InnerItemContainer;
