import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginVertical: 30,
    gap: 10,
},
searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 54,
    gap: 8,
},
searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#333",
},
filterButton: {
    width: 54,
    height: 54,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
},
});
