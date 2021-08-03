import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import imagePath from '../constants/imagePath';
import {clearUserData} from '../utils/utils';
import ChatContact from './ChatContact';
import FloatingButton from './FloatingButton';
import actions from '../redux/actions'



export default class ChatScreen extends Component {
  state = {
    contact: [
      {
        id: 2,
        name: '8th Sem(HOD SIR)',
        time: '9:10 pm',
        message: '+91 9767899823: okay sir',
        image:
          'https://image.shutterstock.com/image-vector/technology-logo-designs-template-connecting-260nw-1258878547.jpg',
      },
      {
        id: 3,
        name: 'CSE-8 Sem',
        time: '4:21 pm',
        message: 'Sohit:As per instruction recieved kindly ...',
        image:
          'https://img.favpng.com/7/1/24/google-logo-google-search-icon-png-favpng-DLXaPGArrFH6yJjYE8USnMuvX_t.jpg',
      },
      {
        id: 545,
        name: 'Ajay',
        time: 'Yesterday',
        message: 'exam related question',
        image:
          'https://i.pinimg.com/564x/d7/52/c5/d752c52616944cf65db8fd950c763534.jpg',
      },
      {
        id: 23,
        name: 'Vaccine',
        time: 'Yesterday',
        message: 'Information on vaccination center for this..',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSilDV3WAe-EzoaMw_SwhyubPR9of5Gt2H0AIZZcAcuXIncwsU8FBuiWW28zg5GfjUpIus&usqp=CAU',
      },
      {
        id: 343,
        name: 'Girraj',
        time: 'Yesterday',
        message: 'hii',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1hUxKgwfvogAj8q-4GIbMwrhH7nrseCN6Uw&usqp=CAU',
        message: 'okay',
      },
      {
        id: 333,
        name: 'Ajay',
        time: 'Yesterday',
        message: 'thanku',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPq5A5CDFJszCwuZxU60VYnHk0U9nZwj9xTQ&usqp=CAU',
      },
      {
        id: 233,
        name: '8 sem pt grp',
        time: 'Yesterday',
        message: '+91 8765565645: done',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReJRCwv0eGY8G0Tuue0ME-ooCqqiRPJ4QOag&usqp=CAU',
      },

      {id: 2533, name: '+91 7986785623', time: 'Yesterday', message: 'hii'},
      {id: 2323, name: '859588958', time: 'yesterday', message: 'hii'},
    ],
  };
  onLogout = () => { 
    clearUserData();
    actions.onLogout();
  };
  render() {
    const {contact} = this.state;
    return (
      <View>
        <FlatList
          data={contact}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ChatContact data={item} />}
        />

        <View style={{position: 'absolute', bottom: 20, right: 20}}>
          <FloatingButton
            ButtonImage={imagePath.logo}
            onPress={this.onLogout}
          />
        </View>
      </View>
    );
  }
}
