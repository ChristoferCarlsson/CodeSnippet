import React from "react";
import { View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import defaultStyles from "../../config/styles";
import AppText from "../Text";

function TextBox({ content, header }) {
  return (
    <>
      <View style={styles.container}>
        <AppText style={styles.header}>{header}</AppText>
        {content.map((item, index) => {
          return (
            <AppText
              key={item + " " + index}
              style={[EStyleSheet.child(styles, "text", index, content.length)]}
            >
              {item.text}
            </AppText>
          );
        })}
      </View>
    </>
  );
}

const styles = EStyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 2.5,
    marginVertical: 5,
    backgroundColor: defaultStyles.colors.white,

    fontSize: 8,
    padding: 5,
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    marginTop: 5,
  },
  "text:first-child": {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default TextBox;
