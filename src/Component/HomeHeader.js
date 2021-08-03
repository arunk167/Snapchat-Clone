import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import imagePath from '../constants/imagePath'
import colors from '../styles/colors'
import commonStyles from '../styles/commonStyles'
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize'
import RoundImage from './RoundImage'


const HomeHeader = (
    {
        headerText,
        
    }
) => {
    return (
        <View style={styles.headerStyle}>
           <View  style={{flexDirection:'row',alignItems:'center'}}>
               <RoundImage image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo2QeIWfYLp0WT3UueEw64nDe7grPIPHiFbw&usqp=CAU'} />
               <Image source={imagePath.icSearch} style={{marginLeft:moderateScale(14)}} />
           </View>
           <Text style={styles.headertextStyle}>{headerText}</Text>
           <View  style={{flexDirection:'row',alignItems:'center'}}>
               
               <Image source={imagePath.icAdd} style={{marginRight:moderateScale(14)}}/>
               <Image source={imagePath.icChat} style={styles.chatStyle}/>
           </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    headerStyle:{
        minHeight:moderateScaleVertical(50),
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:moderateScale(6)

    },
    headertextStyle:{
        fontSize:moderateScale(20),
        fontFamily:'bold'
    },
    chatStyle:{
        height:moderateScaleVertical(22),
        width:moderateScaleVertical(22),
        tintColor:colors.black
    }
   
   
})
