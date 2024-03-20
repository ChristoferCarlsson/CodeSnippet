import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";

function Header({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.header, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default Header;
