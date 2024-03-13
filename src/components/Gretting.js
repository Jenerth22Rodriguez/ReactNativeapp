import React from "react";
import {Text } from "react-native";

export default function Gretting(props){
    const {name} = props;
    return <Text> Hello {name}</Text>;
}