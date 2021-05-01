import React, {useRef} from 'react';
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Avatars from '../component/Avatars';
import CustomBtn from '../component/custombtn';
import Color from '../assets/constants/colors';
import Icon from 'react-native-vector-icons/Entypo';
import Iconn from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';
export default function Example() {
  const refRBSheet = useRef();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
      }}>
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      />
      <RBSheet
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
            height: 490,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
          },
        }}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          <View
            style={{
              alignSelf: 'flex-end',
              //paddingHorizontal: 10,
              paddingRight: 20,
            }}>
            <TouchableOpacity
              style={{
                //   alignSelf: 'flex-end',
                height: 25,
                width: 25,
                borderRadius: 25,
                backgroundColor: 'whitesmoke',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {/* <Image
                style={{width: 10, height: 10}}
                source={require('../assets/images/images.jpg')}
                resizeMode="cover"
              /> */}

              <Icon size={20} color="#9e9e9e" size={15} name="cross" />
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
              style={{
                width: 60,
                height: 60,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 25,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 70,
                  borderRadius: 60,
                  height: 70,
                  overflow: 'hidden',
                  alignItems: 'center',
                }}>
                {/* {!photoUpdated && ( */}
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={require('../assets/images/images.jpg')}
                  resizeMode="cover"
                />
                {/* //   )} */}

                {/* {photoUpdated && (
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={{uri: response.uri}}
                  resizeMode="cover"
                />
              )} */}
              </View>
              <View
                style={{
                  width: 20,
                  height: 20,

                  borderRadius: 30,
                  position: 'absolute',
                  left: 45,
                  //   bottom: 30,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'whitesmoke',
                  overflow: 'hidden',
                }}>
                <Iconn size={20} color="black" size={10} name="edit-2" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 2, paddingHorizontal: 35}}>
            <View style={{}}>
              <View>
                <Text style={{color: 'grey', fontSize: 12}}>Group's Name</Text>
              </View>

              <View style={{width: '100%'}}>
                <TextInput
                  style={{
                    height: 40,
                    width: '100%',
                    borderBottomWidth: 0.5,
                    borderColor: Color.purple,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: 25,
                marginBottom: 10,
                // borderColor: 'red',
                // borderWidth: 1,
              }}>
              <Text>Members</Text>
            </View>
            <View
              style={{
                marginBottom: 10,
                marginTop: 5,
                width: '100%',
                // borderColor: 'red',
                // borderWidth: 1,
              }}>
              <Avatars size={'medium'} />
            </View>
            <View
              style={{
                marginVertical: 35,
                width: '100%',
                height: 45,

                // backgroundColor: 'green',
                // alignSelf: 'center',
              }}>
              <CustomBtn name={'Create Group'} />
            </View>
          </View>
        </ScrollView>
      </RBSheet>
    </View>
  );
}
