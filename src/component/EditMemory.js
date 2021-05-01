import React, {useRef, useState} from 'react';
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {BottomSheet, ListItem} from 'react-native-elements';
import Card from '../component/CustCard';
import CustomSearch from '../component/CustomSearch';
import RBSheet from 'react-native-raw-bottom-sheet';
import * as ImagePicker from 'react-native-image-picker';

import CustomBtn from './custombtn';
import Color from '../assets/constants/colors';
import Icon from 'react-native-vector-icons/Entypo';

import Iconnn from 'react-native-vector-icons/Feather';

export default function Example() {
  const refRBSheet = useRef();

  const [isVisible, setIsVisible] = useState(false);
  const [response, setresponse] = useState('');
  const [photoUpdated, setphotoupdated] = useState(false);
  const [photo, setphoto] = useState(require('../assets/images/images.jpg'));

  const list = [
    {
      title: 'Camera.....',
      onPress: () => {
        ImagePicker.launchCamera(
          {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 120,
            maxWidth: 120,
          },
          response => {
            if (response.didCancel) {
              return;
            } else {
              setresponse(response);
              setphotoupdated(true);

              console.log(response);
              setIsVisible(false);
            }
          },
        );
      },
    },
    {
      title: 'Choose from Gallery',
      onPress: () =>
        ImagePicker.launchImageLibrary(
          {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 120,
            maxWidth: 120,
          },
          response => {
            if (response.didCancel) {
              return;
            } else {
              setresponse(response);
              setphotoupdated(true);

              console.log(response);
              setIsVisible(false);
            }
          },
        ),
    },
    {
      title: 'Cancel',
      containerStyle: {backgroundColor: 'red'},
      titleStyle: {color: 'white'},
      onPress: () => setIsVisible(false),
    },
  ];

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
            height: 610,
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
                Edit Memory
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setIsVisible(true)}
              style={styles.imageconatiner}>
              <View style={styles.image}>
                {!photoUpdated && (
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={photo}
                    resizeMode="cover"
                  />
                )}

                {photoUpdated && (
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={{uri: response.uri}}
                    resizeMode="cover"
                  />
                )}
              </View>
              <View style={styles.editicon}>
                <Iconnn name="edit-2" size={10} color={Color.purple} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 2, paddingHorizontal: 35}}>
            <View style={{marginBottom: 35}}>
              <View>
                <Text style={{color: 'grey', fontSize: 12}}>Title Name</Text>
              </View>

              <View style={{width: '100%'}}>
                <TextInput style={styles.inputtext} />
              </View>
            </View>

            <View style={{flex: 1}}>
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
              <CustomBtn name={'Create group'} width={'70%'} color="black" />
            </View>
          </View>
        </ScrollView>
        <BottomSheet
          isVisible={isVisible}
          containerStyle={{backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)'}}>
          {list.map((l, i) => (
            <ListItem
              key={i}
              containerStyle={l.containerStyle}
              onPress={l.onPress}>
              <ListItem.Content>
                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </BottomSheet>
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
  imageconatiner: {
    width: 60,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    borderRadius: 60,
    height: 70,
    overflow: 'hidden',
    alignItems: 'center',
  },
  editicon: {
    width: 20,
    height: 20,

    borderRadius: 30,
    position: 'absolute',
    left: 45,

    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
    overflow: 'hidden',
  },
  inputtext: {
    height: 40,
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: Color.purple,
  },
  btn: {
    marginVertical: 35,
    width: '100%',
    height: 45,
  },
});
