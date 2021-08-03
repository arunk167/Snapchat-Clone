import {StyleSheet} from 'react-native'
import colors from '../../styles/colors'
import commonStyles from '../../styles/commonStyles'
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize'



export default StyleSheet.create({
    viewStyle:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'space-between',
        marginHorizontal:moderateScale(6)

    },
    lineStyle:{
        borderBottomWidth:0.4,
        borderBottomColor: colors.blackOpacity20,
        marginVertical:moderateScaleVertical(14)
    },
    newSnapStyle: {
        ...commonStyles.fontSize10,
        color: colors.red,

    },
    timeStyle:{
        marginLeft:moderateScale(12),
        color:colors.blackOpacity20,
        fontSize:moderateScale(14)
    },
    tapStyle:{
        color:colors.blackOpacity20,
        fontSize:moderateScale(14),
        marginLeft:moderateScale(8)
   
    },
    nameStyle:{
        fontSize:moderateScale(16)
    },
    emojiStyle:{
        height:moderateScaleVertical(16),
        width:moderateScaleVertical(16),
    },
    verticalLine:{
        borderWidth:0.2,
        height:moderateScaleVertical(32),
        marginLeft:moderateScale(28)
    },
    chatStyle:{
        height:moderateScaleVertical(20),
        width:moderateScaleVertical(20),
        tintColor:colors.blackOpacity20,
        marginLeft:moderateScale(18)
    },
    iconStyle:{
        height:moderateScaleVertical(16),
        width:moderateScaleVertical(16),
        tintColor:colors.red,

    },
})