import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Item() {
    return (
        <View style={styles.container}>
            <Text>Item Screen</Text>
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