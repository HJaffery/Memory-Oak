import React from 'react';
import {View, StyleSheet, Text, Image, TextInput} from 'react-native';

import Color from '../assets/constants/colors';
import Icon from 'react-native-vector-icons/AntDesign';

import {ScrollView} from 'react-native';

import SvgUri from 'react-native-svg-uri';
const Screen1 = () => {
  const [heart, setheart] = React.useState(false);

  return (
    <View style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: Color.white,
          flex: 1,
        }}
        contentContainerStyle={{justifyContent: 'space-between'}}>
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <View style={styles.align}>
              <View>
                <Text style={{fontSize: 18}}>Description</Text>
              </View>

              <View>
                <Text>April 10,2021</Text>
              </View>
            </View>

            <View style={{marginTop: 5}}>
              <Text
                style={{
                  fontSize: 12,
                  color: 'rgb(18,16,87)',
                  letterSpacing: 0.5,
                }}>
                Hi Everyone!
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  letterSpacing: 0.5,
                  color: 'rgb(18,16,87)',
                }}>
                I'm doing a long established fact that a reader will be
                distracted by the readable content of a page when loooking at
                its layout
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 14}}>Comments</Text>
        </View>
        <View style={styles.textinput}>
          <TextInput
            style={{flex: 1, borderRadius: 30, color: 'black'}}
            placeholder="Write a comment.."
            placeholderTextColor="grey"
          />

          <SvgUri
            width="15"
            height="15"
            source={require('../assets/images/comment.svg')}
          />
        </View>

        <View style={styles.commentcontainer}>
          <View style={styles.image}>
            <Image
              source={require('../assets/images/images.jpg')}
              style={{
                width: '100%',
                height: '100%',
              }}
              resizeMode="cover"
            />
          </View>
          <View style={{flex: 1}}>
            <View>
              <View>
                <Text style={{fontSize: 18}}>nouman</Text>
              </View>
            </View>

            <View style={{marginVertical: 5}}>
              <Text
                style={{
                  fontSize: 10,
                  color: 'rgb(18,16,87)',
                }}>
                2 hrs ago
              </Text>
            </View>

            <View style={styles.text}>
              <Text
                style={{
                  fontSize: 10,
                  color: 'rgb(18,16,87)',
                }}>
                I am doing a long established fact that a will be a readable
                content
              </Text>
            </View>

            <View style={styles.align}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {!heart && (
                  <Icon
                    onPress={() => {
                      setheart(true);
                    }}
                    color="grey"
                    name="hearto"
                    size={20}
                    style={{marginRight: 5}}
                  />
                )}
                {heart && (
                  <Icon
                    onPress={() => {
                      setheart(false);
                    }}
                    color={Color.purple}
                    name="heart"
                    size={20}
                    style={{marginRight: 5}}
                  />
                )}
                <View>
                  <Text style={{fontSize: 11}}>Liked</Text>
                </View>
              </View>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <SvgUri
                  width="15"
                  height="15"
                  source={require('../assets/images/comment.svg')}
                />
                <View>
                  <Text style={{fontSize: 11, marginLeft: 5}}>45 Comments</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <SvgUri
                  width="15"
                  height="15"
                  source={require('../assets/images/reply.svg')}
                />
                <View>
                  <Text style={{fontSize: 11, marginLeft: 5}}>5 Reply</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.endheight}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',

    marginVertical: 10,
    flexDirection: 'row',
    paddingVertical: 10,

    width: '100%',
    alignSelf: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
  },
  align: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textinput: {
    backgroundColor: 'white',
    elevation: 5,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
    borderRadius: 30,
    paddingHorizontal: 8,
  },
  commentcontainer: {
    backgroundColor: 'white',

    marginVertical: 10,
    flexDirection: 'row',
    paddingVertical: 10,

    width: '95%',
    alignSelf: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 30,
    overflow: 'hidden',
    marginRight: 8,
  },
  text: {
    paddingBottom: 8,
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
  },
  endheight: {
    height: '23%',
    width: '100%',
    backgroundColor: 'white',
  },
});
export default Screen1;
