import React from "react";
import { View, StyleSheet, Modal, ScrollView } from "react-native";

import defaultStyles from "../../config/styles";
import AppButton from "../Button";
import AppText from "../Text";

import TreasureView from "./TreasureView";

function TreasureDescription({ content, popup, show }) {
  return (
    <Modal
      animationType="slide"
      visible={show}
      transparent={true}
      onRequestClose={() => {
        popup("details");
      }}
      style={{ borderWidth: 1, borderColor: "blue" }}
    >
      <View style={[defaultStyles.popup]}>
        <AppText style={{ marginTop: 5 }}>{content.text}</AppText>
        <TreasureView content={content} />
        <ScrollView style={styles.textContainer}>
          <AppText style={{ textAlign: "center" }}>
            {content.description}
          </AppText>
        </ScrollView>
        <AppButton style={{ marginBottom: 5 }} onPress={() => popup("details")}>
          Exit
        </AppButton>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    width: "90%",
    borderWidth: 1,
    borderColor: "rgba(1, 1, 1, .4)",
    overflow: "scroll",
    margin: 10,
    marginTop: 0,
  },
});
export default TreasureDescription;
