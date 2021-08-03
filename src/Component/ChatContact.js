import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';

export default function ChatContact(props) {
    const {data}=props;
  return (
    <View style={styles.parentView}>
      <Image
        source={{
          uri:data.image
        }}
        style={styles.userImage}
      />
      <View style={styles.childView}>
        <View style={styles.nameView}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.time}>{data.time}</Text>
        </View>
        <Text style={styles.message}>{data.message}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  parentView: {
    flexDirection: 'row',
    padding: moderateScale(4),
  },
  nameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
  },
  time:{
      color:colors.textGreyLight,
      fontSize:12
  },

  message: {
   
    color: colors.textGreyLight,
    fontSize: 15,
    
  },
  userImage: {
    height: moderateScaleVertical(70),
    width: moderateScaleVertical(70),
    borderRadius:moderateScaleVertical(70),
    resizeMode:"contain",
    flex: 1.5,
  },
  childView: {
    flex: 8.5,
    paddingLeft: moderateScale(6),
    borderBottomWidth: 1,
    borderColor: colors.borderLight,
    marginHorizontal: moderateScale(6),
    marginTop:moderateScaleVertical(8)
  },
});
