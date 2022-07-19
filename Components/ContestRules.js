import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function ContestRules() {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const handlePress = () => {
        if (isCollapsed) {
            return setIsCollapsed(false)
        }
        
        return setIsCollapsed(true)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handlePress()}>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Ionicons name="book" size={20} color="#B3EBDA" />
                    <Text style={{color: '#FCFCFC', marginHorizontal: 110, fontSize: 14}}>Contest Rules</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff" />
                </View>
            </TouchableOpacity>

            <Collapsible collapsed={isCollapsed}>
                <Text style={{color: '#FCFCFC'}}>Lorem ipsum dolor sit amet. Est voluptates porro quo nostrum internos id vitae nulla et eveniet totam. Ut fuga neque aut rerum fugit qui iusto galisum. Est repellendus repellat eum consequuntur nihil et minima sint nam architecto doloribus non temporibus quisquam est inventore fugiat. Aut tempore perferendis nam dolorem aspernatur At itaque rerum et optio nisi.</Text>
            </Collapsible>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderColor: '#8FA3C6',
        marginHorizontal: 20,
        paddingTop: 10,
    },
});