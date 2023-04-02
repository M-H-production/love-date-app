import React from "react";
import {
    View,
    Text,
    KeyboardType,
    Switch
} from "react-native";
import styles from "./style";


interface inputProps {
    style?: any;
    value: boolean;
    onValueChange: any;
    label: string
}

function AppSwitch(props: inputProps): JSX.Element {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.label}>{props.label}</Text>
            <Switch
                trackColor={{ false: '#b0afaf', true: '#77c2bb' }}
                thumbColor={props.value ? '#009688' : '#f1f1f1'}
                ios_backgroundColor="#3F704D"
                onValueChange={(isActive: boolean) => props.onValueChange(isActive)}
                value={props.value}
                style={{ ...props.style }}
            />
        </View>
    )

}

export default AppSwitch
