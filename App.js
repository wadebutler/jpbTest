import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Camera from './Screens/Camera';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { HomeNavigator } from './HomeNavigation';
import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        styles={{height: 100}} 
        screenOptions={{ 
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#00CFC8',
            height: 80,
          }
        }}
      >
        <Tab.Screen 
          name='Home' 
          component={HomeNavigator} 
          options={{
            tabBarIcon: () => <FontAwesome5 name="trophy" size={24} color="#1A222Fk" />
          }} 
        />
        <Tab.Screen 
          name='Camera' 
          component={Camera}
          options={{
            tabBarIcon: () => <FontAwesome name="barcode" size={24} color="#1A222F" />
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}