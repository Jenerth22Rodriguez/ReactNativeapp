import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Gretting from './src/components/Gretting';

export default function App() {
  return (
    <View style={styles.container}>
    <Text>Creating a ReactNative App!</Text>
    <Gretting />
    {/* <Gretting name = "Carolina Falcon" >*/}    
   {/*<Gretting name = "Jenerth Rodriguez"/> */}                            
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
