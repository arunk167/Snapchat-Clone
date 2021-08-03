import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color} from 'react-native-reanimated';
import ButtonWithLoader from '../../Component/ButtonWithLoader';
import Header from '../../Component/Header';
import TextInputWithLabel from '../../Component/TextInputWithLabel';
import WrapperContainer from '../../Component/WrapperContainer';
import strings from '../../constants/lang';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';

const Login = () => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    isEnable: false,
  });
  const {isLoading, email, password, isEnable} = state;

  const updateState = data => setState(state => ({...state, ...data}));

  useEffect(() => {
    if (email != '' && password != '') {
      updateState({isEnable: true});
      return;
    }
    updateState({isEnable: false});
  }, [email, password]);

  onLogin=()=>{
    actions.login(true)
  }
  return (
    <WrapperContainer>
      <Header />
      <View style={styles.container}>
        <View>
          <Text style={styles.textStyle}>{strings.LOGIN}</Text>
          <TextInputWithLabel
            value={email}
            placeholder={strings.ENTER_USERNAME}
            label={strings.USERNAME_OR_PASSWORD}
            onChangeText={email => updateState({email})}
          />
          <TextInputWithLabel
            value={password}
            placeholder={strings.ENTER_PASSWORD}
            label={strings.PASSWORD}
            secureTextEntry={true}
            onChangeText={password => updateState({password})}
          />
          <Text style={styles.passwordText}>{strings.FORGOT_PASSWORD}</Text>
        </View>
        <View style={styles.btncontainer}>
          <ButtonWithLoader
              btnText={strings.LOGIN}
              btnStyle={{
              ...styles.btnStyle,
              backgroundColor: isEnable
                ? colors.btnABlue
                : colors.blackOpacity20,
            }}
            isDisable={!isEnable}
            onPress={onLogin}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScaleVertical(100),
    justifyContent: 'space-between',
    flex: 1,
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: moderateScale(24),
    marginVertical: moderateScaleVertical(10),
  },
  passwordText: {
    fontSize: moderateScale(12),
    alignSelf: 'center',
    marginTop: moderateScaleVertical(40),
    color: colors.btnABlue,
  },
  btnStyle: {
    backgroundColor: colors.blackOpacity20,
    marginHorizontal: moderateScale(52),
    borderRadius: moderateScale(48),
    borderWidth: 0,
  },
  btncontainer: {
    marginBottom: moderateScaleVertical(20),
  },
});
export default Login;
