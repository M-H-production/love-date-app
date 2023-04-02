import React from "react";
import {
    View,
    Text,
    TextInput,
    KeyboardType
} from "react-native";
import styles from "./style";


interface inputProps {
    style?: any;
    value: string;
    onChangeText: any;
    label: string
    keyboardType?: KeyboardType
}

function AppInput(props: inputProps): JSX.Element {
    return (
        <View
            style={styles.mainContainer}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                editable
                keyboardType={props.keyboardType}
                numberOfLines={1}
                onChangeText={text => props.onChangeText(text)}
                value={props.value}
                style={{ padding: 10, color: '#333', width: '100%', ...props.style }}
            />
        </View>
    )

}

export default AppInput
