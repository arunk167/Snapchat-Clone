import React, { Component } from 'react'
import { Text, View,StyleSheet ,Image} from 'react-native'
import imagePath from '../constants/imagePath'

import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize'

 const SocialLogin =({
     socialText
 })=> {
 
        return (
            <View>
                <View style={styles.parent}>
              <View style={styles.hyphen}/>
              <Text style={styles.text}>{socialText}</Text>
              <View  style={styles.hyphen} />
            </View>
            <View style={styles.socialIconView} >
                <View  style={styles.icon}>
                <Image source={imagePath.google}/>
                </View>
                <View  style={styles.icon}>
                <Image source={imagePath.facebook}/>
                </View>
                <View  style={styles.icon}>
                <Image source={imagePath.apple}/>
                </View>
            </View>
            </View>
        )
    }
    export default SocialLogin;
const styles = StyleSheet.create({
      parent:{
          flexDirection:"row",
          justifyContent:'center',
          alignItems:"center"
          
      },
      hyphen:{
          width:20,
          backgroundColor:colors.textGreyLight,
          height:1
      },
      text:{
          color:colors.textGreyLight,
          fontFamily:fontFamily.reguler,
          fontSize:moderateScale(14)
      },
      socialIconView:{
          flexDirection:'row',
          justifyContent:"space-between",
          marginHorizontal:moderateScale(60),
          marginTop:moderateScaleVertical(20),
          
      },
      icon:{
          elevation:2,
          backgroundColor:colors.white,
         
      }

})

