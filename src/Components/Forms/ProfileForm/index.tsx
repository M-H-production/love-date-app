import { Formik } from "formik";
import React from "react";
import { ScrollView, View, Text, Button } from "react-native";
import profileSchema from "../../../Utils/schemas/profile.schema";
import AppInput from "../../global/input";
import AppSwitch from "../../global/switch";
import styles from "./style";
// @ts-ignore 
import TeddyA from "../../../../assets/svg/A.svg";
import { Profile } from "../../../Models/profile.model";
import TeddyImg from "../../global/teddy";

export function ProfileForm(props: { onSubmit: any, data?: Profile }) {
    return (
        <Formik
            initialValues={{
                name: props.data?.name || '',
                special_days_notify_active: props.data?.special_days_notify_active || false,
                birthday_notify_active: props.data?.birthday_notify_active || false,
            }}
            enableReinitialize={true}
            validationSchema={profileSchema}
            onSubmit={values => props.onSubmit(values)}
        >
            {({ handleChange, handleSubmit, values, setFieldValue, isValid }) => (
                <View style={styles.mainContainer}>
                    <View style={styles.personalContainer}>
                        <ScrollView>
                            <View style={styles.avatar}>
                                <TeddyImg name={values.name} />
                            </View>
                            <AppInput label='Enter your name' value={values.name} onChangeText={handleChange('name')} />

                            <Text style={styles.hint}>Hint : this info relate to your partner </Text>

                            <AppSwitch
                                label='notify special days'
                                value={values.special_days_notify_active}
                                onValueChange={(value) => setFieldValue('special_days_notify_active', value)} />

                            <AppSwitch label='notify partner birthday'
                                value={values.birthday_notify_active}
                                onValueChange={(value) => setFieldValue('birthday_notify_active', value)} />

                        </ScrollView>
                        <View>
                            <Button color="#003153" title="submit" onPress={() => handleSubmit()} disabled={!isValid} />
                        </View>
                    </View>
                </View>
            )
            }
        </Formik>

    )
}