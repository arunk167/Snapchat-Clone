import react from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily'; 
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize'    

export default StyleSheet.create({
 
  textHeader: {
    fontSize: moderateScale(22),
    color: colors.textGray,
    marginVertical: moderateScaleVertical(16),
    fontFamily: fontFamily.medium,
  },
  textInput: {
    marginHorizontal: moderateScaleVertical(16),
    marginVertical: moderateScaleVertical(60),
  },
  customTextStyle: {
    borderColor: colors.borderLight,
    borderWidth: 0.4,                         
    elevation:2,
    backgroundColor:colors.white
  },
  logoImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  account:{
      flexDirection:'row',
      marginTop:'auto',
      justifyContent:"center",
      alignItems:"center",
      marginVertical:moderateScaleVertical(50),
  },
  accountText:{
    color:colors.textGreyLight,
    fontFamily:fontFamily.reguler,
  },
  signupText:{
      color:colors.themeColor
  }
});
