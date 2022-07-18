import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Camera from './Screens/Camera';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { HomeNavigator } from './Navigation/HomeNavigation';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{ 
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#00CFC8',
            height: 100,
            marginTop: 0
          }
        }}
      >
        <Tab.Screen 
          name='Home' 
          component={HomeNavigator} 
          options={{
            headerShown: false,
            tabBarIcon: () => <FontAwesome5 name="trophy" size={24} color="#1A222Fk" />
          }} 
        />
        <Tab.Screen 
          name='Camera' 
          component={Camera}
          options={({navigation}) => ({
            headerTitle: "",
            headerTransparent: true,
            headerLeft: () => (
              <TouchableOpacity style={{flexDirection: 'row', marginLeft: 10, marginTop: 20, paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#38465F', borderRadius: 50}} onPress={() => console.log(navigation.navigate('Home'))}>
                <AntDesign name="arrowleft" size={24} color="#B3EBDA" />
                <Text style={{color: '#FCFCFC', fontSize: 14}}> Back</Text>
              </TouchableOpacity>
            ),
            tabBarIcon: () => <FontAwesome name="barcode" size={24} color="#1A222F" />
          })} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

})