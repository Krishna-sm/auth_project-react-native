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
const ChnagePassword = () => {
    const navigation = useNavigation();
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const handleSubmit = () => {
    if (password && cpassword ) {
      const formData = { password,cpassword };
      console.log(formData);
    if(password !== cpassword)
    {
        Toast.show({
            type: "warning",
            text1: "not match",
            position: "top",
            topOffset: 0,
          });
        return;
    }
      setEmail("");
      Toast.show({
        type: "done",
        text1: "password change success",
        position: "top",
        topOffset: 0,
      });
    } else {
      Toast.show({
        type: "warning",
        text1: "Eamil is required",
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
          <MaterialIcons name="fingerprint" size={100} color={"#275e54"} />
        </View>
        <View style={[loginStyle.inputWithLable]}>
          <Text style={[loginStyle.labelText]}>New Password</Text>
          <TextInput
            style={[loginStyle.input]}
            value={password}
            onChangeText={setpassword}
            keyboardType="default"
            secureTextEntry
            placeholder="New Password"
          />
        </View>
        <View style={[loginStyle.inputWithLable]}>
          <Text style={[loginStyle.labelText]}>Re Enter Password</Text>
          <TextInput
            style={[loginStyle.input]}
            value={cpassword}
            onChangeText={setcpassword}
            keyboardType="default"
            secureTextEntry
            placeholder="Re Enter New Password"
          />
        </View>
        <View style={{ width: 200, alignSelf: "center", margin: 20 }}>
          <Button title="Submit" color={"#275e54"} onPress={handleSubmit} />
        </View>
       

      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default ChnagePassword
