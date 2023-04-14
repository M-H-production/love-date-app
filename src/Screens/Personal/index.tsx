import React, { useCallback, useEffect, useState } from 'react';
import { ProfileForm } from '../../Components/Forms/ProfileForm';
import { getData, storeData } from '../../Utils/Storage';
import { editProfile } from '../../Services/home.service';
import Toast from 'react-native-toast-message';
import { Profile } from '../../Models/profile.model';


export function PersonalScreen({ navigation }: any) {

    const [personal, setPesonal] = useState<Profile | null>(null)


    const getPersonalData = useCallback(async () => {
        const userData = await getData('userData')
        console.log('profile', userData.profile);
        setPesonal(userData.profile)

    }, [setPesonal])

    useEffect(() => {
        getPersonalData()
        navigation.setOptions({
            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: '#e91e63',
            },
            title: 'Edit your profile',
            headerTintColor: '#fff',
        })
    }, [navigation])

    const onEditPersonalInfo = async (values) => {
        console.log(values);
        const profile = await editProfile(values)
        console.log(profile);
        const userData = await getData('userData')
        await storeData('userData', { ...userData, profile: profile.data })

        Toast.show({
            type: 'success',
            text1: 'profile Modified',
        })
        navigation.navigate('Home')
    }

    return (
        <ProfileForm onSubmit={onEditPersonalInfo} data={personal!} />
    )
}