import { View, Text } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const HomeScreen = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <MaterialIcons name='explore' size={160} color={'#275e54'} />
    </View>
  )
}

export default HomeScreen