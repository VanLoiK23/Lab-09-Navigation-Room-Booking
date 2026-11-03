import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RoomsScreen } from "../screens/RoomsScreen";
import { RoomDetailScreen } from "../screens/RoomDetailScreen";
import type { RoomsStackParamList } from "./types";
import { BookingFormScreen } from "../screens/BookingFormScreen";

const Stack = createNativeStackNavigator<RoomsStackParamList>();

export function RoomsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Rooms"
        component={RoomsScreen}
        options={{ title: "Available Rooms" }}
      />

      <Stack.Screen
        name="RoomDetail"
        component={RoomDetailScreen}
        options={{ title: "Room Detail" }}
      />

      <Stack.Screen
        name="BookingForm"
        component={BookingFormScreen}
        options={{ title: "Booking Form" }}
      />
    </Stack.Navigator>
  );
}
