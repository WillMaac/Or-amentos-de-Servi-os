import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 88,
  },
  title: {
    color: "#6A46EB",
    fontSize: 18,
    lineHeight: 25,
    fontWeight: 700
  },
  subTitle: {
    color: "#676767",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 600,
  },
  divider: {
    height: 1,
    backgroundColor: "#D1D5DB",
    width: "100%",
  },
});