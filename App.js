import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './src/components/Greeting';

export default function App() {
  return (
    <NavigationContainer>
      
    <View style={styles.container}>
    <Text>Creating a ReactNative App!</Text>
    {/* <Greeting /> */}
    <Greeting first_name ='Jenerth' last_name='Rodriguez'/>                            
    </View>

    </NavigationContainer>
    
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
