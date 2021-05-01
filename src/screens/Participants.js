import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Color from '../assets/constants/colors';

import RBSheet from 'react-native-raw-bottom-sheet';

import CustomBtn from '../component/custombtn';

import Icon from 'react-native-vector-icons/Entypo';

import moment from 'moment';
import Card from '../component/CustCard';
import CustomSearch from '../component/CustomSearch';

import {ScrollView} from 'react-native';
import CustBtn from '../component/custombtn';
import CardToggle from '../component/Cardtoggle';
const Screen1 = () => {
  const refRBSheet = useRef();

  const [members, setmembers] = useState([
    {
      id: 1,
      name: 'Stark',
      image: require('../assets/images/images.jpg'),
    },
    {
      id: 2,
      name: 'Steve',
      image: require('../assets/images/images.jpg'),
    },
    {
      id: 3,
      name: 'Rogers',
      image: require('../assets/images/images.jpg'),
    },
    {
      id: 4,
      name: 'Rogers',
      image: require('../assets/images/images.jpg'),
    },
    {
      id: 5,
      name: 'Rogers',
      image: require('../assets/images/images.jpg'),
    },
  ]);
  const [userinfo, setinfo] = React.useState([
    {
      id: 1,
      image: require('../assets/images/images.jpg'),
      name: 'Miguals',
      description:
        'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,LoreLorem',

      admin: 'admin',
      people: '20',
    },
    {
      id: 2,
      image: require('../assets/images/images.jpg'),
      name: 'Miguals',
      description:
        'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,LoreLorem',

      admin: 'admin',
      people: '20',
    },
    {
      id: 3,
      image: require('../assets/images/images.jpg'),

      description:
        'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,LoreLorem',
      name: 'Miguals John',
      admin: 'admin',
      people: '20',
    },
    {
      id: 4,
      image: require('../assets/images/images.jpg'),

      description:
        'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,LoreLorem',
      name: 'Miguals Johnsons',
      admin: 'admin',
      people: '20',
    },
    {
      id: 5,
      image: require('../assets/images/images.jpg'),

      description:
        'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,LoreLorem',
      name: 'Miguals henry',
      admin: 'admin',
      people: '20',
    },
    {
      id: 6,
      image: require('../assets/images/images.jpg'),

      description:
        'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,LoreLorem',
      name: 'Miguals',
      admin: 'admin',
      people: '20',
    },
  ]);
  return (
    <View style={{flex: 1}}>
      <View style={styles.btn}>
        <CustBtn
          name={'+ Add Participants '}
          width="50%"
          onPress={() => refRBSheet.current.open()}
        />
      </View>
      <RBSheet
        keyboardAvoidingViewEnabled={true}
        closeOnPressMask
        closeOnPressBack
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
            height: 500,
          },
          draggableIcon: {
            backgroundColor: 'white',
          },
          container: {
            height: 510,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            // borderWidth: 0.3,
            elevation: 20,
            borderColor: 'grey',
          },
        }}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          <TouchableOpacity activeOpacity={1}>
            <View
              style={{
                alignSelf: 'flex-end',

                paddingRight: 20,
              }}>
              <TouchableOpacity
                onPress={() => refRBSheet.current.close()}
                style={styles.closebtn}>
                <Icon size={20} color="#9e9e9e" size={15} name="cross" />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  Add Participants
                </Text>
              </View>
            </View>
            <View style={{flex: 2, paddingHorizontal: 35}}>
              <View style={{flex: 1, marginTop: 20}}>
                <CustomSearch text="Search participants" />

                {members.map(members => (
                  <Card
                    name={members.name}
                    image={members.image}
                    key={members.id}
                  />
                ))}
              </View>

              <View style={styles.btn}>
                <CustomBtn name={'Save Change'} width={'70%'} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </RBSheet>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollview}
        contentContainerStyle={{justifyContent: 'space-between'}}>
        <View
          style={{
            flex: 1,
          }}>
          {userinfo.map(input => (
            <CardToggle
              key={input.id}
              name={input.name}
              admin={input.admin}
              image={input.image}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.endheight}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: Color.white,
    flex: 1,
  },
  btn: {
    height: 45,
    marginVertical: 15,
  },
  endheight: {
    height: '23%',
    width: '100%',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  closebtn: {
    marginVertical: 3,
    height: 25,
    width: 25,
    borderRadius: 25,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sheetbtn: {
    marginVertical: 35,
    width: '100%',
    height: 45,
  },
});

export default Screen1;
