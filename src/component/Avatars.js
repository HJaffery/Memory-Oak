import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import colors from '../assets/constants/colors';

import Color from '../assets/constants/colors';

const Card = ({size, onPress}) => {
  const people = [
    'https://assets.6sigma.us/wp-content/uploads/2017/05/bill-gates-jpg.jpg?x92000',
    'https://assets.6sigma.us/wp-content/uploads/2017/05/bill-gates-jpg.jpg?x92000',
    'https://assets.6sigma.us/wp-content/uploads/2017/05/bill-gates-jpg.jpg?x92000',
    'https://assets.6sigma.us/wp-content/uploads/2017/05/bill-gates-jpg.jpg?x92000',
    'https://assets.6sigma.us/wp-content/uploads/2017/05/bill-gates-jpg.jpg?x92000',
  ];
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        width: 60,
        height: 20,
        alignItems: 'center',
      }}>
      {people.map((url, index) => {
        console.log(index);
        if (index <= 3) {
          return (
            <Image
              key={index}
              source={{uri: url}}
              style={{
                height: size == 'medium' ? 30 : 20,
                width: size == 'medium' ? 30 : 20,
                marginHorizontal:
                  size == 'medium' ? (index + 1 - 1) * 20 : (index - 1) * 15,
                borderRadius: 25,
                position: 'absolute',
              }}
            />
          );
        } else {
          return (
            <TouchableOpacity
              onPress={onPress}
              style={{
                height: size == 'medium' ? 30 : 20,
                width: size == 'medium' ? 30 : 20,
                marginHorizontal:
                  size == 'medium' ? (index + 1 - 1) * 20 : (index - 1) * 15,
                borderRadius: 25,
                // position: 'absolute',
                backgroundColor: colors.purple,
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 5,
                // alignSelf: 'center',
              }}>
              <View>
                <Text style={{fontWeight: '300', fontSize: 15, color: 'white'}}>
                  +
                </Text>
              </View>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};

export default Card;
