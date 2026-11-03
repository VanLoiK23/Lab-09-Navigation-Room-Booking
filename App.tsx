import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RoomsStackNavigator } from "./src/navigation/RoomsStackNavigator";
import { MyBookingsScreen } from "./src/screens/MyBookingsScreen";
import type { MainTabParamList } from "./src/navigation/types";

import AboutScreen from "./src/screens/AboutScreen";
const Tab = createBottomTabNavigator<MainTabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 14 },
        }}
      >

        <Tab.Screen
          name="RoomsTab"
          component={RoomsStackNavigator}
          options={{
            title: "Room Explorer",
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="MyBookings"
          component={MyBookingsScreen}
          options={{
            title: "My Bookings",
          }}
        />

        <Tab.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{
            title: "About A Screen",
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
