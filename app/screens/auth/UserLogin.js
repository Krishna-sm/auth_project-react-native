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
// import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
// import { ScrollView } from 'react-native-gesture-handler';
const UserLogin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = () => {
    // console.warn(email);
    // console.warn('pass', password)
    if (email && password) {
      // console.warn("done")
      const formData = { email, password };
      console.log(formData);
      setEmail("");
      setpassword("");
      Toast.show({
        type: "done",
        text1: "Login success",
        position: "top",
        topOffset: 0,
      });
      navigation.navigate("UserPannel");
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
            <MaterialIcons name="bolt" size={100} color={"#275e54"} />
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
          <View style={{ width: 200, alignSelf: "center", margin: 20 }}>
            <Button title="Submit" color={"#275e54"} onPress={handleSubmit} />
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}>
              <TouchableWithoutFeedback onPress={()=>navigation.navigate("ForgetScreen")} >
                <Text style={{fontWeight:'bold'}} >Forget Password ?</Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={{flex:1}}>
              <TouchableWithoutFeedback onPress={()=>navigation.navigate("Registration")} >
                <Text style={{fontWeight:'bold'}} >Create Account ?</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
  
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserLogin;

const styles = StyleSheet.create({});
