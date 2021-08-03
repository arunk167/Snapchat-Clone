import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import navigationStrings from "../constants/navigationStrings";
import { InitialScreen, Login, otpverifyscreen, SignUp } from "../Screen";
const Stack=createStackNavigator();

export default function AuthSatck(){
    return(
        <>
       
        <Stack.Screen name={navigationStrings.INITIALSCREEN} component={InitialScreen} options={{headerShown:false}} />
        <Stack.Screen name={navigationStrings.LOGIN} component={Login} options={{headerShown:false}}/>
        <Stack.Screen name={navigationStrings.SIGNUP} component={SignUp} options={{ headerShown:false}}/>
       


        </>
    )
}