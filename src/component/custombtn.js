import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import Color from '../assets/constants/colors';

const CustBtn = ({name, width, color, background, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        backgroundColor: background ? background : '',
        width: width ? width : '70%',

        borderWidth: 0.8,
        borderColor: Color.purple,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      }}>
      <Text style={{color: color ? color : 'black'}}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CustBtn;
