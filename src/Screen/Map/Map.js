import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import HomeHeader from '../../Component/HomeHeader';
import RoundImage from '../../Component/RoundImage';
import WrapperContainer from '../../Component/WrapperContainer';
import imagePath from '../../constants/imagePath';
import {locData} from '../../constants/locData';
import colors from '../../styles/colors';

const Map = () => {
  const [curLoc, setState] = useState({
    latitude: 26.55,
    longitude: 75.52,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      <MapView style={StyleSheet.absoluteFill} initialRegion={curLoc}>
        {/* {locData.map((val, index) => {
            return (
              <Marker
                coordinate={val.coords}
                image={val.img}
              />
            );
          }
        )} */}
        <Marker coordinate={curLoc} image={imagePath.emoji3} />
      </MapView>
      <View style={styles.headerStyle}>
        <HomeHeader headerText={'Jaipur'} />
      </View>
      <View style={styles.bottomView}>
        <View style={styles.imgStyle}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <RoundImage
              image={
                'https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg'
              }
            />
           <View style={styles.textStyle}>
              <Text>Bitemoji</Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <RoundImage
              image={
                'https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg'
              }
            />
            <View style={styles.textStyle}>
              <Text>Bitemoji</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    position: 'absolute',
    top: 18,
    left: 24,
    right: 24,
  },
  bottomView: {
    position: 'absolute',
    bottom: 48,
    left: 24,
    right: 24,
  },
  imgStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    backgroundColor: colors.white,
    borderRadius: 12,
    alignItems: 'center',
  },
});
