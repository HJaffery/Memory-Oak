import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const CustBtn = ({text}) => {
  return (
    <View style={styles.container}>
      <Icon name="magnifier" size={16} color="black" />
      <TextInput
        style={styles.textinput}
        placeholder={text}
        placeholderTextColor="grey"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation: 3,

    flexDirection: 'row',

    alignItems: 'center',
    width: '100%',

    alignSelf: 'center',
    borderRadius: 30,
    paddingHorizontal: 14,
  },
  textinput: {
    flex: 1,
    borderRadius: 30,
    marginLeft: 10,
    color: 'black',
  },
});
export default CustBtn;
