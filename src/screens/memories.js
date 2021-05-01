import React, {useRef, useState} from 'react';
import {
  View,
  StatusBar,
  Text,
  Image,
  // TextInput,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CustomSearch from '../component/CustomSearch';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import Entypo from 'react-native-vector-icons/Entypo';
import Iconnn from 'react-native-vector-icons/Feather';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Header, BottomSheet, ListItem} from 'react-native-elements';
import Color from '../assets/constants/colors';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Iconn from 'react-native-vector-icons/Ionicons';
import Card from '../component/Card';
import {ScrollView} from 'react-native';
import CustomBtn from '../component/custombtn';
import Cardd from '../component/CustCard';
import Btn from '../component/custombtn';
import SvgUri from 'react-native-svg-uri';
import {TouchableWithoutFeedback} from 'react-native';
import Avatars from '../component/Avatars';
import FacePile from 'react-native-face-pile';
import NewMemory from '../component/creatememorybsheet';
const Memories = ({navigation}) => {
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

  const [arr, setarr] = React.useState([
    {
      id: 1,
      url: require('../assets/images/images.jpg'),
    },
    {
      id: 2,
      url: require('../assets/images/images.jpg'),
    },
    {
      id: 3,
      url: require('../assets/images/images.jpg'),
    },
    {
      id: 4,
      url: require('../assets/images/images.jpg'),
    },
    {
      id: 5,
      url: require('../assets/images/images.jpg'),
    },
    {
      id: 6,
      url: require('../assets/images/images.jpg'),
    },
  ]);
  const [count, setcount] = React.useState(arr.length);
  const [morepics, setmpics] = React.useState([]);
  const [number, setnumber] = React.useState(0);
  console.log('count', count);

  const handleimages = () => {
    console.log('pressed');
    // const temp = [...arr];
  };

  const [sheet, opensheet] = React.useState(false);
  return (
    <View style={{backgroundColor: Color.background, flex: 1}}>
      <>
        <View
          style={{
            height: '18%',
            backgroundColor: Color.lightPurple,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            justifyContent: 'center',
            paddingHorizontal: 15,
            paddingVertical: 20,

            //justifyContent: 'center',
          }}>
          <View
            style={{
              //backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            {/* <View style={{backgroundColor: 'red'}}>
            <Text>Yes</Text>
          </View> */}
            <View style={{flex: 1}}>
              <Iconn
                onPress={() => navigation.goBack()}
                name="arrow-back"
                size={25}
                color="black"
              />
            </View>
            <View
              style={{
                flex: 3,
                alignItems: 'center',
                //backgroundColor: 'yellow',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 25, fontWeight: '700'}}>Memories</Text>
            </View>
            <View style={{flex: 1}}>
              {/* <Iconn name="arrow-back" size={25} color="black" /> */}
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            elevation: 5,
            marginTop: -25,
            flexDirection: 'row',
            // paddingVertical: 10,
            alignItems: 'center',
            width: '90%',

            alignSelf: 'center',
            borderRadius: 30,
            paddingHorizontal: 14,
          }}>
          <Icon name="magnifier" size={16} color="black" />
          <TextInput
            style={{flex: 1, borderRadius: 30, marginLeft: 10, color: 'black'}}
            placeholder="Search your memories"
            placeholderTextColor="grey"
          />
        </View>
        <View style={{marginVertical: 20}}>
          <View
            style={{
              width: '80%',
              height: 45,

              alignSelf: 'center',
            }}>
            <CustomBtn
              name={'+ New Memory'}
              onPress={() => refRBSheet.current.open()}
            />
          </View>
        </View>

        <ScrollView style={{flex: 1}}>
          <View style={{flex: 1, paddingLeft: 10}}>
            <View style={{marginRight: 13, marginVertical: 10}}>
              <Text>March</Text>
            </View>

            <FlatList
              showsVerticalScrollIndicator={false}
              style={{flex: 1, backgroundColor: 'white'}}
              data={arr}
              numColumns={2}
              keyExtractor={(item, index) => item.id}
              ItemSeparatorComponent={() => <View style={{height: 15}}></View>}
              renderItem={(item, index) => {
                console.log(item);
                if (item.index <= 2) {
                  // setnumber(number + 1);
                  // console.log('updated', number);
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('MemoryDetail')}>
                      <Image
                        // onPress={() => {
                        //   console.log('press');
                        //   navgation.navigate('MemoryDetail');
                        // }}
                        source={item.item.url}
                        style={{
                          height: 80,
                          width: 130,
                          borderRadius: 20,
                          marginRight: 10,
                        }}
                      />
                    </TouchableOpacity>
                  );
                } else if (item.index == 3 && count > 4) {
                  console.log('elseif');
                  let num = count;
                  return (
                    <TouchableOpacity
                      onPress={handleimages}
                      style={{
                        // backgroundColor: 'red',
                        height: 80,
                        // opacity: 0.3,
                        width: 130,
                        borderRadius: 20,
                        marginRight: 10,
                      }}>
                      <Image
                        source={item.item.url}
                        style={{
                          opacity: 0.6,
                          height: 80,
                          width: 130,
                          borderRadius: 20,
                          marginRight: 10,
                          // marginHorizontal: 25,
                        }}
                      />

                      <View
                        style={{
                          flex: 1,
                          // backgroundColor: 'transparent',
                          borderRadius: 20,
                          // zIndex: 90,
                          justifyContent: 'center',
                          // alignItems: 'center',
                          position: 'absolute',
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          // opacity: 0.3,
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                          }}>
                          +{num - 3}
                        </Text>
                        <Text
                          style={{
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                          }}>
                          more
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                } else if (item.index === 3 && count == 4) {
                  return (
                    <Image
                      source={item.item.url}
                      style={{
                        height: 80,
                        width: 110,
                        borderRadius: 20,
                        // marginHorizontal: 25,
                        marginRight: 10,
                      }}
                    />
                  );
                }
              }}
            />

            <View style={{marginRight: 13, marginVertical: 10}}>
              <Text>January</Text>
            </View>

            <FlatList
              showsVerticalScrollIndicator={false}
              style={{flex: 1, backgroundColor: 'white'}}
              data={arr}
              numColumns={2}
              keyExtractor={(item, index) => item.id}
              ItemSeparatorComponent={() => <View style={{height: 15}}></View>}
              renderItem={(item, index) => {
                console.log(item);
                if (item.index <= 2) {
                  return (
                    <Image
                      source={item.item.url}
                      style={{
                        height: 80,
                        width: 130,
                        borderRadius: 20,
                        // marginHorizontal: 10,
                        marginRight: 10,
                      }}
                    />
                  );
                } else if (item.index == 3 && count > 4) {
                  console.log('elseif');
                  let num = count;
                  return (
                    <TouchableOpacity
                      onPress={handleimages}
                      style={{
                        // backgroundColor: 'red',
                        height: 80,
                        // opacity: 0.3,
                        width: 130,
                        borderRadius: 20,
                        // marginHorizontal: 10,
                        marginRight: 10,
                      }}>
                      <Image
                        source={item.item.url}
                        style={{
                          opacity: 0.6,
                          height: 80,
                          width: 130,
                          borderRadius: 20,
                          // marginHorizontal: 25,
                        }}
                      />

                      {/* <Image
                      source={item.item.url}
                      style={{
                        height: 80,
                        width: 110,
                        borderRadius: 20,
                        marginHorizontal: 25,
                      }}
                    /> */}
                      {/* <Text>yes</Text> */}
                      <View
                        style={{
                          flex: 1,
                          // backgroundColor: 'transparent',
                          borderRadius: 20,
                          // zIndex: 90,
                          justifyContent: 'center',
                          // alignItems: 'center',
                          position: 'absolute',
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          // opacity: 0.3,
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                          }}>
                          +{num - 3}
                        </Text>
                        <Text
                          style={{
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                          }}>
                          more
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                } else if (item.index === 3 && count == 4) {
                  return (
                    <Image
                      source={item.item.url}
                      style={{
                        height: 80,
                        width: 110,
                        borderRadius: 20,
                        // marginHorizontal: 25,
                        marginRight: 10,
                      }}
                    />
                  );
                }
              }}
            />
          </View>
        </ScrollView>

        <View style={{height: '14%', width: '100%'}}></View>
      </>
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

            borderColor: 'grey',
            elevation: 10,
          },
        }}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          <TouchableOpacity activeOpacity={1}>
            <View
              style={{
                alignSelf: 'flex-end',

                paddingRight: 20,
              }}>
              <TouchableOpacity
                onPress={() => refRBSheet.current.close()}
                style={styles.closebtn}>
                <Entypo size={20} color="#9e9e9e" size={15} name="cross" />
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
                <ScrollView style={{flex: 1}}>
                  <CustomSearch text="Search participants" />
                  {members.map(members => (
                    <Cardd
                      name={members.name}
                      image={members.image}
                      key={members.id}
                    />
                  ))}
                </ScrollView>
              )}
              <View style={styles.btn}>
                <CustomBtn name={'Create Memory'} width={'70%'} color="black" />
              </View>
            </View>
          </TouchableOpacity>
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
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    // borderWidth: 1,
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
    color: 'black',
    borderColor: Color.purple,
  },
  inputtextarea: {
    width: '100%',
    lineHeight: 3,
    color: 'black',
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
export default Memories;
