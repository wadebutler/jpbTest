import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'}}>
                <TouchableOpacity onPress={() => navigation.navigate("ItemsList")}>
                    <Text style={styles.label}>Prize Items</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("ItemsList")}>
                    <Text style={styles.label}>Purchase Items</Text>
                </TouchableOpacity>
            </View>
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
        label: {
            lineHeight: 24,
            fontSize: 16,
            fontWeight: '600',
        }
});