import { Formik } from "formik";
import React, { useEffect } from "react";
import DatePicker from "react-native-date-picker";
import { Button, ScrollView, View, Text, Image } from "react-native";
import partnerSchema from "../../../Utils/schemas/partner.schema";
import AppInput from "../../global/input";
// @ts-ignore 
import TeddyA from "../../../../assets/svg/A.svg";
import styles from "./style";
import { partner } from "../../../Models/partner.model";
import { ImagesAssets } from "../../../../assets/png";
import TeddyImg from "../../global/teddy";

export function PartnerForm(props: { onSubmit: any, data?: partner }) {
    const { data, onSubmit } = props
    useEffect(() => {

        console.log('inner', props.data);
    }, [props])
    return (
        <Formik
            initialValues={{
                name: data?.name || '',
                birthday: data && new Date(data?.birthday) || new Date(),
                first_date: data && new Date(data?.first_date) || new Date(),
            }}
            enableReinitialize={true}
            validationSchema={partnerSchema}
            onSubmit={values => props.onSubmit(values)}>
            {({ handleChange, handleSubmit, values, isValid, setFieldValue }) => (
                <View style={styles.mainContainer}>
                    <View style={styles.partnerContainer}>
                        <ScrollView>
                            <View style={styles.avatar}>
                                <TeddyImg name={values.name} />
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
                                    onDateChange={(e) => setFieldValue('first_date', e)} />
                            </View>

                            <Text style={styles.dateLabel}>Enter your partner`s birthday</Text>
                            <View style={styles.dateContainer}>
                                <DatePicker
                                    androidVariant="nativeAndroid"
                                    mode="date"
                                    textColor="#003153"
                                    date={values.birthday}
                                    maximumDate={new Date()}
                                    onDateChange={(e) => setFieldValue('birthday', e)} />
                            </View>
                        </ScrollView>

                        <View>
                            <Button color="#003153" title="Submit" onPress={() => handleSubmit()} disabled={!isValid} />
                        </View>
                    </View>
                </View>
            )}
        </Formik>
    )
}