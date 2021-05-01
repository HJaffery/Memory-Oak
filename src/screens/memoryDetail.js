import React, {useRef, useState} from 'react';
import {Container, Tab, Tabs} from 'native-base';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Participant from '../screens/Participants';
import Information from '../screens/memoryInformation';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconn from 'react-native-vector-icons/Feather';
import {BottomSheet, ListItem} from 'react-native-elements';
import Card from '../component/CustCard';
import CustomSearch from '../component/CustomSearch';
import RBSheet from 'react-native-raw-bottom-sheet';
import * as ImagePicker from 'react-native-image-picker';
import Iconnn from 'react-native-vector-icons/Entypo';
import CustomBtn from '../component/custombtn';
import Color from '../assets/constants/colors';
import Masonary from '../component/Masonry';
import Custbtn from '../component/custombtn';
const TabsScrollableExample = ({navigation}) => {
  // state = {
  //   active: 0,
  // };

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

  const [active, setactive] = React.useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require('../assets/images/images.jpg')}
          style={styles.backgroundimage}>
          <View style={styles.headerContentContainer}>
            <View>
              <Icon
                onPress={() => navigation.goBack()}
                name="arrow-back"
                size={24}
                color="white"
              />
            </View>
            <View style={styles.editcontainer}>
              <Iconn
                onPress={() => refRBSheet.current.open()}
                name="edit-2"
                size={14}
                color={Color.purple}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 10,
              justifyContent: 'space-around',
            }}>
            <View style={styles.btn}>
              {active === 1 && (
                <Custbtn
                  name={'+Add Media'}
                  width={'50%'}
                  color="black"
                  background="white"
                />
              )}
            </View>
            <View>
              <Text style={styles.headertext}>School Collection</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <Container style={styles.tabContainer}>
        <Tabs
          onChangeTab={tab => setactive(tab.i)}
          tabBarInactiveTextColor="black"
          tabBarUnderlineStyle={styles.tabsunderline}
          tabContainerStyle={styles.tabcontainerstyle}
          tabStyle={{backgroundColor: 'white'}}>
          <Tab
            heading="Information"
            activeTextStyle={{color: Color.purple, fontWeight: 'bold'}}
            activeTabStyle={{
              backgroundColor: 'white',
            }}
            tabStyle={{backgroundColor: 'white'}}>
            <Information />
          </Tab>
          <Tab
            heading="Media"
            activeTabStyle={{
              backgroundColor: 'white',
            }}
            activeTextStyle={{color: Color.purple, fontWeight: 'bold'}}
            tabStyle={{backgroundColor: 'white'}}>
            <Masonary />
          </Tab>

          <Tab
            activeTextStyle={{color: Color.purple, fontWeight: 'bold'}}
            activeTabStyle={{
              backgroundColor: 'white',
            }}
            heading="Participants"
            tabStyle={{backgroundColor: 'white'}}>
            <Participant />
          </Tab>
        </Tabs>

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
            <TouchableOpacity activeOpacity={1}>
              <View
                style={{
                  alignSelf: 'flex-end',

                  paddingRight: 20,
                }}>
                <TouchableOpacity
                  onPress={() => refRBSheet.current.close()}
                  style={styles.closebtn}>
                  <Iconnn size={20} color="#9e9e9e" size={15} name="cross" />
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
                  style={styles.sheetimageconatiner}>
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
                    <Iconn name="edit-2" size={10} color={Color.purple} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{flex: 2, paddingHorizontal: 35}}>
                <View style={{marginBottom: 35}}>
                  <View>
                    <Text style={{color: 'grey', fontSize: 12}}>
                      Title Name
                    </Text>
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
      </Container>
    </View>
  );
};
export default TabsScrollableExample;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    height: '30%',
    width: '100%',

    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
  },
  backgroundimage: {
    flex: 1,
    resizeMode: 'contain',
    paddingTop: 25,
    paddingHorizontal: 15,
  },
  headerContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headertext: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  ImageContainer: {
    height: 40,
    width: 40,
    borderRadius: 40,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },

  editcontainer: {
    height: 25,
    width: 25,
    borderRadius: 25,

    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    height: 45,
  },
  tabContainer: {backgroundColor: 'white', width: '90%', alignSelf: 'center'},
  tabsunderline: {
    backgroundColor: 'white',
    borderColor: Color.purple,
    borderBottomWidth: 1,
  },
  tabcontainerstyle: {
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
    elevation: 0,
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
  sheetimageconatiner: {
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
  inputtext: {
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
