
import React, { useEffect, useState } from 'react';
import { Text, Button, ScrollView, View } from 'react-native';
import styles from './style';
import AppInput from '../../Components/global/input';
import DatePicker from 'react-native-date-picker';
// @ts-ignore 
import TeddyA from "../../../assets/svg/A.svg";

export function PartnerScreen({ navigation }: any) {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        navigation.setOptions({
            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: '#e91e63',
            },
            title: 'Edit your partner info',
            headerTintColor: '#fff',
        })
    }, [navigation])
    return (
        <View style={styles.mainContainer}>
            <View style={styles.partnerContainer}>
                <ScrollView>
                    <View style={styles.avatar}>
                        <TeddyA width={80} height={80} />
                    </View>
                    <AppInput label='Enter your partner name' value='sample' onChangeText={() => { }} />
                    <Text style={styles.dateLabel}>Enter your first Date</Text>
                    <View style={styles.dateContainer}>
                        <DatePicker
                            androidVariant="nativeAndroid"
                            mode="date"
                            textColor="#003153"
                            date={date}
                            onDateChange={setDate} />
                    </View>

                    <Text style={styles.dateLabel}>Enter your partner`s birthday</Text>
                    <View style={styles.dateContainer}>
                        <DatePicker
                            androidVariant="nativeAndroid"
                            mode="date"
                            textColor="#003153"
                            date={date}
                            onDateChange={setDate} />
                    </View>
                </ScrollView>

                <View>
                    <Button color="#003153" title="submit" onPress={() => navigation.navigate('Home')} />
                </View>
            </View>
        </View>
    )
}