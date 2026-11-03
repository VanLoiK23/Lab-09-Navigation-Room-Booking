import {
    StyleSheet,
    View,
    Text
} from "react-native";

const AboutScreen = () => {
    return (
        <View style={styles.content}>
            <Text style={styles.header}>Room Booking App</Text>
            <Text style={styles.title}>Week 9 — React Native Navigation</Text>
        </View>
    )
}

export default AboutScreen;

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
        fontSize: 40,
        fontWeight: "700",
    },
    title: {
        fontSize: 28,
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