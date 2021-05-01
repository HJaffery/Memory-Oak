import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Color from '../assets/constants/colors';

import ToggleSwitch from 'toggle-switch-react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CardToggle = ({name, image, admin, onPress}) => {
  const [toggle, settoggle] = React.useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.imagecontainer}>
        <Image
          source={image}
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontSize: 18}}>{name}</Text>
          </View>

          <View>
            <ToggleSwitch
              isOn={toggle}
              onColor={Color.purple}
              offColor="grey"
              size="small"
              onToggle={isOn => settoggle(isOn)}
            />
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 10,
              color: 'rgb(18,16,87)',
            }}>
            {admin}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',

    marginVertical: 10,
    flexDirection: 'row',
    paddingVertical: 10,

    width: '95%',
    alignSelf: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
  },
  imagecontainer: {
    width: 40,
    height: 40,
    borderRadius: 30,
    overflow: 'hidden',
    marginRight: 8,
  },
});

export default CardToggle;
