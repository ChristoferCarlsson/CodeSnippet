import React from "react";
import { View, StyleSheet, Modal } from "react-native";

import defaultStyles from "../config/styles";
import AppButton from "./Button";
import AppText from "./Text";

function ConfirmPopup({ content, falsePopup, truePopup, show, popup }) {
  return (
    <Modal
      animationType="slide"
      visible={show}
      transparent={true}
      onRequestClose={() => {
        falsePopup("removeTreasure");
      }}
    >
      <View
        style={[defaultStyles.popup, { height: 300, justifyContent: "center" }]}
      >
        <View style={styles.textBox}>
          <AppText>{content}</AppText>
        </View>
        <View style={styles.buttonBox}>
          <AppButton style={{ marginRight: 5 }} onPress={() => truePopup()}>
            Yes
          </AppButton>
          <AppButton
            style={{ marginLeft: 5 }}
            onPress={() => falsePopup("removeTreasure")}
          >
            No
          </AppButton>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  textBox: {
    borderBottomWidth: 1,
    borderRadius: 8,
    margin: 10,
    marginBottom: 20,
    padding: 10,
  },
  buttonBox: {
    display: "flex",
    flexDirection: "row",
  },
});
export default ConfirmPopup;
