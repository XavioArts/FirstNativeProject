import React from "react";
import { Text } from "react-native";


const AppText = (props)=> {

    const getFontSize = () => {
        if (props.large) {
            return 35;
        }
        if (props.small) {
            return 15;
        }
        return 25;
    };

    return <Text style={{fontSize: getFontSize(), ...props.style}} >{props.children}</Text>
}

export default AppText