import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import defaultValues from "../config/styles";
import Header from "../componets/Header";
import NumberBox from "../componets/Main/NumberBox";
import TextBox from "../componets/Main/TextBox";

let content = [
  {
    text: "Programmer Features:",
  },
  {
    text: "* Can finish a cup of coffee before standups.",
  },
  {
    text: "* Bad posture.",
  },
  {
    text: "* Blind to misspellings.",
  },
  {
    text: "* Will lose track of time when ''In the Zone''.",
  },
];

let content2 = [
  {
    text: "Age",
    number: "29",
  },
  {
    text: "Experience",
    number: "3y",
  },
];

function FrontScreen() {
  return (
    <View style={defaultValues.outerScreen}>
      <ScrollView contentContainerStyle={defaultValues.innerScreen}>
        <Header>Front Page</Header>
        <View style={styles.textContainer}>
          <TextBox
            content={[{ text: "Christofer Carlsson" }]}
            header={"Name"}
          />
        </View>
        <View style={styles.textContainer}>
          <TextBox content={[{ text: "Programmer" }]} header={"Class"} />
          <TextBox content={[{ text: "Front-end" }]} header={"Subclass"} />
        </View>
        <NumberBox content={content2} />
        <View style={styles.textContainer}>
          <TextBox content={content} header={"Features"} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
});
export default FrontScreen;
