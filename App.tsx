import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import data from "./utils/mock/data";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Header> Space </Header>
      <FlatList data={data} renderItem={({ item }) => <Card item={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 24,
  },
});
