
import React, { useCallback, useEffect, useState } from 'react';
import { PartnerForm } from '../../Components/Forms/PartnerForm';
import { createPartner, editPartner } from '../../Services/home.service';
import Toast from 'react-native-toast-message';
import { getData, storeData } from '../../Utils/Storage';
import { partner } from '../../Models/partner.model';
import { Text, View } from 'react-native'

export function PartnerScreen({ navigation, route }: any) {

    const [partner, setPartner] = useState<partner | null>(null)
    const { params } = route;

    useEffect(() => {
        getPartnerData();
    }, [])


    const getPartnerData = useCallback(async () => {

        const userData = await getData('userData')
        console.log(userData.activePartner);

        setPartner(userData.activePartner)

    }, [setPartner])

    const onEditPartner = async (values) => {

        const partner = params.mode === 'edit' ? await editPartner(values) : await createPartner(values)
        if (partner) {
            const userData = await getData('userData')
            await storeData('userData', { ...userData, activePartner: partner.data })
            await navigation.navigate('Home')

            Toast.show({
                type: 'success',
                text1: params.mode === 'edit' ? 'partner Modified' : 'partner Created',
            })
        }
    }

    useEffect(() => {
        navigation.setOptions({
            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: '#e91e63',
            },
            title: `${params.mode === 'edit' ? 'Edit' : 'Add'} your partner info`,
            headerTintColor: '#fff',
        })
    }, [navigation])

    return (
        <PartnerForm onSubmit={onEditPartner} data={partner!} />

    )
}