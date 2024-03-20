import React from "react";
import { View } from "react-native";

import AppText from "../Text";
import defaultValues from "../../config/styles";

function TreasureView({ content }) {
  return (
    <>
      <View style={defaultValues.treasureView}>
        <View
          style={[
            defaultValues.innerTreasureView,
            { borderLeftWidth: 1, borderBottomWidth: 1 },
          ]}
        >
          <AppText>{"CP"}</AppText>
          <AppText>{content.cp}</AppText>
        </View>
        <View
          style={[
            defaultValues.innerTreasureView,
            { borderLeftWidth: 1, borderBottomWidth: 1 },
          ]}
        >
          <AppText>{"SP"}</AppText>
          <AppText>{content.sp}</AppText>
        </View>
        <View
          style={[
            defaultValues.innerTreasureView,
            { borderLeftWidth: 1, borderBottomWidth: 1 },
          ]}
        >
          <AppText>{"GP"}</AppText>
          <AppText>{content.gp}</AppText>
        </View>
        <View
          style={[
            defaultValues.innerTreasureView,
            { borderLeftWidth: 1, borderBottomWidth: 1 },
          ]}
        >
          <AppText>{"PP"}</AppText>
          <AppText>{content.pp}</AppText>
        </View>
      </View>
    </>
  );
}

export default TreasureView;
