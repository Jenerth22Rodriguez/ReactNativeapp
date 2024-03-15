import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen(props) {
    const { navigation } = props;

    const goToPage = () => {
        navigation.navigate("Settings");
    };

    return (
        <View>
            <Text> 
                Estamos en HomeScreen
            </Text>
            <Button onPress={goToPage} title="go back home" />
        </View>
    );
}
