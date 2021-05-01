import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';
const Card = ({name, image}) => {
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
            <Text style={{fontSize: 14, fontWeight: 'normal'}}>{name}</Text>
          </View>

          <View style={styles.iconcontainer}>
            <Icon color="black" size={13} name="minus-a" />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.3,
    borderColor: 'whitesmoke',

    flex: 1,
  },
  imagecontainer: {
    width: 40,
    height: 40,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 8,
  },
  iconcontainer: {
    height: 25,
    width: 25,
    borderRadius: 25,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Card;
