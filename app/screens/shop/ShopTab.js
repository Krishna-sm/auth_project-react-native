import { View, Text,  TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
// import UserLoginScreen from '../auth/UserLogin';
import HomeScreen from './HomeScreen';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();


const ShopTab = () => {
  const naivgator  = useNavigation();
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:"purple",
      
      },
      headerTintColor:"white",
      drawerStyle:{
        borderTopRightRadius:50,
        backgroundColor:"#050757",
        
      },
      drawerActiveBackgroundColor:"#016126",
      drawerActiveTintColor:"white",
      // drawerInactiveBackgroundColor:"white"
      drawerInactiveTintColor:"white",
      headerRight:(prop)=><TouchableWithoutFeedback onPress={()=>naivgator.navigate("userLogin")} >
        <Text style={{color:"white",fontSize:23,paddingRight:20}}>Login</Text>
      </TouchableWithoutFeedback>
    }}>
        <Drawer.Screen name='Home' component={HomeScreen}   />
        <Drawer.Screen name='About' component={HomeScreen}   />
    </Drawer.Navigator>
  )
}

export default ShopTab