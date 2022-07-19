import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { ActivityIndicator } from 'react-native';
import { useRecoilState } from 'recoil';
import { prizeAtom, prizeListAtom } from '../atoms';
import { usePrizeList } from '../hooks/usePrizeList';


export default function Camera() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [prizeList, setPrizeList] = useRecoilState(prizeListAtom);

    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, [])

    const handleBarCodeScanned = () => {
        setScanned(true)
    }

    const closeModal = () => {
        prizeHook.addPrize("movie ticket")
        setScanned(false)
    }

    const prizeHook = usePrizeList();

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
        },
        camera: {
            width: '112%', 
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