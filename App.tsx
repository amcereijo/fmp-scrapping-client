import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './containter/Home';
import Matches from './containter/Matches'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Preferences from './containter/Preferences';

const Drawer = createDrawerNavigator();

function createIcon(name: any, focused: boolean) {
  return <MaterialCommunityIcons
    name={name}
    size={24}
    color={focused ? "#e91e63" : "black"}
  />
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Inicio"
      >
        <Drawer.Screen
          key='home'
          name='Inicio'
          component={Home}
          options={{
            drawerIcon:({focused}) =>
              createIcon('home', focused)
          }}
        />

        <Drawer.Screen
          key='preferences'
          name='Configuración'
          component={Preferences}
          options={{
            drawerIcon:({focused}) =>
              createIcon('account-settings', focused)
          }}
        />

        <Drawer.Screen
          key='matches'
          name='Convocatorias'
          component={Matches}
          options={{
            drawerIcon:({focused}) =>
              createIcon('calendar', focused)
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
