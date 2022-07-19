import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function EmptyPrize() {
    return (
        <View style={styles.container}>
            <FontAwesome style={{marginRight: 20}} name="barcode" size={24} color="#FCFCFC" />
            <Text style={{color: '#FCFCFC'}}>Scan for prize</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#8FA3C6',
        marginVertical: 20,
        borderRadius: 8,
        flexDirection: 'row'
    },
});