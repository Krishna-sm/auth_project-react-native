import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DashboardScreen from './DashboardScreen';
import Sidebar from './Sidebar';
import ChnagePassword from '../auth/ChangePassword';

const Drawer = createDrawerNavigator();
const UserPannel = () => {
  return (
   <Drawer.Navigator drawerContent={(props)=><Sidebar {...props} />}>
    <Drawer.Screen name='Dasboard' component={DashboardScreen} />
    <Drawer.Screen name='change Password' component={ChnagePassword} />
   </Drawer.Navigator>
  )
}

export default UserPannel