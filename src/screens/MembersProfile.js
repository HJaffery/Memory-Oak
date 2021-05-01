import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

import Color from '../assets/constants/colors';
import Icon from 'react-native-vector-icons/Feather';
import Iconn from 'react-native-vector-icons/Ionicons';

import Mutual from './MutualFriends';
const Screen1 = ({navigation}) => {
  return (
    <View style={{backgroundColor: Color.background, flex: 1}}>
      <View style={styles.header}>
        <ImageBackground
          source={require('../assets/images/images.jpg')}
          style={styles.imagebackground}>
          <View style={styles.headerfirstline}>
            <View>
              <Iconn
                onPress={() => navigation.pop()}
                name="arrow-back"
                size={24}
                color="white"
              />
            </View>
            <View style={styles.editcontainer}>
              <Icon name="edit-2" size={14} color={Color.purple} />
            </View>
          </View>
          <View
            style={{
              flex: 1,

              justifyContent: 'space-around',
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                School Collection
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{flex: 1}}>
        <Mutual />
      </View>
      <View style={{height: '14%', width: '100%'}}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: '30%',
    width: '100%',

    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
  },
  imagebackground: {
    flex: 1,
    resizeMode: 'contain',
    paddingTop: 25,
    paddingHorizontal: 15,
  },
  headerfirstline: {
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editcontainer: {
    height: 25,
    width: 25,
    borderRadius: 25,

    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen1;
