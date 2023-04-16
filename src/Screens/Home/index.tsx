
import React, { useCallback, useEffect, useState } from 'react';
import { Pressable, Text, View, Image } from 'react-native';
// @ts-ignore 
import SettingIcon from "../../../assets/svg/settings.svg";
// @ts-ignore 
import PicFrameIcon from "../../../assets/svg/pic-frame.svg";
import styles from './style';
// @ts-ignore 
import TeddyNumber from "../../../assets/svg/1.svg";
import { getData } from '../../Utils/Storage';
import { Profile } from '../../Models/profile.model';
import { partner } from '../../Models/partner.model';
import TeddyImg from '../../Components/global/teddy';
import { useIsFocused } from '@react-navigation/native';
import { fullDateConvertor, getDayDiff, getFullOfDateUntilNow } from '../../Utils/Helper/date.convert';
import { ImagesAssets } from '../../../assets/png';
import { CapitalFirstChar } from '../../Utils/Helper/capital';

export function HomeScreen({ navigation }: any) {

    const [userData, setUserData] = useState<{ profile: Profile, activePartner: partner } | null>(null);
    const isFocused = useIsFocused();
    const getuserData = useCallback(async () => {
        const userData = await getData('userData')

        setUserData(userData);

    }, [setUserData])


    useEffect(() => {
        getuserData()
        navigation.setOptions({
            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: '#d696a7',
            },
            headerTitle: () =>
                <Pressable onPress={() => navigation.navigate('Setting')}>
                    <SettingIcon width={35} height={35} />
                </Pressable >

        })
    }, [navigation, isFocused])

    return (


        <View style={styles.mainContainer}>
            {userData?.activePartner !== null ?
                (
                    <>
                        <View>
                            <PicFrameIcon width={320} height={320} />
                            <Text style={styles.titlePic}>{CapitalFirstChar(userData?.profile.name)} & {CapitalFirstChar(userData?.activePartner.name)}</Text>
                            <View style={styles.teddy}>
                                <TeddyImg name={userData?.profile.name!} />
                                <TeddyImg name={userData?.activePartner.name!} />
                            </View>
                        </View>
                        <View style={styles.DateContainer}>
                            <Text style={[styles.DateContainer.label, styles.DateContainer.firstDate]}>{fullDateConvertor(userData?.activePartner.first_date!)}</Text>
                            <Text style={styles.DateContainer.label}> You have been together for : {getDayDiff(userData?.activePartner.first_date!)} days</Text>
                            <Text style={styles.DateContainer.label}> In other words : {getFullOfDateUntilNow(userData?.activePartner.first_date!)}</Text>
                            <View style={{ marginTop: 10 }}>
                                <TeddyNumber width={100} height={100} />
                            </View>

                        </View>
                    </>
                ) :
                (
                    <View style={styles.AddPartner}>
                        <Image source={ImagesAssets.teddy.CreatePartner} style={styles.AddPartner.img} />
                        <Text style={styles.AddPartner.title}>For using app you must add your partner</Text>
                        <Pressable style={styles.partnerButton} onPress={() => navigation.navigate('Partner', { mode: 'add' })}>
                            <Text style={styles.partnerButton.text} >Add your partner</Text>
                        </Pressable>
                    </View>
                )

            }
        </View>

    );
}