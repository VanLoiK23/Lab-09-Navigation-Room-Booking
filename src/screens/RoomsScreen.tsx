import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { rooms } from "../data/rooms";
import type { RoomsStackParamList } from "../navigation/types";


type Props = NativeStackScreenProps<
  RoomsStackParamList,
  "Rooms"
>;

export function RoomsScreen({ navigation }: Props) {
  return (
    <FlatList
      data={rooms}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.content}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.title}>Room Explorer</Text>
          <Text style={styles.subtitle}>
            Starter project: complete navigation step by step.
          </Text>
        </View>
      }
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.roomName}>{item.name}</Text>
          <Text>Building: {item.building}</Text>
          <Text>Capacity: {item.capacity}</Text>
          <Text>Floor: {item.floor}</Text>

          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate("RoomDetail", {
                roomId: item.id,
              });
            }}
          >
            <Text style={styles.buttonText}>View Details</Text>
          </Pressable>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    gap: 12,
    maxWidth: 760,
    width: "100%",
    alignSelf: "center",
  },
  header: {
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 6,
    color: "#555",
  },
  card: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 16,
  },
  roomName: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 6,
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#222",
    borderRadius: 8,
    marginTop: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
  },
});
