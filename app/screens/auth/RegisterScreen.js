import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
  } from "react-native";
  import React, { useState } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { ToastConfig, loginStyle } from "../../../style/style";
  import Toast from "react-native-toast-message";
  import MaterialIcons from "react-native-vector-icons/MaterialIcons";
  import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
  // import { ScrollView } from 'react-native-gesture-handler';
  const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [name, setname] = useState("");
    const [cpassword, setcpassword] = useState("");
    const [tc, setTc] = useState(false);
    const navigation = useNavigation();
    const clearFeilds=()=>{
      setEmail("");
      setpassword("");
      setname("");
      setcpassword("");
      setTc(false);
    }
    const handleSubmit = () => {
      // console.warn(email);
      // console.warn('pass', password)
      if (email && password && name && cpassword && tc) {
        // console.warn("done")
        if(password !== cpassword)
        {
          Toast.show({
            type: "warning",
            text1: "password and confirm password does not match",
            position: "top",
            topOffset: 0,
          });
          return;
        }
        const formData = { email, password,name,cpassword,tc };
        console.log(formData);
        clearFeilds();
        Toast.show({
          type: "done",
          text1: "Login success",
          position: "top",
          topOffset: 0,
        });
      } else {
        Toast.show({
          type: "warning",
          text1: "all feilds are required",
          position: "top",
          topOffset: 0,
        });
      }
    };
    return (
      <SafeAreaView>
        <Toast config={ToastConfig} />
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={{ marginHorizontal: 30 }}>
            <View style={{ alignSelf: "center", marginBottom: 10 }}>
              <MaterialIcons name="fiber-smart-record" size={100} color={"#275e54"} />
            </View>
            <View style={[loginStyle.inputWithLable]}>
              <Text style={[loginStyle.labelText]}>Name</Text>
              <TextInput
                style={[loginStyle.input]}
                value={name}
                onChangeText={setname}
                keyboardType="default"
                placeholder="Enter Your Name"
              />
            </View>
            <View style={[loginStyle.inputWithLable]}>
              <Text style={[loginStyle.labelText]}>Email</Text>
              <TextInput
                style={[loginStyle.input]}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                placeholder="Write Your Email"
              />
            </View>
            <View style={[loginStyle.inputWithLable]}>
              <Text style={[loginStyle.labelText]}>Password</Text>
              <TextInput
                style={[loginStyle.input]}
                value={password}
                onChangeText={setpassword}
                secureTextEntry={true}
                placeholder="Write Your Password"
              />
            </View>
            <View style={[loginStyle.inputWithLable]}>
              <Text style={[loginStyle.labelText]}>Confirm Password</Text>
              <TextInput
                style={[loginStyle.input]}
                value={cpassword}
                onChangeText={setcpassword}
                secureTextEntry={true}
                placeholder="Re-Enter Password"
              />
            </View>
            <View style={{flex:1,flexDirection:'row',gap:10 }}>
              <Checkbox value={tc} onValueChange={setTc} color={tc?'#4630EB':undefined} />
              <Text style={{fontSize:16}}>Agree with Terms and Condition</Text>
            </View>
            <View style={{ width: 200, alignSelf: "center", margin: 20 }}>
              <Button disabled={!tc}  title="join" color={"#275e54"} onPress={handleSubmit} />
            </View>
            <View style={{alignItems:'flex-end'}}>
           
              <View style={{flex:1}}>
                <TouchableWithoutFeedback onPress={()=>navigation.navigate("userLogin")} >
                  <Text style={{fontWeight:'bold'}} >Already Have Account ?</Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default RegisterScreen;
  