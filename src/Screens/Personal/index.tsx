import React, { useEffect } from 'react';
import { ProfileForm } from '../../Components/Forms/ProfileForm';


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

    const onEditPersonalInfo = (values) => {
        console.log(values);
    }

    return (
        <ProfileForm onSubmit={onEditPersonalInfo} />
    )
}