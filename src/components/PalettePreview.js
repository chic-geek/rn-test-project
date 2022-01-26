import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";

export default function PalettePreview({ handlePress, colourPalette }) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>
        {colourPalette.paletteName}
      </Text>
      <FlatList
        style={styles.list}
        data={colourPalette.colours.slice(0, 4)}
        keyExtractor={(item) => item.colourName}
        renderItem={({ item }) => <View style={[styles.box, { backgroundColor: item.hexCode }]} />}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  box: {
    borderRadius: 50,
    height: 60,
    width: 60,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  list: {
    marginBottom: 20,
    flexDirection: 'row',
  }
});
