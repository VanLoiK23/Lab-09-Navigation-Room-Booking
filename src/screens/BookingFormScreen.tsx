import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    TextInput
} from "react-native";

import { rooms } from "../data/rooms";
import type { RoomsStackParamList } from "../navigation/types";
import { useState } from "react";


type Props = NativeStackScreenProps<
    RoomsStackParamList,
    "BookingForm"
>;

export function BookingFormScreen({
    route,
    navigation,
}: Props) {
    const { roomId } = route.params;

    const room = rooms.find(
        (item) => item.id === roomId
    );

    const [purpose, setPurpose] = useState("");

    const saveBooking = () => {
        if (!purpose) {
            window.alert("Please enter purpose.");
            return;
        }

        window.alert("Booking prepared for " + room?.name)
        setPurpose("")
    }

    if (!room) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Room not found.</Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Booking form</Text>
            <Text style={styles.title}>Room: {room.name}</Text>
            <Text style={styles.row}>Building: {room.building}</Text>
            <Text style={styles.row}>Floor: {room.floor}</Text>
            <Text style={styles.row}>Purpose</Text>
            <TextInput
                style={styles.input}
                value={purpose}
                onChangeText={(text) => {
                    setPurpose(text);
                }}
                placeholder="Booking purpose"
            />
            <Pressable
                style={styles.button}
                onPress={saveBooking}
            >
                <Text style={styles.buttonText}>Confirm Booking</Text>
            </Pressable>
            <Pressable
                style={styles.back}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.backText}>Back</Text>
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
    header: {
        fontSize: 50,
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
    input: {
        backgroundColor: "#f8fafc",
        borderWidth: 1,
        borderColor: "#e2e8f0",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 12,
        marginBottom: 16,
        fontSize: 15,
        color: "#0f172a",
    },
});
