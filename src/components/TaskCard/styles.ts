import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFF",
        borderRadius: 12,
        width: "100%",
        padding: 20,
        gap: 15,
        borderWidth: 2,
        borderColor: "#F0F0F0",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    task: {
        fontSize: 15,
        fontWeight: "600",
        color: "#111",
        flex: 1,
        flexWrap: "wrap",
        marginRight: 10,
    },
    des: {
        fontSize: 13,
        color: "#6B7280",
    },
    price: {
        fontSize: 14,
        fontWeight: "600",
        color: "#111",
    },
    badge: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 4
        
    },
    dot: {
        width: 7,
        height: 7,
        borderRadius: 4,
    },
    badgeText: {
        fontSize: 12,
        fontWeight: "500",
    },
})