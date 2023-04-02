import React from "react";
import {
    View,
    Text,
} from "react-native";
import styles from "./style";

export function Steps(props: { steps: { title: string, index: number }[], activeStep: number }) {
    return (

        <View style={styles.mainContainer}>
            {props.steps && props.steps.map(((step) => (
                <View style={styles.stepContainer} key={step.index}>
                    <View style={step.index === props.activeStep ? styles.stepCircle : step.index > props.activeStep ? styles.stepCircleNotActive : styles.stepCircleCheck}>
                        <Text style={step.index > props.activeStep ? styles.stepCircleNotActiveText : styles.stepCircleText}>{step.index >= props.activeStep ? step.index : '✓'}</Text>
                    </View>
                    <Text style={styles.title}>{step.title}</Text>
                </View>
            )
            ))}
        </View>
    )
}