import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Item() {
    return (
        <View style={styles.container}>
            <Text>Items List</Text>
            <Text>Item</Text>
            <Text>Item</Text>
            <Text>Item</Text>
            <Text>Item</Text>
            <Text>Item</Text>
            <Text>Item</Text>
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