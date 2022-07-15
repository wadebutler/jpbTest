import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function Camera() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, [])

    const handleBarCodeScanned = () => {
        setScanned(true)
    }

    function handleScratch(scratchPercentage) {
        console.log(scratchPercentage)
    }

    if (hasPermission === null || hasPermission === false) {
        return <Text>Permission Required</Text>
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner 
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />

            {
                scanned && 
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={scanned}
                >
                    <TouchableOpacity style={styles.modalBackdrop} onPress={() => setScanned(false)}>
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
            justifyContent: 'flex-end',
            alignItems: 'center'
        },
        modalBackdrop: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
        },
    });