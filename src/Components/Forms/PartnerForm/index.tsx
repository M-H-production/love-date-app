import { Formik } from "formik";
import React from "react";
import DatePicker from "react-native-date-picker";
import { Button, ScrollView, View, Text } from "react-native";
import partnerSchema from "../../../Utils/schemas/partner.schema";
import AppInput from "../../global/input";
// @ts-ignore 
import TeddyA from "../../../../assets/svg/A.svg";
import styles from "./style";
import { partner } from "../../../Models/partner.model";

export function PartnerForm(props: { onSubmit: any, data?: partner }) {
    return (
        <Formik
            initialValues={{
                name: props.data?.name || '',
                birthday: props.data?.birthday || new Date(),
                first_date: props.data?.first_date || new Date(),
            }}
            validationSchema={partnerSchema}
            onSubmit={values => props.onSubmit(values)}
        >
            {({ handleChange, handleSubmit, values }) => (
                <View style={styles.mainContainer}>
                    <View style={styles.partnerContainer}>
                        <ScrollView>
                            <View style={styles.avatar}>
                                <TeddyA width={80} height={80} />
                            </View>
                            <AppInput label='Enter your partner name' value={values.name} onChangeText={handleChange('name')} />
                            <Text style={styles.dateLabel}>Enter your first Date</Text>
                            <View style={styles.dateContainer}>
                                <DatePicker
                                    androidVariant="nativeAndroid"
                                    mode="date"
                                    textColor="#003153"
                                    date={values.first_date}
                                    maximumDate={new Date()}
                                    onDateChange={() => handleChange('first_date')} />
                            </View>

                            <Text style={styles.dateLabel}>Enter your partner`s birthday</Text>
                            <View style={styles.dateContainer}>
                                <DatePicker
                                    androidVariant="nativeAndroid"
                                    mode="date"
                                    textColor="#003153"
                                    date={values.birthday}
                                    maximumDate={new Date()}
                                    onDateChange={() => handleChange('birthday')} />
                            </View>
                        </ScrollView>

                        <View>
                            <Button color="#003153" title="Submit" onPress={() => handleSubmit()} />
                        </View>
                    </View>
                </View>
            )}
        </Formik>
    )
}