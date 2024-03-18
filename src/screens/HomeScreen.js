import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

export default function HomeScreen(props) {
    const { navigation } = props;

    const goToPage = () => {
        navigation.navigate("Settings");
    };

    return (
        <SafeAreaView>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Button onPress={goToPage} title="go back setting" />
        </SafeAreaView>
    );
}
