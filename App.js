import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import Screen from "./app/componets/Screen";
import NavigatorScreen from "./app/screens/NavigatorScreen";

EStyleSheet.build({});

export default function App() {
  return (
    <Screen style={styles.container}>
      <NavigatorScreen />
      <StatusBar style="auto" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
