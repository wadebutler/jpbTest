import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import SearchBar from './SearchBar';
import { usePrizeList } from '../hooks/usePrizeList';
import sampleImg from '../assets/cityscape.jpg';
import { Entypo } from '@expo/vector-icons';

export default function ItemList({navigation}) {
    const listHook = usePrizeList();

    const makeItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("Item", item)} key={item.key} style={{marginBottom: 20}}>
                <Image source={sampleImg} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.prizeText}>{item.name}</Text>

                    <View style={styles.storeContainer}>
                        <Entypo style={{marginRight: 5}} name="app-store" size={20} color="black" />
                        <Text style={styles.storeText}>Store Name</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <SearchBar />

            <FlatList 
                data={listHook.prizeList}
                renderItem={makeItem}
                keyExtractor={item => item.key}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A222F',
        alignItems: 'center',
    },
    textContainer: {
        backgroundColor: '#fff', 
        height: 40, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingHorizontal: 20, 
        borderBottomRightRadius: 8, 
        borderBottomLeftRadius: 8
    },
    storeContainer: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    prizeText: {
        fontSize: 16, 
        color: '#101723'
    },
    storeText: {
        textTransform: 'uppercase',
        fontSize: 12,
    },
    image: {
        width: 370, 
        height: 60, 
        borderTopLeftRadius: 8, 
        borderTopRightRadius: 8
    }
});