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

import RBSheet from 'react-native-raw-bottom-sheet';
import Avatars from '../component/Avatars';
import CustomBtn from '../component/custombtn';
import Color from '../assets/constants/colors';
import Icon from 'react-native-vector-icons/Entypo';

import Iconnn from 'react-native-vector-icons/Feather';

import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {BottomSheet, ListItem} from 'react-native-elements';
import * as ImagePicker from 'react-native-image-picker';
import Card from '../component/CustCard';
import CustomSearch from '../component/CustomSearch';
export default function Example() {
  moment().format();
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

  const [date, setDate] = useState(new Date(1598051730000));
  const [text, setText] = useState('Select a Date');
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [disbaletext, setdisable] = useState(false);
  const [showparticipants, setshowpariticipants] = useState(false);

  const displayparticipantlist = () => {
    setshowpariticipants(true);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');

    if (event.type == 'set') {
      setDate(currentDate);

      setdisable(true);
    }
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  const opensheet = () => {
    refRBSheet.current.open();
  };
  React.useEffect(opensheet, []);

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
            backgroundColor: '#000',
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
                Create Memory
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setIsVisible(true)}
              style={styles.imagecontainer}>
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
              <View style={styles.editbtn}>
                <Iconnn size={12} color="black" name="edit-2" />
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

            <View style={{marginBottom: 35}}>
              <Text style={{color: 'grey', fontSize: 12}}>Descritpion</Text>

              <View style={{width: '100%'}}>
                <TextInput
                  multiline={true}
                  numberOfLines={2}
                  style={styles.inputtextarea}
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={() => setShow(true)}
              style={{marginBottom: 20}}>
              <View>
                <Text style={{color: 'grey', fontSize: 12}}>Date</Text>
              </View>
              {!disbaletext && (
                <View style={styles.disabletext}>
                  <Text style={{color: 'grey', fontSize: 14, opacity: 0.7}}>
                    {text}
                  </Text>
                </View>
              )}
              {disbaletext && (
                <View style={styles.disabletext}>
                  <Text>{moment(date).format('DD/MM/YYYY')}</Text>
                </View>
              )}
            </TouchableOpacity>

            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
            {!showparticipants && (
              <View
                style={{
                  marginTop: 25,
                  marginBottom: 10,
                }}>
                <Text>Participants</Text>
              </View>
            )}
            {!showparticipants && (
              <View style={styles.avatar}>
                <Avatars onPress={displayparticipantlist} size={'medium'} />
              </View>
            )}

            {showparticipants && (
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
            )}
            <View style={styles.btn}>
              <CustomBtn name={'Create Memory'} width={'70%'} color="black" />
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
  imagecontainer: {
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
  editbtn: {
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
  inputtextarea: {
    width: '100%',
    lineHeight: 3,

    padding: 2,
    borderBottomWidth: 0.5,
    borderColor: Color.purple,
  },
  disabletext: {
    width: '100%',

    paddingTop: 13,
    borderBottomWidth: 0.5,
    borderColor: Color.purple,
  },
  avatar: {
    marginBottom: 10,
    marginTop: 5,
    width: '100%',
  },
  btn: {
    marginVertical: 35,
    width: '100%',
    height: 45,
  },
});
