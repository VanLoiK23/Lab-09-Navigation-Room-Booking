import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { bookings } from "../data/bookings";

export function MyBookingsScreen() {
  return (
    <FlatList
      data={bookings}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.content}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.title}>My Bookings</Text>
          <Text style={styles.subtitle}>
            Week 9 uses local sample data so we can focus on navigation.
          </Text>
        </View>
      }
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.roomName}>{item.roomName}</Text>
          <Text>Slot: {item.slot}</Text>
          <Text>Purpose: {item.purpose}</Text>
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
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },
});
