import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import PrizeCarousel from '../Components/PrizeCarousel';
import ContestRules from '../Components/ContestRules';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import EmptyPrize from '../Components/EmptyPrize';
import {useScreen} from '../hooks/useScreen'

export default function Home({navigation}) {
    const [scanned, setScanned] = useState(false);
    const screenHook = useScreen();

    const handleNav = (route) => {
        screenHook.updateScreen(route)
        navigation.navigate("ItemList")
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Prize</Text>
            <View style={styles.buttonContainer}>
                <LinearGradient style={styles.prizeButton} colors={['#00A3FD', '#00D2C5']} start={[0, 0]} end={[1, 1]}>
                    <FontAwesome5 name="trophy" style={{marginRight: 10}} size={24} color="#1A222Fk" />

                    <TouchableOpacity onPress={() => handleNav("Prize")}>
                        <Text style={styles.label}>Prize Items</Text>
                    </TouchableOpacity>
                </LinearGradient>
                
                <LinearGradient style={styles.prizeButton} colors={['#00D2C5', '#00FD91']} start={[0, 0]} end={[1, 1]}>
                    <FontAwesome5 name="store-alt" style={{marginRight: 10}} size={24} color="black" />

                    <TouchableOpacity onPress={() => handleNav("Purchase")}>
                        <Text style={styles.label}>Purchase Items</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>

            <View style={styles.prizeContainer}>
                {
                    !scanned ?
                    <EmptyPrize />
                    :
                    <PrizeCarousel />
                }
            </View>

            <ContestRules />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A222F',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20
    },
    prizeContainer: {
        height: 600, 
        width: '80%',
    },
    buttonContainer: {
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'space-evenly',
    },
    label: {
        lineHeight: 24,
        fontSize: 16,
        fontWeight: '600',
    },
    title: {
        fontSize: 28,
        color: '#F7F8FA',
        marginVertical: 40
    },
    prizeButton: {
        borderRadius: 4, 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: 15,
        paddingVertical: 10
    }
});