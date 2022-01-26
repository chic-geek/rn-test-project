import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ColourBox({ colourName, colourCode }) {
  const boxColour = {
    backgroundColor: colourCode
  }
  const textColour = {
    color: parseInt(colourCode.replace('#', ''), 16) > 0xffffff / 1.1
      ? 'black'
      : 'white'
  };
  return (
    <View style={[styles.box, boxColour]}>
      <Text style={[styles.boxText, textColour]}>
        {colourName} {colourCode}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

