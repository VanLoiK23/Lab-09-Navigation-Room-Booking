import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { rooms } from "../data/rooms";
import type { RoomsStackParamList } from "../navigation/types";


type Props = NativeStackScreenProps<
  RoomsStackParamList,
  "RoomDetail"
>;

export function RoomDetailScreen({
  route,
  navigation,
}: Props) {
  const { roomId } = route.params;

  const room = rooms.find(
    (item) => item.id === roomId
  );
  if (!room) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Room not found.</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{room.name}</Text>
      <Text style={styles.row}>Building: {room.building}</Text>
      <Text style={styles.row}>Capacity: {room.capacity}</Text>
      <Text style={styles.row}>Equipment: {room.equipment}</Text>
      <Text style={styles.row}>Floor: {room.floor}</Text>

      <Text style={styles.paramLabel}>Route param</Text>
      <Text style={styles.paramValue}>
        roomId = {roomId}
      </Text>
      
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("BookingForm", {
            roomId: roomId,
          })
        }}
      >
        <Text style={styles.buttonText}>Book This Room
        </Text>
      </Pressable>
      <Pressable
        style={styles.back}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>Back to Rooms</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    maxWidth: 760,
    width: "100%",
    alignSelf: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 18,
  },
  row: {
    fontSize: 17,
    marginBottom: 8,
  },
  paramLabel: {
    fontWeight: "700",
    marginTop: 20,
  },
  paramValue: {
    backgroundColor: "#f1f1f1",
    padding: 12,
    marginTop: 6,
    borderRadius: 8,
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#222",
    borderRadius: 8,
    marginTop: 24,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  back: {
    alignSelf: "flex-start",
    backgroundColor: "#ffff",
    borderRadius: 8,
    marginTop: 24,
    paddingHorizontal: 14,
    paddingVertical: 10,
    color: "#3333",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
  },
  backText: {
    color: "black",
    fontWeight: "700",
  },
});
