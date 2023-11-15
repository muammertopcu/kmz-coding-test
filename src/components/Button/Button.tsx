import React, {ReactElement} from "react";
import {Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import styles from "./Button.styles";

interface ButtonProps extends TouchableOpacityProps{
    text: string;
    onPress: TouchableOpacityProps['onPress'];
}

function Button({text, onPress}: ButtonProps): ReactElement {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

export default Button;