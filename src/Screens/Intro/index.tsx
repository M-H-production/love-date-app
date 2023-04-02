
import React, { useEffect, useState } from 'react';
import { View, Text, Switch, Button, ScrollView } from 'react-native';
import styles from './style';
import { Steps } from '../../Components/global/steps';
import AppInput from '../../Components/global/input';
import AppSwitch from '../../Components/global/switch';
// @ts-ignore 
import TeddyA from "../../../assets/svg/A.svg";
import DatePicker from 'react-native-date-picker';
export function IntoScreen({ navigation }: any) {

    const steps: { title: string, index: number }[] = [
        { title: 'personal info', index: 1 },
        { title: 'partner info', index: 2 }
    ]

    const [activeStep, setActiveStep] = useState<number>(1)
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        navigation.setOptions({
            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: '#d696a7',
            },
            title: 'create your profile',
            headerTintColor: '#003153',
        }
        )
    }, [navigation])

    return (
        <>

            <View style={styles.mainContainer}>
                <Steps steps={steps} activeStep={activeStep} />

                {activeStep === 1 &&
                    <View style={styles.personalContainer}>
                        <ScrollView>
                            <View style={styles.avatar}>
                                <TeddyA width={80} height={80} />
                            </View>
                            <AppInput label='Enter your name' value='sample' onChangeText={() => { }} />
                            <Text style={styles.personalContainer.hint}>Hint : this info relate to your partner </Text>
                            <AppSwitch label='notify special days' value={true} onValueChange={() => { }} />
                            <AppSwitch label='notify partner birthday' value={true} onValueChange={() => { }} />
                        </ScrollView>
                        <View>
                            <Button color="#003153" title="submit" onPress={() => setActiveStep(2)} />
                        </View>
                    </View>
                }

                {activeStep === 2 &&
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
                            <Button color="#003153" title="submit" onPress={() => setActiveStep(2)} />
                        </View>
                    </View>
                }
            </View>

        </>
    );
}