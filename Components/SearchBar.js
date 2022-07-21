import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Foundation } from '@expo/vector-icons';

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <Foundation style={styles.icon} name="magnifying-glass" size={24} color="#AFB2BD" />
            <TextInput style={styles.input} placeholder="Search" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A222F',
        alignItems: 'center',
        marginBottom: 20
    },
    input: {
        height: 40,
        justifyContent: 'flex-start',
        width: 370,
        borderRadius: 24,
        backgroundColor: '#F7F8FA',
        paddingLeft: 35,
        zIndex: 1
    },
    icon: {
        position: 'relative',
        top: 30,
        left: -165,
        zIndex: 2
    }
});