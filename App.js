import React, {Suspense} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Camera from './Screens/Camera';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { HomeNavigator } from './Navigation/HomeNavigation';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RecoilRoot } from 'recoil';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Text>Loading</Text>}>
      <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{ 
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#00CFC8',
            height: 60,
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
              <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#38465F', borderRadius: 50, height: 40, width: 70, alignItems: 'center', marginLeft: 10}} onPress={() => navigation.navigate('Home')}>
                <MaterialIcons name="keyboard-arrow-left" size={24} color="#B3EBDA" />
                <Text style={{color: '#FCFCFC', fontSize: 14}}> Back</Text>
              </TouchableOpacity>
            ),
            tabBarIcon: () => <FontAwesome name="barcode" size={24} color="#1A222F" />
          })} 
        />
      </Tab.Navigator>
    </NavigationContainer>
    </Suspense>
    </RecoilRoot>
  );
}