import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainStack from './MainStack';
import AuthSatck from './AuthStack';
import { connect } from 'react-redux';
const Stack = createStackNavigator();

  
 function Routes(props) {
     const {isLogin} =props

   
  return (
      
    <NavigationContainer>
      <Stack.Navigator>
          
      
          
      {!!true?<>{MainStack()}</>
             :<>{AuthSatck()}</>
           }  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const mapStateToProps=state=>{
  return{
     isLogin:state.auth.isLogin,
    
  }
}
export default connect(mapStateToProps)(Routes);