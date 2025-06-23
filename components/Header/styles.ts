import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? 40 : 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
    gap: 10,
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    flex: 1,
  },
});

export default styles;
