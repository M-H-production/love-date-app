import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, Image, Pressable, Modal } from 'react-native';
import styles from './style';
import { ImagesAssets } from '../../../assets/png';
import ConfirmModal from '../../Components/global/modal/confirm';
import { deletePartner } from '../../Services/home.service';
import Toast from 'react-native-toast-message';
import { getData, storeData } from '../../Utils/Storage';

export function SettingScreen({ navigation }: any) {
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [havePartner, setHavePartner] = useState<boolean>(false)



    useEffect(() => {
        getData('userData').then((userData: any) => {
            setHavePartner(userData.activePartner !== null)
        })

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




    const onDeletePartner = () => {
        deletePartner().then(
            () => {
                getData('userData').then((userData: any) => {
                    storeData('userData', { ...userData, activePartner: null }).then()
                    setHavePartner(false)
                    setModalVisible(false)
                    Toast.show({
                        type: 'success',
                        text1: 'partner Removed',
                    })
                    navigation.navigate('Home')
                })
            }
        )
    }

    return (
        <>
            <View style={styles.mainContainer}>
                <View style={styles.itemContainer}>
                    <Pressable style={styles.item} onPress={() => { navigation.navigate('Personal') }}>
                        <View style={styles.itemInfo}>
                            <Image source={ImagesAssets.personal} style={styles.itemInfo.icon} />
                            <Text style={styles.itemInfo.title}>Edit personal info</Text>
                        </View>
                        <Image source={ImagesAssets.angle} style={styles.angleIcon} />

                    </Pressable>
                    <Pressable style={styles.item} onPress={() => { navigation.navigate('Partner', { mode: havePartner ? 'edit' : 'add' }) }}>
                        <View style={styles.itemInfo}>
                            <Image source={ImagesAssets.partner} style={styles.itemInfo.icon} />
                            <Text style={styles.itemInfo.title}>{havePartner ? 'Edit' : 'Add'} partner info</Text>
                        </View>
                        <Image source={ImagesAssets.angle} style={styles.angleIcon} />
                    </Pressable>
                    {havePartner &&
                        <Pressable style={styles.item} onPress={() => setModalVisible(true)}>
                            <View style={styles.itemInfo}>
                                <Image source={ImagesAssets.removePartner} style={styles.itemInfo.icon} />
                                <Text style={styles.itemInfo.title}>Remove your partner</Text>
                            </View>
                            <Image source={ImagesAssets.angle} style={styles.angleIcon} />
                        </Pressable>
                    }
                    <Pressable style={styles.item} onPress={() => { navigation.navigate('AboutUs') }}>
                        <View style={styles.itemInfo}>
                            <Image source={ImagesAssets.aboutUs} style={styles.itemInfo.icon} />
                            <Text style={styles.itemInfo.title}>About us</Text>
                        </View>
                        <Image source={ImagesAssets.angle} style={styles.angleIcon} />
                    </Pressable>
                </View>

            </View>

            <ConfirmModal
                modalVisible={modalVisible}
                onSubmit={onDeletePartner}
                onClose={() => setModalVisible(false)}
                title="are you sure you want to delete your partner ?" />

        </>
    )
}