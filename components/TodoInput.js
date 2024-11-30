import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function TodoInput({ onAddTodo }) {
  const [task, setTask] = useState("");

  const inputHandler = (enteredText) => setTask(enteredText);

  const addTaskHandler = () => {
    onAddTodo(task);
    setTask("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Enter a task" onChangeText={inputHandler} value={task} />
      <Button title="Add" onPress={addTaskHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flex: 1,
    marginRight: 8,
    padding: 8,
  },
});
