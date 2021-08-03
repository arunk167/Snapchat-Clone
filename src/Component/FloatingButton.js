import React from 'react'
import { View, Text, TouchableOpacity ,Image,StyleSheet} from 'react-native'

import style from '../Screen/Login/style'
import colors from '../styles/colors'
import { height, moderateScale } from '../styles/responsiveSize'

export default function FloatingButton({ButtonImage,onPress}) {
    return (
       
           <TouchableOpacity style={styles.buttonBackground} onPress={onPress}>
              <Image source={ButtonImage} style={styles.image}/>
             
           </TouchableOpacity>
  
    )
}
const styles = StyleSheet.create({
    buttonBackground:{
        backgroundColor:colors.themeColor,
        height:moderateScale(60),
        width:moderateScale(60),
        borderRadius:moderateScale(60),
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
       
        height:moderateScale(40),
        width:moderateScale(40),
        resizeMode:'contain'

    }
       
})

