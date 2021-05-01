import React from 'react';
import {View, StatusBar, Text} from 'react-native';

import Color from '../assets/constants/colors';

const Splash = () => {
  return (
    <View
      style={{
        backgroundColor: Color.purple,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar hidden />
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 35, color: 'white'}}>
          Memory Oak
        </Text>
      </View>
    </View>
  );
};

export default Splash;
