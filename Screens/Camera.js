import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { ActivityIndicator } from 'react-native';
import { usePrizeList } from '../hooks/usePrizeList';
import { usePrize } from '../hooks/usePrize';

export default function Camera() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const prizeListHook = usePrizeList();
    const prizeHook = usePrize();

    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, [])

    const handleBarCodeScanned = ({data}) => {
        
        const prizeData = JSON.parse(data)
        console.log(prizeData)
        prizeHook.addPrize(prizeData)
        setScanned(true)
    }

    const closeModal = () => {
        // prizeListHook.addPrize("sample prize")
        // prizeHook.addPrize("sample prize")
        setScanned(false)
    }

    

    if (hasPermission === null || hasPermission === false) {
        return (
            <View style={[styles.container, {justifyContent: 'center'}]}>
                <ActivityIndicator size="large" color={"#000"} />
            </View>
        )
    }

    return (
        <View style={[styles.container, {justifyContent: 'flex-end'}]}>
            <BarCodeScanner 
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={styles.camera}
            />

            {
                scanned && 
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={scanned}
                >
                    <TouchableOpacity style={styles.modalBackdrop} onPress={() => closeModal()}>
                        <View style={{width: 250, height: 400, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{color: '#fff'}}>Ticket Prize</Text>
                        </View>
                    </TouchableOpacity>
                </Modal>
            }
        </View>
    );
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#1A222F',
        },
        camera: {
            width: '100%', 
            height: '100%', 
            justifyContent: 'center', 
            alignItems: 'center'
        },
        modalBackdrop: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
        },
    });