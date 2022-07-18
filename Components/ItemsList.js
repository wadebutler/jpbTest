import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ItemList({navigation, route}) {
    const [listType, setListType] = useState(route.params === "prize" ? "prize" : 'purchase')
    const testArr = ["item", "item", "item", "item"]

    return (
        <View style={styles.container}>
            {
                listType === "prize" ?
                <Text>Prize List</Text>
                :
                <Text>Purchase List</Text>
            }

            {
                testArr.map((item, index) => {
                    return (
                        <TouchableOpacity style={{marginVertical: 10}} onPress={() => {navigation.navigate("Item", {test: index + 1})}}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});