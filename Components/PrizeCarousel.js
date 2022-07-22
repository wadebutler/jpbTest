import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function PrizeCarousel({prize}) {
    return (
        <View style={styles.container}>
            <Text style={{color: '#fff', fontSize: 25}}>{prize.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A222F',
        alignItems: 'center',
        justifyContent: 'center',
    },
});