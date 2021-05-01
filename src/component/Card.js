import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import Color from '../assets/constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
const Card = ({name, description, image, time, people}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image
          source={image}
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode="cover"
        />
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{name}</Text>
          </View>

          <View>
            <Text
              style={{
                fontSize: 13,
                color: 'rgb(18,16,87)',
              }}>
              {time}
            </Text>
          </View>
        </View>

        <View style={{marginTop: 2}}>
          <Text style={{color: 'grey', opacity: 0.6}}>{description}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="md-eye-outline"
            color="black"
            size={20}
            style={{marginRight: 5}}
          />
          <Text> {people}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    elevation: 2,

    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  imagecontainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    overflow: 'hidden',
    marginRight: 8,
  },
});
export default Card;
