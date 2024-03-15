import React from "react";
import { View, Text, Button } from 'react-native';

export default function SettingsScreen(props){
    const { navigation } = props;

    const goToPage = (PageName) => {
        navigation.navigate(PageName);
    }

    return (
        <View>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Button onPress={() => goToPage("Home")} title="go back home" />
        </View>
    );
}
