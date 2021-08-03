import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import HomeHeader from '../../Component/HomeHeader';
import RoundImage from '../../Component/RoundImage';
import WrapperContainer from '../../Component/WrapperContainer';
import {data} from '../../constants/data';
import actions from '../../redux/actions';
import colors from '../../styles/colors';

import {
  moderateScale,
  moderateScaleVertical,
  width,
} from '../../styles/responsiveSize';

export default class Profile extends Component {
  renderItem = ({item, index}) => {
    return (
      <View
        style={{
          alignItems: 'center',
          marginHorizontal: moderateScale(8),
          justifyContent: 'center',
        }}>
        <RoundImage image={item.img} size={65} />
        <Text
          style={{
            ...styles.nameStyle,
            fontSize: moderateScale(12),
            color: colors.black,
          }}>
          {item.name}
        </Text>
      </View>
    );
  };
  stories = ({item, index}) => {
    return (
      <ImageBackground source={{uri: item.img}} style={styles.imageStyle}>
        <Text style={styles.nameStyle}>{item.name}</Text>
      </ImageBackground>
    );
  };

  apiHit = () => {
    actions
      .users('?limit=10', '60cc9b5fc4d6bfbbc68797be')
      .then(res => {
        alert('success');
      })
      .catch(error => alert(error));
  };

  componentDidMount() {
    this.apiHit();
  }

  render() {
    return (
      <WrapperContainer>
        <HomeHeader headerText={'Stories'} />
        <ScrollView>
          <View style={{flex: 1}}>
            <View style={{marginVertical: moderateScaleVertical(6)}}>
              <Text style={styles.textStyle}>Friends</Text>
              <FlatList
                data={data}
                keyExtractor={(item, index) => item.id}
                renderItem={this.renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View style={{marginVertical: moderateScaleVertical(6)}}>
              <Text style={styles.textStyle}>Subscription</Text>
              <FlatList
                data={data}
                keyExtractor={(item, index) => item.id}
                renderItem={this.stories}
                numColumns={2}
              />
            </View>
          </View>
        </ScrollView>
      </WrapperContainer>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    height: moderateScaleVertical(180),
    flex: 1,

    marginVertical: moderateScaleVertical(4),
    borderRadius: moderateScaleVertical(90),
    justifyContent: 'flex-end',
    marginHorizontal: 6,
  },
  nameStyle: {
    fontSize: moderateScale(16),
    color: colors.white,
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: moderateScale(16),
    marginHorizontal: moderateScale(18),
    fontFamily: 'bold',
    marginBottom: moderateScaleVertical(4),
  },
});
