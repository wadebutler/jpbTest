import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ItemList from '../Components/ItemsList';
import Home from '../Screens/Home';
import Item from '../Screens/Item';

const Stack = createStackNavigator()

export const HomeNavigator = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
            <Stack.Screen 
                name='ItemList' 
                component={ItemList} 
                options={{
                    headerTitle: "Prize Items",
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <TouchableOpacity style={{marginLeft: 10}} onPress={() => navigation.goBack()}>
                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
                    )
                }} 
            />
            <Stack.Screen 
                name='Item' 
                component={Item}
                options={{
                    headerTitle: "Purchase Items",
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <TouchableOpacity style={{marginLeft: 10}} onPress={() => navigation.goBack()}>
                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    )
}