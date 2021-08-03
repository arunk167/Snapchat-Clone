import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'
import strings from '../constants/lang'
import colors from '../styles/colors'
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize'

export default function TextInputWithLabel({
     value,
     placeholder,
     onChangeText,
     inputStyle,
     textStyle,
     label,
     textInputstyle,
     labelStyle,
     ...props

}) {
  return (
    <View style={{...styles.textInputstyle ,...textInputstyle}} >
       <Text style={{...styles.labelStyle,...labelStyle}}>{label}</Text>
        <TextInput 
         value={value}
         placeholder={placeholder}
         onChangeText={onChangeText}
         style={{
          ...styles.inputStyle , ...inputStyle
         }}
         {...props}
        />
    </View>
  )
}

const styles = StyleSheet.create({

  inputStyle:{
    borderBottomWidth:1,
    borderColor:colors.blackOpacity50,
    padding:moderateScale(4)
    
  },  
  textInputstyle:{
    marginHorizontal:moderateScale(52),
    marginVertical:moderateScaleVertical(10),
    
    
  },
  labelStyle:{
    color:colors.btnABlue,
    fontSize:moderateScale(14)
   
  }
})
