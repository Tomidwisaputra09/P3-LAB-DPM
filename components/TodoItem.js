import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function TodoItem({ id, task, onDelete }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{task}</Text>
      <Button title="Delete" color="#ff5c5c" onPress={() => onDelete(id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 8,
    borderRadius: 5,
    elevation: 1,
  },
  text: {
    fontSize: 16,
  },
});
