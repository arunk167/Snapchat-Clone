import React  from "react"
import {createStackNavigator} from "@react-navigation/stack"
import navigationStrings from "../constants/navigationStrings"
import { Home} from "../Screen"
import TabRoutes from "./TabRoutes"


const Stack=createStackNavigator()

export default function MainStack(){
    return(
        <>
        <Stack.Screen name={navigationStrings.TABROUTES} component={TabRoutes}
        options={{
            headerShown:false
        }} />
       
      
        </>
    )
}