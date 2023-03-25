import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './containter/Home';
import Matches from './containter/Matches'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Preferences from './containter/Preferences';
import ConfigClub from './containter/SelectClub';
import useAsyncStorage, { STORAGE_KEYS } from './hooks/useAsyncStorage';
import { ClubType } from './constants/clubs';
import Loading from './common/components/Loading';
import { AppContext } from './contexts/AppContext';

const Drawer = createDrawerNavigator();

function createIcon(name: any, focused: boolean) {
  return <MaterialCommunityIcons
  name={name}
  size={24}
  color={focused ? "#e91e63" : "black"}
  />
}



export default function App() {

  const [club, isLoading, setClub] = useAsyncStorage<ClubType>(STORAGE_KEYS.CLUB, {code:0, name:''});
  const [hasClub, setHasClub] = useState<boolean>();


  useEffect(() => {
    async function doSomething() {
      if (isLoading) {
        return;
      }
      setHasClub(club?.code !== 0);
    }

    doSomething();
  }, [club, isLoading]);


  if (isLoading || hasClub === undefined) {
    return <Loading size={100} color="blue" />
  }

  return (
    <AppContext.Provider value={{club, setClub}}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={!hasClub ? 'Selección Club' : 'Inicio'}
        >
          <Drawer.Screen
            key='home'
            name='Inicio'

            component={Home}
            options={{
              drawerIcon:({focused}) => createIcon('home', focused),
            }}

          />

          <Drawer.Screen
            key='preferences'
            name='Configuración'
            component={Preferences}
            options={{
              drawerIcon:({focused}) => createIcon('account-settings', focused),
            }}
          />

          <Drawer.Screen
            key='matches'
            name='Convocatorias'
            component={Matches}
            options={{
              drawerIcon:({focused}) => createIcon('calendar', focused),
            }}
          />

          <Drawer.Screen
            key='selectClub'
            name='Selección Club'
            component={ConfigClub}
            options={{
              drawerIcon:({focused}) => createIcon('home', focused),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
