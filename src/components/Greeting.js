import React from "react";
import {Text } from "react-native";
import PropTypes from "prop-types";

export default function Greeting(props){
    const {first_name, last_name} = props;
    return <Text> Hello {first_name} {last_name}</Text>;
}

// Greeting.defaultProps ={
//     first_name: "Jenerth",
//     last_name: "Rodriguez",
// };

Greeting.propTypes = {
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
};