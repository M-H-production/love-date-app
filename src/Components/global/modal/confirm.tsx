
import React, { useState } from 'react';
import { Modal, Text, Pressable, View } from 'react-native';
import styles from './style';

export function ConfirmModal(props: {
    title: string,
    modalVisible: boolean,
    onClose: any,
    onSubmit: any,
    cancelText?: string,
    confrimText?: string
}) {

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={props.onClose}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{props.title}</Text>
                        <View style={styles.buttonContainer}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={props.onClose}>
                                <Text style={styles.textStyle}>{props.cancelText || 'cancel'}</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonOpen]}
                                onPress={props.onSubmit}>
                                <Text style={styles.textStyle}>{props.confrimText || 'confirm'}</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

        </View >
    );
}





export default ConfirmModal;