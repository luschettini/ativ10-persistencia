import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../pages/Home'; 
import Detalhes from '../pages/Detalhes'; 
import Perfil from '../pages/Perfil'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#e170ae',
        },
        drawerActiveTintColor: '#fff', 
        drawerInactiveTintColor: '#941e69', 
        drawerLabelStyle: {
          fontWeight: 'bold', 
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Detalhes" component={Detalhes} />
      <Drawer.Screen name= "Perfil" component= {Perfil} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;