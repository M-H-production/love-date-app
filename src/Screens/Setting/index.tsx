import React, { useEffect } from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import styles from './style';
import { ImagesAssets } from '../../../assets/png';

export function SettingScreen({ navigation }: any) {

    useEffect(() => {
        navigation.setOptions({
            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: '#e91e63',
            },
            title: 'Setting',
            headerTintColor: '#fff',
        }
        )
    }, [navigation])


    return (
        <View style={styles.mainContainer}>
            <View style={styles.itemContainer}>
                <Pressable style={styles.item} onPress={() => { navigation.navigate('Personal') }}>
                    <View style={styles.itemInfo}>
                        <Image source={ImagesAssets.personal} style={styles.itemInfo.icon} />
                        <Text style={styles.itemInfo.title}>Edit personal info</Text>
                    </View>
                    <Image source={ImagesAssets.angle} style={styles.angleIcon} />

                </Pressable>
                <Pressable style={styles.item} onPress={() => { navigation.navigate('Partner') }}>
                    <View style={styles.itemInfo}>
                        <Image source={ImagesAssets.partner} style={styles.itemInfo.icon} />
                        <Text style={styles.itemInfo.title}>Edit partner info</Text>
                    </View>
                    <Image source={ImagesAssets.angle} style={styles.angleIcon} />
                </Pressable>
                <View style={styles.item}>
                    <View style={styles.itemInfo}>
                        <Image source={ImagesAssets.removePartner} style={styles.itemInfo.icon} />
                        <Text style={styles.itemInfo.title}>Remove your partner</Text>
                    </View>
                    <Image source={ImagesAssets.angle} style={styles.angleIcon} />
                </View>
                <Pressable style={styles.item} onPress={() => { navigation.navigate('AboutUs') }}>
                    <View style={styles.itemInfo}>
                        <Image source={ImagesAssets.aboutUs} style={styles.itemInfo.icon} />
                        <Text style={styles.itemInfo.title}>About us</Text>
                    </View>
                    <Image source={ImagesAssets.angle} style={styles.angleIcon} />
                </Pressable>
            </View>

        </View>
    )
}