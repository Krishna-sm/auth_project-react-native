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
const ForgetScreen = () => {
    const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    if (email ) {
      const formData = { email };
      console.log(formData);
      setEmail("");
      Toast.show({
        type: "done",
        text1: "Forget success",
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
          <MaterialIcons name="favorite-border" size={100} color={"#275e54"} />
        </View>
        <View style={[loginStyle.inputWithLable]}>
          <Text style={[loginStyle.labelText]}>Email</Text>
          <TextInput
            style={[loginStyle.input]}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="Enter Your Email"
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

export default ForgetScreen
