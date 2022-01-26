import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ColourBox from "../components/ColourBox";

export default function ColourPalette({ route }) {
  const { colours, paletteName } = route.params;
  return (
    <FlatList
      style={styles.container}
      data={colours}
      renderItem={({ item }) => <ColourBox colourName={item.colorName} colourCode={item.hexCode} />}
      keyExtractor={(item, idx) => `${item.colorName}_${item.hexCode}_${idx}`}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 25,
    backgroundColor: '#fff',
  },
  listHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
