
import React, { useEffect } from 'react';
import { PartnerForm } from '../../Components/Forms/PartnerForm';

export function PartnerScreen({ navigation }: any) {
    const editPartner = (values) => {
        console.log(values)
    }

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
        <PartnerForm onSubmit={editPartner} />
    )
}