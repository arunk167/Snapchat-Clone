import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, Image} from 'react-native';
import React from 'react';

import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';

import colors from '../styles/colors';
import { Camera, Chat, Map, Profile } from '../Screen';


const Tab = createBottomTabNavigator();
function TabRoutes({navigation}) {
    return (
      <Tab.Navigator
      initialRouteName={navigationStrings.CHAT}
      tabBarOptions={{
        style: { backgroundColor: colors.black },
        showLabel: false
    }}
      >
        <Tab.Screen name={navigationStrings.MAP} component={Map} 
          options={{
        
           
            tabBarIcon: ({focused, color, size}) => (
              <Image  source={imagePath.icLoc}
              style={{
                  width: size,
                  height: size,
                  tintColor: focused ? colors.themeColor : colors.white,
                 
              }}
              />
            ),
          }}
        />
        <Tab.Screen name={navigationStrings.CHAT} component={Chat} 
          options={{
        
           
            tabBarIcon: ({focused, color, size}) => (
              <Image  source={imagePath.icChat}
              style={{
                  width: size,
                  height: size,
                  tintColor: focused ? colors.yellow : colors.white,
                 
              }}
              />
            ),
          }}
        />
        <Tab.Screen name={navigationStrings.CAMERA} component={Camera} 
          options={{
        
           
            tabBarIcon: ({focused, color, size}) => (
              <Image  source={imagePath.icCamera}
              style={{
                  width: size,
                  height: size,
                  tintColor: focused ? colors.themeColor : colors.white,
                 
              }}
              />
            ),
          }}
        />
         <Tab.Screen name={navigationStrings.PROFILE} component={Profile}
          options={{
           
  
            tabBarIcon: ({focused, color, size}) => (
              <Image  source={imagePath.icAdd}
              style={{
                  width: size,
                  height: size,
                  tintColor: focused ? colors.red :colors.white,
              }}
              />
            ),
          }}
        />
        </Tab.Navigator>
  );
}
export default TabRoutes;
