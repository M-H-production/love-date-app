
import React, { useEffect, useState } from 'react';
import { View, Text, Switch, Button, ScrollView } from 'react-native';
import styles from './style';
import { Steps } from '../../Components/global/steps';
import AppInput from '../../Components/global/input';
import AppSwitch from '../../Components/global/switch';
// @ts-ignore 
import TeddyA from "../../../assets/svg/A.svg";
import DatePicker from 'react-native-date-picker';
import { Profile } from '../../Models/profile.model';


export function OnboardingScreen({ navigation }: any) {
    const [personForm, setPersonForm] = useState<Profile>(
        {
            name: '',
            special_days_notify_active: false,
            birthday_notify_active: false
        }
    )
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
                backgroundColor: '#e91e63',
            },
            title: 'Create your profile',
            headerTintColor: '#fff',
        })
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
                            <AppInput label='Enter your name' value={personForm.name} onChangeText={(e) => { setPersonForm({ ...personForm, name: e }) }} />
                            <Text style={styles.hint}>Hint : this info relate to your partner </Text>
                            <AppSwitch label='notify special days' value={personForm.special_days_notify_active} onValueChange={(e) => { setPersonForm({ ...personForm, special_days_notify_active: e }) }} />
                            <AppSwitch label='notify partner birthday' value={personForm.birthday_notify_active} onValueChange={(e) => { setPersonForm({ ...personForm, birthday_notify_active: e }) }} />
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
                            <Button color="#003153" title="submit" onPress={() => navigation.navigate('Home')} />
                        </View>
                    </View>
                }
            </View>

        </>
    );
}