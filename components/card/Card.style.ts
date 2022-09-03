import { StyleSheet } from "react-native";

export const cardStyle = StyleSheet.create({
  cardContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#fff",
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "black",
    shadowOpacity: 0.4,
  },
  card: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 40,
    resizeMode: "center",
  },
  cardContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 12,
  },
  cardHeader: {
    fontWeight: "bold",
  },
  cardDescription: {
    marginTop: 16,
  },
});
