
import React, { useCallback, useEffect } from 'react';
import { Button, Pressable, Text, View } from 'react-native';
// @ts-ignore 
import SettingIcon from "../../../assets/svg/settings.svg";
// @ts-ignore 
import PicFrameIcon from "../../../assets/svg/pic-frame.svg";
import styles from './style';
import { getProfile } from '../../Services/home.service';
// @ts-ignore 
import TeddyA from "../../../assets/svg/A.svg";
// @ts-ignore 
import TeddyM from "../../../assets/svg/M.svg";
// @ts-ignore 
import TeddyNumber from "../../../assets/svg/1.svg";

export function HomeScreen({ navigation }: any) {
    useEffect(() => {
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
    }, [navigation])

    return (
        <>
            <View style={styles.mainContainer}>
                <View>

                    <PicFrameIcon />
                    <Text style={styles.titlePic}>ashly & mike</Text>
                    <View style={styles.teddy}>
                        <TeddyA width={100} height={100} />
                        <TeddyM width={100} height={100} />

                    </View>
                </View>
                <View style={styles.DateContainer}>
                    <Text style={{ textAlign: 'center', fontSize: 18, padding: 2 }}>March 31, 2022</Text>
                    <Text style={{ textAlign: 'center', fontSize: 16, padding: 2 }}> you have been together for : 365 days</Text>
                    <Text style={{ textAlign: 'center', fontSize: 16, padding: 2 }}> in other words : 12 month or 48 weeks or 365 days</Text>
                    <TeddyNumber width={100} height={100} />
                </View>
            </View>

        </>
    );
}