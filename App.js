import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from "./src/components/LoginForm";  //bringing the LoginForm feature to App.js

export default function App() {
  return (
    <View style={styles.container}>
    <Text>Creating a IOS app using ReactNative!</Text>
    <Text>This is another text of ReactNative!</Text>
     
     <LoginForm />                             
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
