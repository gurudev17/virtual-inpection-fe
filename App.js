import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import LoginScreen from "./src/screens/LoginScreen";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen></LoginScreen>
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});