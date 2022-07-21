import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Item({route}) {
    const [item, setItem] = useState(route.params)

    return (
        <View>
            <ScrollView style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.expDate}>Expirey date: July 20th 2022</Text>
            </View>

            <View style={{}}>
                <Text style={styles.subTitle}>Participating company</Text>

                <View style={{alignItems: 'flex-start', marginTop: 5, marginBottom: 20}}>
                    <View style={{alignItems: 'center'}}>
                        <FontAwesome5 name="smile-beam" size={24} color='#F7F8FA' />
                        <Text style={styles.text}>Jugo Juice</Text>
                    </View>
                </View>
            </View>

            <View>
                <Text style={styles.subTitle}>{item.name}</Text>

                <Text style={[styles.text, {marginBottom: 30}]}>Lorem ipsum dolor sit amet. Est voluptates porro quo nostrum internos id vitae nulla et eveniet totam. Ut fuga neque aut rerum fugit qui iusto galisum. Est repellendus repellat eum consequuntur nihil et minima sint nam architecto doloribus non temporibus quisquam est inventore fugiat. Aut tempore perferendis nam dolorem aspernatur At itaque rerum et optio nisi.</Text>
            </View>

            <View style={styles.detailContainer}>
                <Text style={styles.subTitle}>Approximate value</Text>
                <Text style={styles.text}>$50</Text>
            </View>

            <View style={styles.detailContainer}>
                <Text style={styles.subTitle}>Availible prize items to win</Text>
                <Text style={styles.text}>12</Text>
            </View>

            <View>
                <Text style={styles.subTitle}>Participating locations</Text>
                <Text style={[styles.text, {marginBottom: 30}]}>Lorem ipsum dolor sit amet. Est voluptates porro quo nostrum internos id vitae nulla et eveniet totam. Ut fuga neque aut rerum fugit qui iusto galisum. Est repellendus repellat eum consequuntur nihil et minima sint nam architecto doloribus non temporibus quisquam est inventore fugiat. Aut tempore perferendis nam dolorem aspernatur At itaque rerum et optio nisi.</Text>
            </View>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: '#1A222F',
        paddingHorizontal: 32
    },
    detailContainer: {
        marginBottom: 40
    },
    title: {
        fontSize: 28,
        color: '#F7F8FA',
    },
    subTitle: {
        fontWeight: 'bold',
        color: '#F7F8FA',
        fontSize: 16,
        marginBottom: 10,
    },
    text: {
        color: '#F7F8FA',
        fontSize: 14,
    },
    expDate: {
        color: '#F7F8FA',
        fontSize: 12,
        marginVertical: 10,
    }
});