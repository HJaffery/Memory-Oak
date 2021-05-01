import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {Overlay, BottomSheet, ListItem} from 'react-native-elements';
import Color from '../assets/constants/colors';

import Card from '../component/Card';
import Iconnn from 'react-native-vector-icons/Ionicons';
import Custbtn from '../component/custombtn';
import {ScrollView} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
const Screen1 = () => {
  const [visible, setVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [response, setresponse] = useState('');
  const [photoUpdated, setphotoupdated] = useState(false);
  const [photo, setphoto] = useState(require('../assets/images/images.jpg'));
  const toggleOverlay = () => {
    setVisible(!visible);
  };

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

  const [userinfo, setinfo] = React.useState([
    {
      id: 1,
      image: require('../assets/images/images.jpg'),
      name: 'Miguals',
      description:
        'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,LoreLorem',

      time: '2 hrs ago',
      people: '20',
    },
    {
      id: 2,
      image: require('../assets/images/images.jpg'),
      name: 'Miguals',
      description:
        'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,LoreLorem',

      time: '2 hrs ago',
      people: '20',
    },
    {
      id: 3,
      image: require('../assets/images/images.jpg'),

      description:
        'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,LoreLorem',
      name: 'Miguals',
      time: '2 hrs ago',
      people: '20',
    },
    {
      id: 4,
      image: require('../assets/images/images.jpg'),

      description:
        'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,LoreLorem',
      name: 'Miguals',
      time: '2 hrs ago',
      people: '20',
    },
    {
      id: 5,
      image: require('../assets/images/images.jpg'),

      description:
        'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,LoreLorem',
      name: 'Miguals',
      time: '2 hrs ago',
      people: '20',
    },
    {
      id: 6,
      image: require('../assets/images/images.jpg'),

      description:
        'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,LoreLorem',
      name: 'Miguals',
      time: '2 hrs ago',
      people: '20',
    },
  ]);

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContentContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.headerlefttext}>Memory</Text>
            <Text style={styles.headerrighttext}>Oak</Text>
          </View>
          <TouchableOpacity
            onPress={toggleOverlay}
            style={styles.ImageContainer}>
            {!photoUpdated && (
              <Image style={styles.image} source={photo} resizeMode="cover" />
            )}

            {photoUpdated && (
              <Image
                style={styles.image}
                source={{uri: response.uri}}
                resizeMode="cover"
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <Overlay
        overlayStyle={styles.overlayConatiner}
        isVisible={visible}
        onBackdropPress={toggleOverlay}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setIsVisible(true)}
          style={styles.overlayimageContainer}>
          <View style={styles.overlayimage}>
            {!photoUpdated && (
              <Image style={styles.image} source={photo} resizeMode="cover" />
            )}

            {photoUpdated && (
              <Image
                style={styles.image}
                source={{uri: response.uri}}
                resizeMode="cover"
              />
            )}
          </View>
          <View style={styles.editcontainer}>
            <Iconnn size={12} color="black" name="add" />
          </View>
        </TouchableOpacity>

        <View style={styles.btn}>
          <Custbtn
            name={'View Profile'}
            width={'70%'}
            color="black"
            background="white"
          />
        </View>
        <View
          style={{
            height: 45,
            marginVertical: 15,
          }}>
          <Custbtn
            name={'Logout'}
            width={'70%'}
            color="white"
            background={Color.purple}
          />
        </View>
      </Overlay>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollview}
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        {userinfo.map(input => (
          <Card
            key={input.id}
            name={input.name}
            description={input.description}
            time={input.time}
            people={input.people}
            image={input.image}
          />
        ))}
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
      <View style={styles.emptycontainer}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    height: '20%',
    backgroundColor: Color.lightPurple,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,

    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  headerContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerlefttext: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerrighttext: {
    marginLeft: 3,
    fontWeight: 'bold',
    fontSize: 20,
    color: Color.purple,
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
  overlayConatiner: {
    height: 250,
    width: 200,

    borderRadius: 20,
  },
  overlayimageContainer: {
    width: 60,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  overlayimage: {
    width: 70,
    borderRadius: 60,
    height: 70,
    overflow: 'hidden',
    alignItems: 'center',
  },
  editcontainer: {
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
  btn: {
    height: 45,
  },
  scrollview: {
    width: '100%',

    marginTop: -40,

    flex: 1,
  },
  emptycontainer: {
    height: '14%',
    width: '100%',
    backgroundColor: 'white',
  },
});
export default Screen1;
