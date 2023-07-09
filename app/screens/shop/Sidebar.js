import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {DrawerContentScrollView,DrawerItem,DrawerItemList} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native'
const Sidebar = ( {...props}) => {
    const navigation = useNavigation();
    const handleLogout=()=>{
        // console.warn(`logout pressed`);
        navigation.navigate("ShopTab")
    }
  return (
        <DrawerContentScrollView {...props}>
<View style={{margin:15}}>
    <Text style={{fontSize:18,marginBottom:5,fontWeight:'bold'}}>
        Krishna
    </Text>
    <Text style={{fontSize:16,marginBottom:5}}>kana@gmail.com</Text>
</View>
<DrawerItemList {...props} />
        <DrawerItem label={'logout'} 
        onPress={handleLogout}
        />
        </DrawerContentScrollView>
  )
}

export default Sidebar

const styles = StyleSheet.create({})