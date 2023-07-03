import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    Alert
  } from "react-native";

export default LoginScreen =()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    handleClick = () => {
        Alert.alert('Data');
    }

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/logo.png')} /> 
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            onChangeText={(email) => setEmail(email)}
          /> 
        </View> 
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          /> 
        </View> 
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text> 
        </TouchableOpacity> 
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={() => handleClick(this)}>LOGIN</Text> 
        </TouchableOpacity> 
      </View> 
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      marginBottom: 20,
      width : 200
    },
    inputView: {
      backgroundColor: "#3CB371",
      borderRadius: 30,
      width: 200,
      height: 50,
      marginBottom: 20,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
      color : "#1E90FF"
    },
    loginBtn: {
      width: 200,
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 15,
      backgroundColor: "#1E90FF",
    },
  });
