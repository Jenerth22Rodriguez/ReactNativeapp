import React from "react";
import { View, Text, Button, SafeAreaView } from 'react-native';

export default function SettingsScreen(props){
    const { navigation } = props;

    const goToPage = (PageName) => {
        navigation.navigate(PageName);
    }

    return (
        <SafeAreaView>
            <Text>Estamos en Settings Screen</Text>
            <Text>Estamos en Settings Screen</Text>
            <Text>Estamos en Settings Screen</Text>
            <Text>Estamos en Settings Screen</Text>
            <Button onPress={() => goToPage("Home")} title="go back home" />
        </SafeAreaView>
    );
}
