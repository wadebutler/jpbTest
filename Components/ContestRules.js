import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

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
                <Text>Contest Rules</Text>
            </TouchableOpacity>

            <Collapsible collapsed={isCollapsed}>
                <Text>Lorem ipsum dolor sit amet. Est voluptates porro quo nostrum internos id vitae nulla et eveniet totam. Ut fuga neque aut rerum fugit qui iusto galisum. Est repellendus repellat eum consequuntur nihil et minima sint nam architecto doloribus non temporibus quisquam est inventore fugiat. Aut tempore perferendis nam dolorem aspernatur At itaque rerum et optio nisi.</Text>
            </Collapsible>
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