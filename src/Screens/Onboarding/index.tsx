
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styles from './style';
import { Steps } from '../../Components/global/steps';
import { ProfileForm } from '../../Components/Forms/ProfileForm';
import { PartnerForm } from '../../Components/Forms/PartnerForm';
import TeddyImg from '../../Components/global/teddy';
import { createProfile, getProfile } from '../../Services/home.service';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Profile } from '../../Models/profile.model';


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
        console.log(values);

        createProfile(values).then(
            () => {
                Toast.show({
                    type: 'success',
                    text1: 'profile created',
                })
                setActiveStep(2)
            }
        )
    }
    const onSubmitPartnerForm = () => {
        navigation.navigate('Setting')
    }

    return (
        <>

            <View style={styles.mainContainer}>
                <TeddyImg />
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