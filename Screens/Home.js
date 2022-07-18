import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PrizeCarousel from '../Components/PrizeCarousel';
import ContestRules from '../Components/ContestRules';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("ItemList", 'prize')}>
                    <Text style={styles.label}>Prize Items</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("ItemList", "purchase")}>
                    <Text style={styles.label}>Purchase Items</Text>
                </TouchableOpacity>
            </View>

            <PrizeCarousel />

            <ContestRules />
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
    buttonContainer: {
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'space-evenly',
    },
    label: {
        lineHeight: 24,
        fontSize: 16,
        fontWeight: '600',
    }
});