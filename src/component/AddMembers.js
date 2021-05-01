import React, {useRef, useState} from 'react';
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import RBSheet from 'react-native-raw-bottom-sheet';

import CustomBtn from '../component/custombtn';

import Icon from 'react-native-vector-icons/Entypo';

import moment from 'moment';
import Card from '../component/CustCard';
import CustomSearch from '../component/CustomSearch';
export default function AddMembers() {
  moment().format();
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

  return (
    <View style={styles.container}>
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      />
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
          },
        }}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
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
                Add Members
              </Text>
            </View>
          </View>
          <View style={{flex: 2, paddingHorizontal: 35}}>
            <View style={{flex: 1, marginTop: 20}}>
              <CustomSearch text="Search member" />

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
        </ScrollView>
      </RBSheet>
    </View>
  );
}
const styles = StyleSheet.create({
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
  btn: {
    marginVertical: 35,
    width: '100%',
    height: 45,
  },
});
