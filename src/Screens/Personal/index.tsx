import React, { useEffect, useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import styles from './style';
import AppInput from '../../Components/global/input';
import AppSwitch from '../../Components/global/switch';
import { Profile } from '../../Models/profile.model';
// @ts-ignore 
import TeddyA from "../../../assets/svg/A.svg";


export function PersonalScreen({ navigation }: any) {

    useEffect(() => {
        navigation.setOptions({
            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: '#e91e63',
            },
            title: 'Edit your profile',
            headerTintColor: '#fff',
        })
    }, [navigation])
    const [personForm, setPersonForm] = useState<Profile>(
        {
            name: '',
            special_days_notify_active: false,
            birthday_notify_active: false
        }
    )

    const onEditPersonalInfo = () => {

    }
    return (
        <View style={styles.mainContainer}>
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
                    <Button color="#003153" title="submit" onPress={onEditPersonalInfo} />
                </View>
            </View>
        </View>
    )
}