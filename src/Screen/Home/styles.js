import React from 'react'
import {StyleSheet } from 'react-native'
import colors from '../../styles/colors'
import fontFamily from '../../styles/fontFamily'
export default StyleSheet.create({
    parent:{
        flex:1,
        backgroundColor:colors.themeColor
        
      
    },
    text:{
        fontFamily:fontFamily.italic,
         color:colors.white
        
    },
    inputPhone:{
       
        alignItems:'center',
        marginTop:20,
       
    }
})