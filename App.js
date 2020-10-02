// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from  './src/screens/MainScreen'
import DetailScreen from  './src/screens/DetailScreen';
import { Title } from 'native-base';


const Stack = createStackNavigator();



function App(props) {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name="MainScreen" 
         component={MainScreen} 
        
         options={
           {
             headerShown: false
            }
         }
        
        
        />

        <Stack.Screen 
        
        name='DetailScreen'
        component={DetailScreen}
      
        
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;