import React from "react";
import { View, ScrollView } from "react-native";
import defaultValues from "../config/styles";

import Header from "../componets/Header";
import TreasureContainer from "../componets/Inventory/TreasureContainer";

function InventoryScreen() {
  return (
    <View style={defaultValues.outerScreen}>
      <ScrollView contentContainerStyle={defaultValues.innerScreen}>
        <Header>Inventory</Header>
        <TreasureContainer />
      </ScrollView>
    </View>
  );
}

export default InventoryScreen;
