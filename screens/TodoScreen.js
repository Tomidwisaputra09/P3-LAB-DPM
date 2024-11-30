import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";

export default function TodoScreen() {
  const [todos, setTodos] = useState([]);

  // Lifecycle: Fetch saved todos on mount
  useEffect(() => {
    // Simulate fetching saved data
    const fetchTodos = async () => {
      const savedTodos = [
        { id: "1", task: "Contoh List 1" },
        { id: "2", task: "Contoh List 2" },
      ];
      setTodos(savedTodos);
    };

    fetchTodos();
  }, []);

  const addTodoHandler = (task) => {
    if (!task.trim()) {
      Alert.alert("Error", "Task cannot be empty!");
      return;
    }

    setTodos((prevTodos) => [{ id: Date.now().toString(), task }, ...prevTodos]);
  };

  const deleteTodoHandler = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <TodoInput onAddTodo={addTodoHandler} />
      <FlatList data={todos} keyExtractor={(item) => item.id} renderItem={({ item }) => <TodoItem id={item.id} task={item.task} onDelete={deleteTodoHandler} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
});
