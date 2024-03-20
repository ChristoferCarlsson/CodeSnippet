import React from "react";
import { Pressable, Text } from "react-native";

import defaultStyles from "../config/styles";

function AppButton({ children, style, ...otherProps }) {
  return (
    <Pressable
      {...otherProps}
      style={({ pressed }) => [
        defaultStyles.button,
        style,
        pressed ? defaultStyles.buttonClicked : {},
      ]}
      {...otherProps}
    >
      <Text>{children}</Text>
    </Pressable>
  );
}

export default AppButton;
