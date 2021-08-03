import React from 'react';
import {View, Text,StyleSheet,Image, TouchableOpacity} from 'react-native';
import imagePath from '../constants/imagePath';
import {
  textScale,
  moderateScale,
  moderateScaleVertical,
} from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily'
import {useNavigation } from "@react-navigation/native"
import colors from '../styles/colors';

const Header = ({
    headerText,
    leftIcon=imagePath.back,
    onPress
   
}) => {
  const navigation=useNavigation()
  return (
    <View style={styles.headerStyle}>
    
  <TouchableOpacity 
      onPress={!!onPress? onPress:()=>navigation.goBack()}
      >
      <Image source={leftIcon}  />
      </TouchableOpacity>
    
      <Text style={styles.headerText}>{headerText}</Text>
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  headerStyle:{
    padding:moderateScaleVertical(16),
    flexDirection:'row'
  },
  headerText:{
    fontSize:textScale(17),
    textAlign:'center',
    lineHeight:textScale(28),
    width:moderateScale(100),
    fontFamily:fontFamily.bold
  
  },
//   backbtn:{
//     tintColor:colors.themeColor
//   }
})
