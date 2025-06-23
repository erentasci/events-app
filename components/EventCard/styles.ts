import { StyleSheet, useWindowDimensions } from "react-native";

const { width, height } = useWindowDimensions();

const styles = StyleSheet.create({
  container: {
    width: width / 1.2,
    height: height / 3,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#000",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 240,
  },
  cardDetails: {
    position: "absolute",
    bottom: 15,
    right: 20,
    flexDirection: "column",
    alignItems: "flex-end",
    rowGap: 4,
  },
  location: { fontSize: 16, color: "#fff" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  date: { fontSize: 16, color: "#fff" },
});

export default styles;
