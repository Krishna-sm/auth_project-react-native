import { StyleSheet, Text, View } from "react-native";

export const loginStyle = StyleSheet.create({
    labelText:{
        fontSize:20,
        fontWeight:"100",
        marginBottom:5,
        marginLeft:10
    },
    input:{
        height:40,
        borderWidth:1,
        paddingHorizontal:15,
        borderRadius:15,
        fontSize:15
    },
    inputWithLable:{
        marginBottom:10,
        marginTop:5
    }
})

export const ToastConfig = {
    warning:({text1,props})=>{
        return <View style={{height:30,width:"100%",backgroundColor:"orange",padding:4}}>
            <Text>{text1}</Text>
            <Text>{props?.uuid}</Text>
        </View>
    },
    done:({text1,props})=>{
        return <View style={{height:30,width:"100%",backgroundColor:"#1affc6",padding:4}}>
            <Text>{text1}</Text>
            <Text>{props?.uuid}</Text>
        </View>
    }
}