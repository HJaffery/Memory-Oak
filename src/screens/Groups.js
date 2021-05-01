import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Color from '../assets/constants/colors';
import {BottomSheet, ListItem} from 'react-native-elements';
import Iconn from 'react-native-vector-icons/Ionicons';
import Iconnn from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native';
import CustomBtn from '../component/custombtn';
import RBSheet from 'react-native-raw-bottom-sheet';
import FacePile from 'react-native-face-pile';
import Icon from 'react-native-vector-icons/Entypo';
import CustomSearch from '../component/CustomSearch';
import Card from '../component/CustCard';
import * as ImagePicker from 'react-native-image-picker';
// import {TouchableOpacity} from 'react-native-gesture-handler';
const Screen1 = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [response, setresponse] = useState('');
  const [photoUpdated, setphotoupdated] = useState(false);
  const [photo, setphoto] = useState(require('../assets/images/images.jpg'));

  const refRBSheet = useRef();

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
  const FACES = [
    {
      id: 0,
      imageUrl:
        'https://assets.6sigma.us/wp-content/uploads/2017/05/bill-gates-jpg.jpg?x92000',
    },
    {
      id: 1,
      imageUrl:
        'https://assets.6sigma.us/wp-content/uploads/2017/05/bill-gates-jpg.jpg?x92000',
    },
    {
      id: 2,
      imageUrl:
        'https://assets.6sigma.us/wp-content/uploads/2017/05/bill-gates-jpg.jpg?x92000',
    },
    {
      id: 3,
      imageUr:
        'https://assets.6sigma.us/wp-content/uploads/2017/05/bill-gates-jpg.jpg?x92000',
    },
    {
      id: 4,
      imageUrl:
        'https://assets.6sigma.us/wp-content/uploads/2017/05/bill-gates-jpg.jpg?x92000',
    },
  ];

  const [userinfo, setinfo] = React.useState([
    {
      id: 1,
      image: require('../assets/images/images.jpg'),
      groupname: 'family',
      description:
        'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,LoreLorem',

      time: '2 hrs ago',
      members: '20',
    },
    {
      id: 2,
      image: require('../assets/images/images.jpg'),
      groupname: 'Miguals',
      description:
        'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,LoreLorem',

      time: '2 hrs ago',
      members: '20',
    },
    {
      id: 3,
      image: require('../assets/images/images.jpg'),

      description:
        'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,LoreLorem',
      groupname: 'Friends',
      time: '2 hrs ago',
      members: '20',
    },
    {
      id: 4,
      image: require('../assets/images/images.jpg'),

      description:
        'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,LoreLorem',
      groupname: 'Miguals',
      time: '2 hrs ago',
      members: '20',
    },
    {
      id: 5,
      image: require('../assets/images/images.jpg'),

      description:
        'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,LoreLorem',
      groupname: 'Miguals',
      time: '2 hrs ago',
      members: '20',
    },
    {
      id: 6,
      image: require('../assets/images/images.jpg'),

      description:
        'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,LoreLorem',
      groupname: 'Miguals',
      time: '2 hrs ago',
      people: '20',
    },
  ]);
  console.log('navigation', navigation);
  return (
    <View style={{backgroundColor: Color.background, flex: 1}}>
      <View style={styles.header}>
        <View style={styles.headertext}>
          <View style={{flex: 1}}>
            <Iconn
              name="arrow-back"
              size={25}
              color="black"
              onPress={() => navigation.goBack()}
            />
          </View>
          <View>
            <Text style={{fontSize: 25, fontWeight: '700'}}>Groups</Text>
          </View>
          <View style={{flex: 1}}></View>
        </View>
      </View>

      <View style={styles.serachbarcontainer}>
        <CustomSearch text="Search participants" />
      </View>
      <View style={{flex: 1, paddingTop: 25}}>
        <View style={styles.btn}>
          <CustomBtn
            name={'+ Add Group'}
            onPress={() => refRBSheet.current.open()}
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginTop: 10}}>
          {userinfo.map(input => (
            <TouchableOpacity
              key={input.id}
              style={styles.cardcontainer}
              onPress={() => navigation.navigate('GroupTab')}>
              <View style={styles.image}>
                <Image
                  source={input.image}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode="cover"
                />
              </View>
              <View style={{flex: 1}}>
                <View style={styles.textallign}>
                  <View>
                    <Text style={{fontSize: 18}}>{input.groupname}</Text>
                  </View>
                </View>

                <View style={styles.textallign}>
                  <View>
                    <Text style={{fontSize: 10}}>{input.members} Members</Text>
                  </View>

                  <View>
                    <FacePile numFaces={3} faces={FACES} circleSize={13} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
              height: 680,
            },
            draggableIcon: {
              backgroundColor: 'white',
            },
            container: {
              elevation: 20,
              height: 610,
              borderTopRightRadius: 40,
              borderTopLeftRadius: 40,
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
                  style={styles.close}>
                  <Icon color="#9e9e9e" size={12} name="cross" />
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <View>
                  <Text style={{fontWeight: 'bold', fontSize: 18}}>
                    Create Group
                  </Text>
                </View>

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setIsVisible(true)}
                  style={styles.imageconatiner}>
                  <View style={styles.sheetimage}>
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
              <View style={{flex: 1, paddingHorizontal: 35}}>
                <View style={{marginBottom: 35}}>
                  <View>
                    <Text style={{color: 'grey', fontSize: 12}}>
                      Group's Name
                    </Text>
                  </View>

                  <View style={{width: '100%'}}>
                    <TextInput style={styles.textinput} />
                  </View>
                </View>

                <View style={{flex: 1}}>
                  <CustomSearch text="Search member" />

                  {members.map(members => (
                    <Card
                      name={members.name}
                      image={members.image}
                      key={members.id}
                    />
                  ))}
                </View>

                <View style={styles.sheetbtn}>
                  <CustomBtn
                    name={'Create group'}
                    width={'70%'}
                    color="black"
                  />
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
                  <ListItem.Title style={l.titleStyle}>
                    {l.title}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))}
          </BottomSheet>
        </RBSheet>
      </View>

      <View style={{height: '14%', width: '100%'}}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: '18%',
    backgroundColor: Color.lightPurple,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  headertext: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  serachbarcontainer: {
    marginTop: -25,

    alignItems: 'center',
    width: '90%',

    alignSelf: 'center',
  },
  btn: {
    width: '80%',
    height: 45,

    alignSelf: 'center',
  },
  cardcontainer: {
    backgroundColor: 'white',

    marginVertical: 7,
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 10,
    elevation: 3,
    width: '90%',

    alignSelf: 'center',

    borderRadius: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    overflow: 'hidden',
    marginRight: 8,
  },
  textallign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  close: {
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
  sheetimage: {
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
  textinput: {
    height: 40,
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: Color.purple,
    color: 'black',
  },
  sheetbtn: {
    marginVertical: 35,
    width: '100%',
    height: 45,
  },
});
export default Screen1;
