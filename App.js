import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import UserLoginScreen from "./app/screens/auth/UserLogin";
import ShopTab from "./app/screens/shop/ShopTab";
import RegisterScreen from "./app/screens/auth/RegisterScreen";
import ForgetScreen from "./app/screens/auth/ForgetScreen";
import UserPannel from "./app/screens/shop/UserPannel";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerStyle:{
            backgroundColor:"#275e54",
           
          },headerTitleStyle:{
            color:"white"
          },
          headerTintColor:"white"}} >
            <Stack.Screen name="ShopTab" component={ShopTab} options={{headerShown:false}} />
            <Stack.Screen name="userLogin" component={UserLoginScreen} options={{
              title:"Login"
            }} />
 <Stack.Screen name="Registration" component={RegisterScreen} options={{
              title:"Registration",
              headerBackVisible:false
            }} />
            <Stack.Screen name="ForgetScreen" component={ForgetScreen} options={{
              title:"Forget Password",
              headerBackVisible:true
            }} />
    <Stack.Screen name="UserPannel" component={UserPannel} options={{
              title:"Dashboard",
              headerShown:false,
              headerBackVisible:true
            }} />

            

          </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App