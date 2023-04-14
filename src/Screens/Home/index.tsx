
import React, { useCallback, useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
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

export function HomeScreen({ navigation }: any) {

    const [userData, setUserData] = useState<{ profile: Profile, activePartner: partner } | null>(null);
    const isFocused = useIsFocused();
    const getuserData = useCallback(async () => {
        const userData = await getData('userData')
        console.log(userData);

        setUserData(userData);

    }, [setUserData])


    useEffect(() => {
        console.log('test');

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
        <>
            <View style={styles.mainContainer}>
                <View>

                    <PicFrameIcon />
                    <Text style={styles.titlePic}>{userData?.profile.name} & {userData?.activePartner.name}</Text>
                    <View style={styles.teddy}>
                        <TeddyImg name={userData?.profile.name!} />
                        <TeddyImg name={userData?.activePartner.name!} />

                    </View>
                </View>
                <View style={styles.DateContainer}>
                    <Text style={[styles.DateContainer.label, styles.DateContainer.firstDate]}>{fullDateConvertor(userData?.activePartner.first_date!)}</Text>
                    <Text style={styles.DateContainer.label}> you have been together for : {getDayDiff(userData?.activePartner.first_date!)} days</Text>
                    <Text style={styles.DateContainer.label}> in other words : {getFullOfDateUntilNow(userData?.activePartner.first_date!)}</Text>
                    <TeddyNumber width={100} height={100} />
                </View>
            </View>

        </>
    );
}