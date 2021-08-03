import React, {Component} from 'react';
import {
  ImageBackground,
  StyleSheet,
} from 'react-native';
import imagePath from '../../constants/imagePath';
import ButtonWithLoader from '../../Component/ButtonWithLoader';
import colors from '../../styles/colors';
import {moderateScaleVertical} from '../../styles/responsiveSize';
import navigationStrings from '../../constants/navigationStrings';
import strings from '../../constants/lang';

export default class InitialScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
 moveToScreen = screen => {
    const {navigation} = this.props;
    navigation.navigate(screen);
};

  render() {
    return (
      <ImageBackground
          source={imagePath.background}
          style={{flex: 1, justifyContent: 'flex-end'}}
        
       >
        <ButtonWithLoader
               btnText={strings.LOGIN}
               btnStyle={styles.btnStyle}
               onPress={() => this.moveToScreen(navigationStrings.LOGIN)}
        />
        <ButtonWithLoader
             btnText={strings.SIGNUP}
             btnStyle={styles.btnStyle2}
             onPress={() => this.moveToScreen(navigationStrings.SIGNUP)}
        />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.red,
    height: moderateScaleVertical(62),
  },
  btnStyle2: {
    backgroundColor: colors.btnABlue,
    height: moderateScaleVertical(62),
  },
});
