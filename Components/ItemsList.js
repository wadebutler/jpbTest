import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import SearchBar from './SearchBar';
import { useScreen } from '../hooks/useScreen';

export default function ItemList() {
    const screenHook = useScreen();
    

    return (
        <View style={styles.container}>
            <SearchBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A222F',
        alignItems: 'center',
    },
});