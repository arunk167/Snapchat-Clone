import React from 'react'
import { View, Text,StyleSheet ,Image} from 'react-native'

import imagePath from '../constants/imagePath'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'
import { moderateScaleVertical } from '../styles/responsiveSize'


export default function whatsAppHeader() {
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.headerText}>WhatsApp</Text>
            <Image  source={imagePath.search} style={styles.image}/>
        </View>
    )
}
const styles = StyleSheet.create({
    headerStyle:{
        padding:moderateScaleVertical(10),
        backgroundColor:colors.whatsappTheme,
        justifyContent:"space-between",
        flexDirection:"row"
    } ,
    headerText:{
        color:colors.white,
        fontSize:20,
        fontFamily:fontFamily.medium
    },
    image:{
        height:20,
        width:20,
        tintColor:colors.white
    }
})

