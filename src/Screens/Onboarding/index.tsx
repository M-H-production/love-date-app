
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styles from './style';
import { Steps } from '../../Components/global/steps';
import { ProfileForm } from '../../Components/Forms/ProfileForm';
import { PartnerForm } from '../../Components/Forms/PartnerForm';
import TeddyImg from '../../Components/global/teddy';
import { createPartner, createProfile } from '../../Services/home.service';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Profile } from '../../Models/profile.model';
import { partner } from '../../Models/partner.model';
import { getData, storeData } from '../../Utils/Storage';


export function OnboardingScreen({ navigation }: any) {

    const steps: { title: string, index: number }[] = [
        { title: 'personal info', index: 1 },
        { title: 'partner info', index: 2 }
    ]

    const [activeStep, setActiveStep] = useState<number>(1)

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

    const onSubmitPersonalForm = (values: Profile) => {

        createProfile(values).then(
            async (profile) => {
                const userData = await getData('userData')
                await storeData('userData', { ...userData, profile: profile.data })
                Toast.show({
                    type: 'success',
                    text1: 'profile created',
                })
                setActiveStep(2)
            }
        )
    }
    const onSubmitPartnerForm = (values: partner) => {
        createPartner(values).then(
            async (partner) => {
                const userData = await getData('userData')
                await storeData('userData', { ...userData, activePartner: partner.data })
                Toast.show({
                    type: 'success',
                    text1: 'partner created',
                })
                navigation.navigate('Home')
            }
        )
    }

    return (
        <>

            <View style={styles.mainContainer}>
                <Steps steps={steps} activeStep={activeStep} />

                {activeStep === 1 &&
                    <ProfileForm onSubmit={onSubmitPersonalForm} />
                }

                {activeStep === 2 &&
                    <PartnerForm onSubmit={onSubmitPartnerForm} />
                }
            </View>

        </>
    );
}