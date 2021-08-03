import React from 'react';
import {Text, View, FlatList,Image} from 'react-native';
import {ReactReduxContext} from 'react-redux';
import Header from '../../Component/Header';
import HomeHeader from '../../Component/HomeHeader';
import RoundImage from '../../Component/RoundImage';
import WrapperContainer from '../../Component/WrapperContainer';
import {data} from '../../constants/data';
import imagePath from '../../constants/imagePath';
import { moderateScale } from '../../styles/responsiveSize';
import styles from './styles';

const Chat = () => {
  renderItem = ({item, index}) => {
    return (
      <View style={styles.viewStyle}>
        <View style={{flexDirection:"row",alignItems:"center",}}>
          <RoundImage image={item.img} />
          <View style={{marginLeft:moderateScale(12)}}>
                    <Text style={styles.nameStyle}>{item.name}</Text>
                   <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Image style={styles.iconStyle} source={imagePath.icChat} />   
                   <Text style={styles.tapStyle}>Tap to chat</Text>
                   <Text style={styles.timeStyle}>4h </Text>
                   </View>
          </View>
                   
        
        </View>
        <View style={{flexDirection:"row",alignItems:"center"}} >
        <Image source={imagePath.icEmoji} style={styles.emojiStyle}/>
        
        <View style={styles.verticalLine }/>
        <Image style={styles.chatStyle} source={imagePath.icChat} />
        </View>
      </View>
    );
  };
  
  return (
    <WrapperContainer>
      <HomeHeader headerText={'Chat'} />
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={()=><View style={styles.lineStyle}/>}
      />
    </WrapperContainer>
  );
};

export default Chat;
