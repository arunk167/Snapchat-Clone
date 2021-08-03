import react from "react"
import {StyleSheet} from "react-native"
import colors from "../../styles/colors"
import commonStyles from "../../styles/commonStyles"
import fontFamily from "../../styles/fontFamily"
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/responsiveSize"        

export default StyleSheet.create({
    parentView:{
        backgroundColor:colors.white
    },
    textHeader: {
        fontSize: moderateScale(22),
        color: colors.textGrey,
        marginVertical: moderateScaleVertical(16),
        fontFamily: fontFamily.medium,
        marginHorizontal:moderateScale(16)
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
      textInput:{
          marginHorizontal:moderateScale(16), 
      },
      customTextStyle: {
        borderColor: colors.borderLight,
        borderWidth: 0.4,
        elevation:2,
        backgroundColor:colors.white
      },
      socialView:{
          marginTop:moderateScaleVertical(40)
      }

})