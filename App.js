import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TodoScreen from "./screens/TodoScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TodoScreen" component={TodoScreen} options={{ title: "To-Do List" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
