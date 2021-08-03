import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import commonStyles from '../styles/commonStyles';
import {moderateScaleVertical} from '../styles/responsiveSize';
import colors from '../styles/colors';
const ButtonWithLoader = ({
  onPress = () => {},
  btnText = '',
  btnTextStyle = {},
  btnStyle = {},
  isLoading = false,
  color = colors.white,
  isDisable = false,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        ...commonStyles.buttonRect,
        ...btnStyle,
      }}
      disabled={isDisable}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="small" color={color} />
      ) : (
        <Text style={{...commonStyles.buttonTextWhite, color, ...btnTextStyle}}>
          {btnText}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonWithLoader;
