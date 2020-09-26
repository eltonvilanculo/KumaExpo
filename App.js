// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from  './src/screens/MainScreen'



;


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name="Kuma" 
         component={MainScreen} 
        
         options={
           {
             headerShown: false
            }
         }
        
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;