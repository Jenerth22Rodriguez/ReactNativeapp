import React from "react";
import {Text } from "react-native";
import PropTypes from "prop-types";

export default function Gretting(props){
    const {firstname, lastname} = props;
    return <Text> Hello {firstname} {lastname}</Text>;
}

// Gretting.defaultProps ={
//     firstname: "Jenerth",
//     lastname: "Rodriguez",
// };

Gretting.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
};