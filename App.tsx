import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './containter/Home';
import Matches from './containter/Matches'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        title: 'FMP Client'
      }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
          }}

        />
        <Stack.Screen
          name="Matches"
          component={Matches}
          options={({ route }) => ({ title: 'Partidos' })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
