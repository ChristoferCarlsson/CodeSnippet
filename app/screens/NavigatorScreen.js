import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import FrontScreen from "./FrontScreen";
import InventoryScreen from "./InventoryScreen";

const Tab = createBottomTabNavigator();

function NavigatorScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Front Page"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Front Page") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Inventory") {
              iconName = focused ? "archive" : "archive-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Inventory"
          component={InventoryScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Front Page"
          component={FrontScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavigatorScreen;
