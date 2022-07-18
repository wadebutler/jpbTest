import {createStackNavigator} from '@react-navigation/stack'
import ItemList from './Components/ItemsList';
import Home from './Screens/Home';
import 'react-native-gesture-handler';

const Stack = createStackNavigator()

export const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='ItemList' component={Home} />
        </Stack.Navigator>
    )
}